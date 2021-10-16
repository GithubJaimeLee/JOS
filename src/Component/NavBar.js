import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button,Container} from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">OOS动效平台</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                           

                                <NavDropdown className="Desk" title="OOS桌面" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">图标移动自动补位</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">图标变形</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">图标变形(方向)</NavDropdown.Item>
                                 {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item href="#action/3.4">图标变形(缩放)</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">开屏界面</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">图标Grid</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">图标创建文件夹</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">多选拖动</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown className="List" title="列表" id="basic-nav-dropdown">
                                     <NavDropdown.Item href="#action/3.4">图标变形(缩放)</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">开屏界面</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">图标Grid</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">图标创建文件夹</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">多选拖动</NavDropdown.Item>
                                </NavDropdown>
                                
                                <NavDropdown className="Window" title="弹窗" id="basic-nav-dropdown">
                                     <NavDropdown.Item href="#action/3.4">图标变形(缩放)</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">开屏界面</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">图标Grid</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">图标创建文件夹</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">多选拖动</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className="Click" title="点击反馈" id="basic-nav-dropdown">
                                     <NavDropdown.Item href="#action/3.4">图标变形(缩放)</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">开屏界面</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">图标Grid</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">图标创建文件夹</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">多选拖动</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className="Jump" title="界面跳转" id="basic-nav-dropdown">
                                     <NavDropdown.Item href="#action/3.4">图标变形(缩放)</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">开屏界面</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">图标Grid</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">图标创建文件夹</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">多选拖动</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className="Alert" title="提示类" id="basic-nav-dropdown">
                                     <NavDropdown.Item href="#action/3.4">图标变形(缩放)</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">开屏界面</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">图标Grid</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">图标创建文件夹</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">多选拖动</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className="Choose" title="选择类" id="basic-nav-dropdown">
                                     <NavDropdown.Item href="#action/3.4">图标变形(缩放)</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">开屏界面</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">图标Grid</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">图标创建文件夹</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">多选拖动</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className="Delete" title="删除类" id="basic-nav-dropdown">
                                     <NavDropdown.Item href="#action/3.4">图标变形(缩放)</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">开屏界面</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">图标Grid</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">图标创建文件夹</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">多选拖动</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className="Edit" title="编辑类" id="basic-nav-dropdown">
                                     <NavDropdown.Item href="#action/3.4">图标变形(缩放)</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">开屏界面</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">图标Grid</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">图标创建文件夹</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">多选拖动</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className="Fold" title="展开折叠" id="basic-nav-dropdown">
                                     <NavDropdown.Item href="#action/3.4">图标变形(缩放)</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">开屏界面</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">图标Grid</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">图标创建文件夹</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">多选拖动</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className="Other" title="其他" id="basic-nav-dropdown">
                                     <NavDropdown.Item href="#action/3.4">图标变形(缩放)</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">开屏界面</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">图标Grid</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">图标创建文件夹</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">多选拖动</NavDropdown.Item>
                                </NavDropdown>
                                     <Nav.Link href="#404">待上线</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
