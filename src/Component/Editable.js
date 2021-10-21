import React from "react";
import DeskOpen from '../Component/fc';
import { motion, useCycle} from 'framer-motion';



const ObjStyle = {
    width: 54,
    height: 54,
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
    color: "#415fff",
    opacity: 1,
    background: '#fff',
    borderRadius: 12,
    position: 'relative',
    left: 128,
    top: 647,
    zIndex: 100
}

const boxAnimation = {
    animationOne: {
        borderRadius: 12,
        width: 54,
        height: 54,
        left: 128,

  
        position: 'relative',
    },
    animationTwo: {
        borderRadius: 0,
        position: 'relative',
        top: -56,
        left: 0,
        right:0,
        scale: 1.02,
        width: '100vw',
        height: '100vh',
        borderRadius: 12,

    }
}


const Obj = () => {
  
    const [animationBox, cycleAnimation] = useCycle("animationOne", "animationTwo");
//
    const [DragBox, cycleDrag] = useCycle(false, true);

    return (
<div>
<MyComponent className='boxChange'
     style={ObjStyle}
                            variants={boxAnimation}
                            animate={animationBox}
                            drag={DragBox}
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            dragElastic={1}
                            onClick={() => cycleAnimation() & cycleDrag()}
/>
     
                        </div>
    );
}


class MyComponent extends React.Component {


  constructor(props) {
    super(props);
    this.state = {};
  }

  ChangeColorFunction(value) {
    this.setState({
      NewColor: value
    });
  }

  render() {

    
    return (
      <div className="Component"
        style={{
          zIndex: 10,
          position: 'absolute',
        }}
      >
  
       <motion.div
  // transition= {{ duration: `${this.state.NewColor}` }}
        whileTap={{
           scale: 2,
         transition: {type: "tween", duration: `${this.state.NewColor}`}
        }}

          style={{
            width: 100,
            height: 200,
            //下面是目的为div赋值新的backgroundColor
            backgroundColor: "red",
          }}

        /> 
        {/* 下面是拿到的InputBar组件，Goal这个obj也是从下面组件拿到的*/}
        <InputBar Goal={this.ChangeColorFunction.bind(this)} />
      </div>
    );
  }
}
//下面我们把Input容器和InputBarFunction功能一起作为组件InputBar输出
class InputBar extends React.Component {
  //下面InputBarFunction功能作用是活动输入值并赋值到目标容器上
  InputBarFunction(e) {
    this.props.Goal(e.target.value);
  }
  render() {
    return (
      //下面是输入框容器，带了个一个InputBarFunction功能
      <input onChange={this.InputBarFunction.bind(this)} />
    );
  }
}

export default Obj;