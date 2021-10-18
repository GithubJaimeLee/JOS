import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown,Container} from 'react-bootstrap'
import '../Component/Component.css';
import Logo from "../Img/logo.png";


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">  <img
          alt=""
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}OOS动效平台</Navbar.Brand>
                        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                           

                                <NavDropdown  className="Desk"  title="OOS桌面" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/Desk">≡ OOS桌面</NavDropdown.Item>
                                    <NavDropdown.Item href="/Desk/deskMove">图标移动自动补位</NavDropdown.Item>
                                    <NavDropdown.Item href="/Desk/deskChange">图标变形</NavDropdown.Item>
                                    <NavDropdown.Item href="/Desk/deskDirection">图标变形(方向)</NavDropdown.Item>
                                 {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item href="/Desk/deskZoom">图标变形(缩放)</NavDropdown.Item>
                                    <NavDropdown.Item href="/Desk/DeskOpen">开屏界面</NavDropdown.Item>
                                    <NavDropdown.Item href="/Desk/deskGrid">图标Grid</NavDropdown.Item>
                                    <NavDropdown.Item href="/Desk/Folder">图标创建文件夹</NavDropdown.Item>
                                    <NavDropdown.Item href="/Desk/MultiDrag">多选拖动</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown className="List" title="列表" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/List">≡ 列表</NavDropdown.Item>
                                     <NavDropdown.Item href="/List/ScrollJump">列表滑动及回弹</NavDropdown.Item>
                                    <NavDropdown.Item href="/List/ScrollTap">子页签(Tap)</NavDropdown.Item>
                                    <NavDropdown.Item href="/List/Scroll">横滑定位</NavDropdown.Item>
                                    <NavDropdown.Item href="/List/ScrollTitleList">子标题交替悬停</NavDropdown.Item>
                                    <NavDropdown.Item href="/List/ScrollTitle">标题栏</NavDropdown.Item>
                                </NavDropdown>
                                
                                <NavDropdown className="Window" title="弹窗" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Window">≡ 弹窗</NavDropdown.Item>
                                     <NavDropdown.Item href="/Window/WindowPull">底部弹窗</NavDropdown.Item>
                                    <NavDropdown.Item href="/Window/WindowPull">侧边音量</NavDropdown.Item>
                                    <NavDropdown.Item href="/Window/WindowPull">下拉弹窗</NavDropdown.Item>
                                    <NavDropdown.Item href="/Window/WindowBubble">气泡</NavDropdown.Item>
                                    <NavDropdown.Item href="/Window/WindowBubble">悬停通知</NavDropdown.Item>
                                    <NavDropdown.Item href="/Window/WindowJump">菜单弹窗</NavDropdown.Item>
                                    <NavDropdown.Item href="/Window/WindowJump">输入式弹窗</NavDropdown.Item>
                                    <NavDropdown.Item href="/Window/WindowJump">中心弹窗</NavDropdown.Item>
                                    <NavDropdown.Item href="/Window/WindowJump">侧边音量</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className="Click" title="点击反馈" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Click">≡ 点击反馈</NavDropdown.Item>
                                     <NavDropdown.Item href="/Click/ClickList">列表反馈</NavDropdown.Item>
                                    <NavDropdown.Item href="/Click/ClickNum">数字键盘反馈</NavDropdown.Item>
                                    <NavDropdown.Item href="/Click/ClickIcon">图标反馈</NavDropdown.Item>
                                    <NavDropdown.Item href="/Click/ClickCard">卡片反馈</NavDropdown.Item>
                                    <NavDropdown.Item href="/Click/ClickBtn">按钮反馈</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className="Jump" title="界面跳转" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Jump">≡ 界面跳转</NavDropdown.Item>
                                     <NavDropdown.Item href="/Jump/JumpSecond">二级界面跳转</NavDropdown.Item>
                                    <NavDropdown.Item href="/Jump/JumpSearch">搜索</NavDropdown.Item>
                                    <NavDropdown.Item href="/Jump/JumpNew">新建</NavDropdown.Item>
                                    <NavDropdown.Item href="/Jump/JumpApp">应用间跳转</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className="Alert" title="提示类" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Alert">≡ 提示类</NavDropdown.Item>
                                     <NavDropdown.Item href="/Alert/AlertNew">新事件标记</NavDropdown.Item>
                                    <NavDropdown.Item href="/Alert/AlertPage">页码指示</NavDropdown.Item>
                                    <NavDropdown.Item href="/Alert/AlertLoading">loading</NavDropdown.Item>
                                    <NavDropdown.Item href="/Alert/AlertPercent">进度指示器</NavDropdown.Item>
                                    <NavDropdown.Item href="/Alert/AlertToast">toast</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className="Choose" title="选择类" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Choose">≡ 选择类</NavDropdown.Item>
                                     <NavDropdown.Item href="/Choose/ChooseDate">日期滑动选择器</NavDropdown.Item>
                                    <NavDropdown.Item href="/Choose/ChooseLoadingSwitch">加载类开关</NavDropdown.Item>
                                    <NavDropdown.Item href="/Choose/ChooseSwitch">开关</NavDropdown.Item>
                                    <NavDropdown.Item href="/Choose/ChooseSingleChoice">单选框</NavDropdown.Item>
                                    <NavDropdown.Item href="/Choose/ChooseSlider">滑动条</NavDropdown.Item>
                                    <NavDropdown.Item href="/Choose/ChooseMultipleChoice">复选框</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className="Delete" title="删除类" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Delete">≡ 删除类</NavDropdown.Item>
                                     <NavDropdown.Item href="/Delete/DeleteList">列表删除</NavDropdown.Item>
                                    <NavDropdown.Item href="/Delete/DeleteCard">卡片删除(新版本无)</NavDropdown.Item>
                                    <NavDropdown.Item href="/Delete/DeleteImage">图片删除</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className="Edit" title="编辑类" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Edit">≡ 编辑类</NavDropdown.Item>
                                     <NavDropdown.Item href="/Edit/EditList">列表编辑排序</NavDropdown.Item>
                                    <NavDropdown.Item href="/Edit/EditServiceList">服务编辑列表</NavDropdown.Item>
                                    <NavDropdown.Item href="/Edit/EditCard">卡片编辑排序</NavDropdown.Item>
                                    <NavDropdown.Item href="/Edit/EditGrid">服务编辑宫格</NavDropdown.Item>
                                    <NavDropdown.Item href="/Edit/EditEnter">进入编辑</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className="Fold" title="展开折叠" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Fold">≡ 展开折叠</NavDropdown.Item>
                                     <NavDropdown.Item href="/Fold/FoldContext">内容展开折叠</NavDropdown.Item>
                                    <NavDropdown.Item href="/Fold/FoldCard">卡片展开折叠</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className="Other" title="其他" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Other">≡ 其他</NavDropdown.Item>
                                     <NavDropdown.Item href="/Other/OtherBackToTop">状态、标题栏置顶</NavDropdown.Item>
                                    <NavDropdown.Item href="/Other/OtherPull">下拉刷新</NavDropdown.Item>
                                </NavDropdown>
                                     {/* <Nav.Link href="#404">待上线</Nav.Link> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
