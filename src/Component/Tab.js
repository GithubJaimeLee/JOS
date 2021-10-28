import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { motion } from "framer-motion";
import MusicBodyRecommed from "../Img/MusicBodyRecommed.png";

const MyTab = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="推荐" title="推荐">
        <motion.div
          className="MusicBodyRecommed"
          drag="y"
          dragConstraints={{ top: -578, bottom: 0 }}
          dragElastic={1}
          dragTransition={{ bounceStiffness: 176, bounceDamping: 26 }}
          style={{
            backgroundImage: `url(${MusicBodyRecommed})`,
            backgroundColor: "#ddd",
            top: 130,
            width: 375,
            height: 1205,
            position: "absolute",
            opacity: 1,
            zIndex: -1,
          }}
          whileTap={{ x: -200 }}
        ></motion.div>
      </Tab>
      <Tab eventKey="MV" title="MV">
        <motion.div
          className="MusicBodyRecommed"
          drag="y"
          dragConstraints={{ top: -578, bottom: 0 }}
          dragElastic={1}
          dragTransition={{ bounceStiffness: 176, bounceDamping: 26 }}
          style={{
            backgroundImage: `url(${MusicBodyRecommed})`,
            backgroundColor: "#ddd",
            top: 130,
            width: 375,
            height: 1205,
            position: "absolute",
            opacity: 1,
            zIndex: -1,
          }}
        ></motion.div>
      </Tab>
      <Tab eventKey="综艺" title="综艺">
        <motion.div
          className="MusicBodyRecommed"
          drag="y"
          dragConstraints={{ top: -578, bottom: 0 }}
          dragElastic={1}
          dragTransition={{ bounceStiffness: 176, bounceDamping: 26 }}
          style={{
            backgroundImage: `url(${MusicBodyRecommed})`,
            backgroundColor: "#ddd",
            top: 130,
            width: 375,
            height: 1205,
            position: "absolute",
            opacity: 1,
            zIndex: -1,
          }}
        ></motion.div>
      </Tab>
      <Tab eventKey="舞蹈" title="舞蹈">
        <motion.div
          className="MusicBodyRecommed"
          drag="y"
          dragConstraints={{ top: -578, bottom: 0 }}
          dragElastic={1}
          dragTransition={{ bounceStiffness: 176, bounceDamping: 26 }}
          style={{
            backgroundImage: `url(${MusicBodyRecommed})`,
            backgroundColor: "#ddd",
            top: 130,
            width: 375,
            height: 1205,
            position: "absolute",
            opacity: 1,
            zIndex: -1,
          }}
        ></motion.div>
      </Tab>
    </Tabs>
  );
};

export default MyTab;
