import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageFacultyPage = () => {
    return (
        <div>
            <div>ManageFacultyPage</div>
            <Link href="/super_admin/manage-student/create">
                <Button type="primary">Create</Button>
            </Link>
        </div>
    );
};

export default ManageFacultyPage;