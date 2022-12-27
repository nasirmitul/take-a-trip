import React from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';

const ViewAgencyProfile = () => {
    const agencyProfileData = useLoaderData();

    const {agencyCover, agencyProfile, agencyName, agencyEmail} = agencyProfileData;

    return (
        <div>
            <div>
                <div className='user-profile'>
                    <div className="profile-header">
                        <div className="cover-image">
                            <img className='user-cover-image' src={agencyCover} alt="" />
                        </div>

                        <div className="profile-image-others">
                            <div className="profile-image">
                                <img src={agencyProfile} alt="" />
                            </div>

                            <div className="profile-others">
                                <div className="profile-name-follow">
                                    <div className="profile-name-email">
                                        <h2 className="profile-name">{agencyName}</h2>
                                        <p className="profile-email">{agencyEmail}</p>
                                    </div>

                                </div>
                                <div className="profile-navigation profile-navigation-top">
                                    <div className="navigation-links">
                                        <NavLink to='/my-agency/agency-timeline'>Timeline</NavLink>
                                        <NavLink to='/my-agency/agency-about'>About</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="profile-navigation profile-navigation-bottom">
                            <div className="navigation-links">
                                <NavLink to='/my-agency/agency-timeline'>Timeline</NavLink>
                                <NavLink to='/my-agency/agency-about'>About</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewAgencyProfile;