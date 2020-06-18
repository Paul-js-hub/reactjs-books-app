import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Sider } = Layout;

const NavHeader = () => (
  <Layout>
    <div id="main" className="header-container">
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">
          <li className="nav-item">
            <Link className="text-link" to="/">
              Home
            </Link>
          </li>
        </Menu.Item>
        <Menu.Item key="2">
          <li className="nav-item">
            <Link className="text-link" to="/about">
              About
            </Link>
          </li>
        </Menu.Item>
        <Menu.Item key="3">
          <li className="nav-item">
            <Link className="text-link" to="/books">
              Books
            </Link>
          </li>
        </Menu.Item>
        <Menu.Item key="4">
          <li className="nav-item">
            <Link className="text-link" to="/contacts">
              Contact
            </Link>
          </li>
        </Menu.Item>
        <Menu.Item key="5">
          <li className="nav-item">
            <Link className="text-link" to="/register">
              Register
            </Link>
          </li>
        </Menu.Item>
        <Menu.Item key="6">
          <li className="nav-item">
            <Link className="text-link" to="/login">
              Login
            </Link>
          </li>
        </Menu.Item>
      </Menu>
    </Header>
    </div>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </Layout>
  </Layout>

  // <div id="main" className="header-container">
  //     <li className="nav-item">
  //       <Link className="text-link" to="/">
  //         Home
  //       </Link>
  //     </li>
  //     <li className="nav-item">
  //       <Link className="text-link" to="/about">
  //         About
  //       </Link>
  //     </li>
  //     <li className="nav-item">
  //       <Link className="text-link" to="/books">
  //         Books
  //       </Link>
  //     </li>
  //     <li className="nav-item">
  //       <Link className="text-link" to="/contacts">
  //         Contact
  //       </Link>
  //     </li>
  //     <li className="nav-item">
  //       <Link className="text-link" to="/register">
  //         Register
  //       </Link>
  //     </li>
  //     <li className="nav-item">
  //       <Link className="text-link" to="/login">
  //         Login
  //       </Link>
  //     </li>
  // </div>
);

export default NavHeader;
