import { motion } from "framer-motion";
import NavBarPage from "../Component/NavBarPage";
import MusicHead from "../Img/MusicHead.png";
import MusicFooter from "../Img/MusicFooter.png";
import "../App.css";
import "../css/Component.css";
import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import ResizeObserver from "resize-observer-polyfill";
import styled from "styled-components";

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
  white-space: nowrap;
  -webkit-appearance: none;
  box-sizing: border-box;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  user-select: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  box-shadow: none;
  cursor: pointer;
  text-decoration: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  padding: 10px 1rem;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  text-size-adjust: none;
  text-overflow: ellipsis;
  line-height: 1.5;
  font-size: 0.875rem;

  ${"" /*   标题文字样式 */}
  color: ${(p) => (p.isActive ? "rgb(25, 113, 194)" : "rgb(95, 104, 113)")};
  margin: 0px;
  overflow: hidden;
`;

const Slider = styled(motion.div)`
  height: 4px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  margin-left: 2px;
  margin-right: 2px;
  bottom: 0;
  position: absolute;
  background: #08e;
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

const ListTap = () => {
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

  const Info = <p>子页签(Tap)</p>;
  return (
    <div className="All">
      <div className="MainTab">
        <TabContainer ref={ref}>
          <TabList ref={tabListRef}>
            {tabs.map((tab, i) => (
              <TabItem
                key={tab}
                isActive={i === value}
                whileHover={{ backgroundColor: "#f1f3f5" }}
                transition={{ duration: 0.1 }}
                whileTap={{ backgroundColor: "#e9ecef" }}
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
                width: "100%",
                height: "300px",
                padding: "16px",
              }}
            >
              <div>{color}</div>
            </div>
          ))}
        </Pager>
      </div>
      <NavBarPage placement={"end"} contextTitle={"说明"} context={Info} />
      <div
        className="ScreenCenter"
        style={{
          width: "100%",
          height: 812,
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          top: 0,
          zIndex: -10000,
        }}
      >
        {" "}
        <div
          className="Screen"
          style={{
            width: 375,
            height: 812,
            overflow: "scroll",

            position: "absolute",
          }}
        >
          <motion.div
            className="MusicHead"
            //    drag="y"
            // dragConstraints={{ top: -40, bottom: 0 }}
            //    dragElastic={0}
            style={{
              backgroundImage: `url(${MusicHead})`,
              top: 0,
              width: 375,
              height: 90,
              position: "fixed",
              opacity: 1,
              zIndex: 2,
            }}
          ></motion.div>

          <motion.div
            className="MusicHeaderTap"
            style={{
              //    backgroundImage: `url(${MusicHeaderTap})`,
              top: 90,
              position: "fixed",
              width: 375,
              height: 38,
              zIndex: 1,
            }}
          >
            {" "}
            {/*         <div
        style={{
        width:66,
        height:38,
        backgroundColor: "blue",
        position:'absolute',
        zIndex:2,
        bottom:0,
        left: 80,
        opacity:0.5
        }}/>  
           <div
        style={{
        width:66,
        height:38,
        backgroundColor: "blue",
        position:'absolute',
        zIndex:2,
        bottom:0,
        left: 154,
        opacity:0.5
        }}/>
              <div
        style={{
        width:66,
        height:38,
        backgroundColor: "blue",
        position:'absolute',
        zIndex:2,
        bottom:0,
        left: 230,
        opacity:0.5
        
        }}/> */}
          </motion.div>
        </div>
        <div
          className="MusicFooter"
          style={{
            backgroundImage: `url(${MusicFooter})`,
            bottom: 0,
            width: 375,
            height: 54,
            zIndex: 10,
            position: "absolute",
          }}
        />
      </div>
    </div>
  );
};

export default ListTap;
