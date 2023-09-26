import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { Layout } from "antd";
import React from "react";

const DashboardLayout = ({
    children,
}: React.PropsWithChildren<React.ReactNode>) => {
    return (
        <Layout hasSider>
            <Sidebar />
            <Contents>{children}</Contents>
        </Layout>
    );
};

export default DashboardLayout;
