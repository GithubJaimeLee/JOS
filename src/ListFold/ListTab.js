import { motion } from "framer-motion";
import NavBarPage from "../Component/NavBarPage";
import MusicHead from "../Img/MusicHead.png";
import MusicFooter from "../Img/MusicFooter.png";
import "../css/App.css";
import "../Component/Component.css";
import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import styled from "styled-components";
import { Pager, useMeasure } from "../Component/TabBar";
import bg from "../Img/MusicBodyRecommend.png";
import bg2 from "../Img/MusicBodyRecommend.png";
import bg3 from "../Img/MusicBodyRecommend.png";

export function useCallbackRef() {
  const [ref, setRef] = useState(null);
  const fn = useCallback((node) => {
    setRef(node);
  }, []);

  return [ref, fn];
}

const TabContainer = styled.div`
  overflow-y: hidden;
  box-shadow: none;
`;

const TabList = styled.div`
  display: block;
  position: relative;
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

const tabs = ["新闻", "MV", "综艺", "舞蹈"];
const bgs = [bg, bg3, bg2, bg3];

const Slider = styled(motion.div)`
  height: 4px;
  margin-left: 8px;
  margin-right: 8px;
  bottom: 0;
  position: absolute;
  background: #f45f5a;
`;

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

  const Info = <p>子页签(Tap)</p>;
  return (
    <div className="All">
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
        }}
      >
        {" "}
        <div
          className="Screen"
          style={{
            width: 375,
            height: 812,

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
          />
          <div
            className="MainTab"
            style={{
              position: "absolute",
              top: 90,
            }}
          >
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
            <div
              style={{
                width: 375,
                height: 612,
                overflow: "scroll",
              }}
            >
              <Pager value={value}>
                {bgs.map((bg) => (
                  <div
                    key={bg}
                    style={{
                      backgroundImage: `url(${bg})`,
                      width: 375,
                      height: 812,
                    }}
                  />
                ))}
              </Pager>
            </div>
          </div>
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
}
