"use client";

import { Content } from "antd/es/layout/layout";
import BreadCrumb from "./BreadCrumb";

const Contents = ({ children }: { children: React.ReactNode }) => {
    const base = "admin";
    return (
        <Content
            style={{
                minHeight: "100vh",
            }}
        >
            <BreadCrumb
                items={[
                    {
                        label: `${base}`,
                        link: `/${base}`,
                    },
                    {
                        label: "student",
                        link: `/${base}/student`,
                    },
                ]}
            />
            {children}
        </Content>
    );
};

export default Contents;
