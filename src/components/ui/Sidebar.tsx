"use client";

import React, { useState } from "react";

import { Layout, Menu } from "antd";
import { sidebarItems } from "@/constants/sibarItems";
import { USER_ROLE } from "@/constants/role";

const { Sider } = Layout;

const Sidebar = () => {
    const role = USER_ROLE.STUDENT;
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            width={280}
            style={{
                overflow: "auto",
                height: "100vh",
                position: "sticky",
                left: 0,
                top: 0,
                bottom: 0,
            }}
        >
            <div
                style={{
                    color: "white",
                    fontSize: "2rem",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                }}
            >
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    defaultSelectedKeys={["1"]}
                    mode="inline"
                    items={sidebarItems(role)}
                />
            </div>
        </Sider>
    );
};

export default Sidebar;
