import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

import { Layout, Menu } from "antd";

const { SubMenu } = Menu;
const { Header, Sider } = Layout;

const NavHeader = () => (
  <Layout>
    <div id="main" className="header-container">
      <Header className="header">
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
          <SubMenu key="sub1" title="Books">
            <Menu.Item key="1">Add Book</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </Layout>
  </Layout>
);

export default NavHeader;
