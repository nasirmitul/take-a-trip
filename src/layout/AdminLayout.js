import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavigation from '../components/Admin/AdminNavigation';

const AdminLayout = () => {
    return (
        <div>
            <AdminNavigation></AdminNavigation>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminLayout;