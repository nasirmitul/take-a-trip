import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BiCurrentLocation } from "react-icons/bi";

const ViewAgencyAbout = () => {
    const agencyAboutData = useLoaderData();

    const { _id, agencyDescription, agencyPhone, agencyWebsite, country, state, area, district, agencyCover, agencyProfile, agencyName, agencyEmail } = agencyAboutData;
    return (
        <div>
            <div className="user-profile-links">
                <NavLink to={`/agencyProfile/${_id}`}>Timeline</NavLink>
                <NavLink className='active-link' to={`/agencyProfile/${_id}/about`}>About</NavLink>
                <NavLink to={`/agencyProfile/${_id}/ratings`}>Reviews</NavLink>
            </div>

            <div>
                <div className="profile-about">
                    <div className="bio">
                        <h6 className='section-heading'>Description</h6>
                        <p>{agencyDescription}</p>
                    </div>


                    <div className="social-accounts">
                        <h6 className='section-heading'>Other Info</h6>
                        <div className="about-info-agency">
                            <div className="check-in-location d-flex align-items-center justify-content-between">
                                <div className="check-in-logo Location d-flex align-items-center ">
                                    <div className="check-logo">
                                        <AiFillPhone className='social-icons agency-about-icon'></AiFillPhone>
                                    </div>
                                    <div className="check-location">
                                        <p className="location-name">Phone</p>
                                        <small>{agencyPhone || 'no data'}</small>
                                    </div>
                                </div>
                            </div>
                            <div className="check-in-location d-flex align-items-center justify-content-between">
                                <div className="check-in-logo Location d-flex align-items-center ">
                                    <div className="check-logo">
                                        <MdEmail className='social-icons agency-about-icon'></MdEmail>
                                    </div>
                                    <div className="check-location">
                                        <p className="location-name">Email</p>
                                        <small>{agencyEmail || 'no data'}</small>
                                    </div>
                                </div>
                            </div>
                            <div className="check-in-location d-flex align-items-center justify-content-between">
                                <div className="check-in-logo Location d-flex align-items-center ">
                                    <div className="check-logo">
                                        <AiOutlineLink className='social-icons agency-about-icon'></AiOutlineLink>
                                    </div>
                                    <div className="check-location">
                                        <p className="location-name">Website</p>
                                        <small>{agencyWebsite || 'no data'}</small>
                                    </div>
                                </div>
                            </div>
                            <div className="check-in-location d-flex align-items-center justify-content-between">
                                <div className="check-in-logo Location d-flex align-items-center ">
                                    <div className="check-logo">
                                        <BiCurrentLocation className='social-icons agency-about-icon'></BiCurrentLocation>
                                    </div>
                                    <div className="check-location">
                                        <p className="location-name">Country</p>
                                        <small>{country || 'no data'}</small>
                                    </div>
                                </div>
                            </div>
                            <div className="check-in-location d-flex align-items-center justify-content-between">
                                <div className="check-in-logo Location d-flex align-items-center ">
                                    <div className="check-logo">
                                        <BiCurrentLocation className='social-icons agency-about-icon'></BiCurrentLocation>
                                    </div>
                                    <div className="check-location">
                                        <p className="location-name">State</p>
                                        <small>{state || 'no data'}</small>
                                    </div>
                                </div>
                            </div>
                            <div className="check-in-location d-flex align-items-center justify-content-between">
                                <div className="check-in-logo Location d-flex align-items-center ">
                                    <div className="check-logo">
                                        <BiCurrentLocation className='social-icons agency-about-icon'></BiCurrentLocation>
                                    </div>
                                    <div className="check-location">
                                        <p className="location-name">Area</p>
                                        <small>{area || 'no data'}</small>
                                    </div>
                                </div>
                            </div>
                            <div className="check-in-location d-flex align-items-center justify-content-between">
                                <div className="check-in-logo Location d-flex align-items-center ">
                                    <div className="check-logo">
                                        <BiCurrentLocation className='social-icons agency-about-icon'></BiCurrentLocation>
                                    </div>
                                    <div className="check-location">
                                        <p className="location-name">District</p>
                                        <small>{district || 'no data'}</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewAgencyAbout;