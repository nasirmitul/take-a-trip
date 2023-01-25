import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineLink } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BiCurrentLocation } from "react-icons/bi";

import { AuthContext } from '../../../contexts/UserContext';


const AgencyAbout = () => {
    const { user } = useContext(AuthContext);
    const [agency, setAgency] = useState([])
    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/agency-details/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAgency(data)
            })
    }, [])

    console.log('agency about', agency);

    return (
        <div>
            <div className="profile-about">
                <div className="bio">
                    <h6 className='section-heading'>Description</h6>
                    <p>{agency?.agencyDescription}</p>
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
                                    <small>{agency.agencyPhone || 'no data'}</small>
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
                                    <small>{agency.agencyEmail || 'no data' }</small>
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
                                    <small>{agency.agencyWebsite || 'no data'}</small>
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
                                    <small>{agency.country || 'no data'}</small>
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
                                    <small>{agency.state || 'no data'}</small>
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
                                    <small>{agency.area || 'no data'}</small>
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
                                    <small>{agency.district || 'no data'}</small>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AgencyAbout;