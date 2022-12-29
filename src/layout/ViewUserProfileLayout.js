import React from 'react';
import { Outlet } from 'react-router-dom';
import ViewUserProfile from '../components/MainSection/ViewProfile/ViewUserProfile/ViewUserProfile';

const ViewUserProfileLayout = () => {
    return (
        <div>
            <ViewUserProfile></ViewUserProfile>
            <Outlet></Outlet>
        </div>
    );
};

export default ViewUserProfileLayout;