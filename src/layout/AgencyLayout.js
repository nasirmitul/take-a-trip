import React from 'react';
import { Outlet } from 'react-router-dom';
import MyAgency from '../components/MainSection/MyAgency/MyAgency';

const AgencyLayout = () => {
    return (
        <div>
            <MyAgency></MyAgency>
            <Outlet></Outlet>
        </div>
    );
};

export default AgencyLayout;