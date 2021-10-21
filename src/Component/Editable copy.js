import React from "react";
import { motion } from 'framer-motion';




class MyComponent extends React.Component {
  //这里是重点....要求使用constructor，有constructor就必须带上super，这部分
  //看上去很冗余我想简化但是没有好办法...帮帮忙看看如何简化
  constructor(props) {
    super(props);
    this.state = {};
  }
  //这个功能是为NewColor属性赋值
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

          //   transition= {{ duration: `${this.state.NewColor}` }}
          whileTap={{
            scale: `${this.state.NewColor}`,
            transition: { duration:  1}
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

export default MyComponent;