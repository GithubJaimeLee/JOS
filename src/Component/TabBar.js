import React, { useState, useLayoutEffect, useCallback } from "react";
import ResizeObserver from "resize-observer-polyfill";
import styled from "styled-components";
import { motion } from "framer-motion";

const PagerContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

const PagerAnimtedContainer = styled(motion.div)`
  flex-direction: row;
  direction: ltr;
  will-change: transform;
  min-height: 0;
  flex: 1;
  display: flex;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: stretch;
  justify-content: flex-start;
  flex-shrink: 0;
  height: 100%;
  overflow: hidden;
  outline: none;
`;

export function Pager({ children, value }) {
  return (
    <PagerContainer>
      <PagerAnimtedContainer
        transition={{
          tension: 190,
          friction: 70,
          mass: 0.4,
        }}
        initial={false}
        animate={{ x: value * -100 + "%" }}
      >
        {React.Children.map(children, (child, i) => (
          <Page
            key={i}
            aria-hidden={value !== i}
            tabIndex={value === i ? 0 : -1}
          >
            {child}
          </Page>
        ))}
      </PagerAnimtedContainer>
    </PagerContainer>
  );
}

export function useCallbackRef() {
  const [ref, setRef] = useState(null);
  const fn = useCallback((node) => {
    setRef(node);
  }, []);

  return [ref, fn];
}

export function useMeasure() {
  const [element, attachRef] = useCallbackRef();
  const [bounds, setBounds] = useState({});

  useLayoutEffect(() => {
    function onResize([entry]) {
      setBounds({
        height: entry.contentRect.height,
        width: entry.contentRect.width,
      });
    }

    const observer = new ResizeObserver(onResize);

    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [element]);

  return {
    bounds,
    ref: attachRef,
  };
}
