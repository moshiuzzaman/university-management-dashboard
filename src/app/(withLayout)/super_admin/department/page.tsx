import { Button } from "antd";
import Link from "next/link";
import React from "react";

const DepartmentPage = () => {
    return (
        <div>
            <div>DepartmentPage</div>
            <Link href="/super_admin/department/create">
                <Button type="primary">Create</Button>
            </Link>
        </div>
    );
};

export default DepartmentPage;
