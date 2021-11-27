import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "../css/Component.css";
import Logo from "../Img/logo.png";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar
          bg="white"
          expand="lg"
          style={{
            boxShadow: "0px 0px 16px  rgba(0, 0, 0, 0.05)",
          }}
        >
          <Container>
            <Navbar.Brand href="/">
              {/*        <img
                alt=""
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />  */}
              OOS动效平台
            </Navbar.Brand>
            {/*    <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown
                  className="Desk"
                  title="OOS桌面"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/Desk">≡ OOS桌面</NavDropdown.Item>
                  <NavDropdown.Item href="/Desk/deskMove">
                    图标移动自动补位
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Desk/deskChange">
                    图标变形
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/Desk/DeskOpen">
                    开屏界面
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Desk/deskGrid">
                    图标Grid
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  className="List"
                  title="列表"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/List">≡ 列表</NavDropdown.Item>
                  <NavDropdown.Item href="/List/ScrollJump">
                    列表滑动及回弹
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/List/ScrollTap">
                    子页签(Tap)
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/List/Scroll">
                    横滑定位
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/List/ScrollTitleList">
                    子标题交替悬停
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  className="Window"
                  title="弹窗"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/Window">≡ 弹窗</NavDropdown.Item>
                  <NavDropdown.Item href="/Window/WindowPull">
                    底部弹窗
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Window/WindowPull">
                    侧边音量
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Window/WindowPull">
                    下拉弹窗
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/Window/WindowBubble">
                    悬停通知
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Window/WindowJump">
                    菜单弹窗
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Window/WindowJump">
                    输入式弹窗
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Window/WindowJump">
                    中心弹窗
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Window/WindowJump">
                    侧边音量
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="Click"
                  title="点击反馈"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/Click">≡ 点击反馈</NavDropdown.Item>
                  <NavDropdown.Item href="/Click/ClickList">
                    列表反馈
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Click/ClickNum">
                    数字键盘反馈
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Click/ClickIcon">
                    图标反馈
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Click/ClickCard">
                    卡片反馈
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Click/ClickBtn">
                    按钮反馈
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="Jump"
                  title="界面跳转"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/Jump">≡ 界面跳转</NavDropdown.Item>
                  <NavDropdown.Item href="/Jump/JumpSecond">
                    应用间跳转
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Jump/JumpSearch">
                    搜索
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Jump/JumpNew">新建</NavDropdown.Item>
                  <NavDropdown.Item href="/Jump/JumpApp">
                    二级界面跳转
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="Alert"
                  title="提示类"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/Alert">≡ 提示类</NavDropdown.Item>
                  <NavDropdown.Item href="/Alert/AlertNew">
                    新事件标记
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Alert/AlertPage">
                    页码指示
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/Alert/AlertPercent">
                    进度指示器
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Alert/AlertToast">
                    toast
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  className="Choose"
                  title="选择类"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/Choose">≡ 选择类</NavDropdown.Item>
                  <NavDropdown.Item href="/Choose/ChooseDate">
                    日期滑动选择器
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Choose/ChooseLoadingSwitch">
                    开关 & Loading
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/Choose/ChooseSingleChoice">
                    单选框
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Choose/ChooseSlider">
                    滑动条
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Choose/ChooseMultipleChoice">
                    复选框
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  className="Other"
                  title="其他"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/Other">≡ 其他</NavDropdown.Item>
                  <NavDropdown.Item href="/Other/OtherBackToTop">
                    状态、标题栏置顶 & 下拉刷新
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Other/OtherMotion">
                    单元素动画
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Other/OtherTween">
                    曲线动画
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <Nav.Link href="#404">待上线</Nav.Link>  
              </Nav>
            </Navbar.Collapse>*/}
          </Container>
        </Navbar>
      </div>
    );
  }
}
