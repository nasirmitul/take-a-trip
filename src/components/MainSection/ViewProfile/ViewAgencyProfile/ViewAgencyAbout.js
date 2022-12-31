import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const ViewAgencyAbout = () => {
    const agencyAboutData = useLoaderData();

    const { _id, agencyCover, agencyProfile, agencyName, agencyEmail } = agencyAboutData;
    return (
        <div>
            <div className="user-profile-links">
                <NavLink to={`/agencyProfile/${_id}`}>Timeline</NavLink>
                <NavLink className='active-link' to={`/agencyProfile/${_id}/about`}>About</NavLink>
                <NavLink to={`/agencyProfile/${_id}/ratings`}>Reviews</NavLink>
            </div>

            <h1>View agency about</h1>
        </div>
    );
};

export default ViewAgencyAbout;