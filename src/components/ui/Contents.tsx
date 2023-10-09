"use client";

import { Content } from "antd/es/layout/layout";
import BreadCrumb from "./BreadCrumb";
import Header from "./Header";
import { getUserInfo } from "@/services/auth.service";

const Contents = ({ children }: { children: React.ReactNode }) => {
    const { role } = getUserInfo() as { role: string };

    return (
        <Content
            style={{
                minHeight: "100vh",
            }}
        >
            <Header />
            <BreadCrumb
                items={[
                    {
                        label: `${role}`,
                        link: `/${role}`,
                    },
                ]}
            />
            {children}
        </Content>
    );
};

export default Contents;
