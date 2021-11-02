import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import ResizeObserver from "resize-observer-polyfill";
import styled from "styled-components";
import { motion } from "framer-motion";

const TabContainer = styled.div`
  overflow-y: hidden;
  box-shadow: none;
`;

const TabList = styled.div`
  display: block;
  position: relative;
  ${"" /* 下划线 */}
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const TabItem = styled(motion.button)`
  box-sizing: border-box;
  text-align: center;
  user-select: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
  text-decoration: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  padding: 10px 1rem;
  box-sizing: border-box;
  text-overflow: ellipsis;
  line-height: 1.5;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(p) => (p.isActive ? "#F45F5A" : "#ADADAD")};
  margin: 0px;
  overflow: hidden;
`;

const Slider = styled(motion.div)`
  height: 4px;
  margin-left: 8px;
  margin-right: 8px;
  bottom: 0;
  position: absolute;
  background: #f45f5a;
`;

const tabs = ["新闻", "MV", "综艺", "舞蹈"];
//下方是背景颜色    backgroundImage: `url(${background})`,
const colors = ["red", "blue", "grey", "yellow"];

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

export function ListTab() {
  const [value, setValue] = useState(0);
  const childRefs = useRef(new Map());
  const tabListRef = useRef();
  const [slider, setSlider] = useState({ left: 0, right: 0 });
  const { bounds, ref } = useMeasure();

  // measure our elements
  React.useEffect(() => {
    const target = childRefs.current.get(value);
    const container = tabListRef.current;
    if (target) {
      const cRect = container.getBoundingClientRect();

      // when container is `display: none`, width === 0.
      // ignore this case
      if (cRect.width === 0) {
        return;
      }

      const tRect = target.getBoundingClientRect();
      const left = tRect.left - cRect.left;
      const right = cRect.right - tRect.right;

      setSlider({
        hasValue: true,
        left: left + 8,
        right: right + 8,
      });
    }
  }, [value, bounds]);

  return (
    <div>
      <TabContainer ref={ref}>
        <TabList ref={tabListRef}>
          {tabs.map((tab, i) => (
            <TabItem
              style={{
                backgroundColor: "#F6F6F6",
              }}
              key={tab}
              isActive={i === value}
              whileHover={{ backgroundColor: "#D8D8D8" }}
              transition={{ duration: 0.1 }}
              whileTap={{ backgroundColor: "#D8D8D8" }}
              ref={(el) => childRefs.current.set(i, el)}
              onClick={() => setValue(i)}
            >
              {tab}
            </TabItem>
          ))}
          {slider.hasValue && (
            <Slider
              positionTransition={{
                bounceDamping: 3,
              }}
              initial={false}
              style={{
                left: slider.left,
                right: slider.right,
              }}
            />
          )}
        </TabList>
      </TabContainer>
      <Pager value={value}>
        {colors.map((color) => (
          <div
            //   key={color}
            style={{
              backgroundColor: color,
              width: 375,
              height: 800,
              padding: "16px",
            }}
          />
        ))}
      </Pager>
    </div>
  );
}
