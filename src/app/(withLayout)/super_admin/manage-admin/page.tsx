import ActionBar from "@/components/ui/ActionBar";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageAdminPage = () => {
    return (
        <div>
            <ActionBar title="Admin List">
                <Link href="/super_admin/manage-admin/create">
                    <Button type="primary">Create Admin</Button>
                </Link>
            </ActionBar>
        </div>
    );
};

export default ManageAdminPage;
