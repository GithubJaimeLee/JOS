import * as React from "react";
import ReactDOM from "react-dom";
import { Frame, useAnimation, transform } from "framer";
//https://codesandbox.io/s/311-if-else-screencast-qbxqh?file=/src/index.tsx
//https://codesandbox.io/s/311-if-else-screencast-qbxqh
import "./styles.css";

function Skinny(props) {
  return (
    <Frame
      size={290}
      background="transparent"
      borderRadius={150}
      overflow="hidden"
      backgroundColor="white"
      position="relative"
      style={{ margin: 30 }}
    >
      {/* Wing far side */}
      <Frame
        background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fwing-far.png)"
        width={84}
        height={119}
        left={50}
        top={50}
        animate={props.wingAnimation}
        style={{ transformOrigin: "bottom right" }}
        rotate={-80}
      />
      {/* body */}
      <Frame
        background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fskinny-without-eyebrows.png?v=1564936113297)"
        width={290}
        height={290}
      />
      {/* Eyebrow left */}
      <Frame
        background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Feyebrow-left.png?v=1564936189694)"
        width={30}
        height={32}
        left={190}
        top={88}
        animate={props.leftEyebrowAnimation}
      />
      {/* Eyebrow right */}
      <Frame
        background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Feyebrow-right.png?v=1564936189572)"
        width={24}
        height={14}
        left={223}
        top={91}
        animate={props.rightEyebrowAnimation}
      />
      {/* Cheek */}
      <Frame
        background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fcheek.png)"
        width={79}
        height={67}
        left={155}
        top={135}
        animate={props.cheekAnimation}
      />
      {/* Wing near side */}
      <Frame
        background="url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fwing-near.png)"
        width={124}
        height={71}
        left={-20}
        top={110}
        animate={props.wingAnimation}
        style={{ transformOrigin: "bottom right" }}
        rotate={-80}
      />
    </Frame>
  );
}

function Slider(props) {
  return (
    <Frame
      width={15}
      height={280}
      borderRadius={30}
      position="relative"
      backgroundColor="white"
      style={{ margin: 30 }}
    >
      <Frame
        size={60}
        borderRadius={30}
        center="y"
        backgroundColor="white"
        shadow="0 1px 5px 0 rgba(0, 0, 0, 0.25)"
        drag="y"
        dragConstraints={{ top: 0, bottom: 200 }}
        dragElastic={false}
        dragMomentum={false}
        onDrag={props.onDrag}
      />
    </Frame>
  );
}

// Scope

function App() {
  const wingAnimation = useAnimation();
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Skinny wingAnimation={wingAnimation} />
      <Slider
        onDrag={function (event, info) {
          //console.log(info.point.x)
          //  change scale of cheek based on info.point.x
          const scale = transform(info.point.y, [0, 220], [0.4, 1.5]);

          if (info.point.y > 100) {
            wingAnimation.start({
              rotate: 180,
            });
          } else {
            wingAnimation.start({
              rotate: -100,
            });
          }
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
