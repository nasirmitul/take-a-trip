import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const AdminNavigation = () => {
    return (
        <div className='container'>
            <div className="admin-routing">
                <NavLink to='/admin'>Pending Agencies</NavLink>
                <NavLink to='/admin/pending-reports'>Reports</NavLink>
            </div>

        </div>
    );
};

export default AdminNavigation;