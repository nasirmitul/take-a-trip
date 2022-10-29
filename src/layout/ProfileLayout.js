import React from 'react';
import { Outlet } from 'react-router-dom';
import Profile from '../components/MainSection/Profile/Profile';

const ProfileLayout = () => {
    return (
        <div>
            <Profile></Profile>
            <Outlet></Outlet>
        </div>
    );
};

export default ProfileLayout;