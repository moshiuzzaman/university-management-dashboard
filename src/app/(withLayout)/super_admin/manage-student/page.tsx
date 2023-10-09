import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageStudentPage = () => {
    return (
        <div>
            <div>ManageStudentPage</div>
            <Link href="/super_admin/manage-student/create">
                <Button type="primary">Create</Button>
            </Link>
        </div>
    );
};

export default ManageStudentPage;
