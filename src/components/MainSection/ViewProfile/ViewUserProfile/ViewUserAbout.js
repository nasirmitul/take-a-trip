import React, { useEffect, useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { NavLink, useLocation } from 'react-router-dom';



const ViewUserAbout = () => {

    const location = useLocation();
    const userEmail = location.pathname;
    console.log('email', userEmail);

    const emailLength = location.pathname.length;

    const email = userEmail.slice(6, emailLength - 6)

    const [userAbout, setUserAbout] = useState([]);
    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/user-profile/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
                setUserAbout(data)
            })
    }, [])

    return (
        <div>
            <div className="profile-about">

                <div className="user-profile-links">
                    <NavLink to={`/user/${email}`}>Timeline</NavLink>
                    <NavLink className='active-link' to={`/user/${email}/about`}>About</NavLink>
                </div>


                <div className="bio">
                    <h6 className='section-heading'>Bio</h6>
                    <p>{userAbout?.bio}</p>
                </div>



                <div className="social-accounts">
                    <h6 className='section-heading'>Other Social Media Accounts</h6>
                    <div className="all-social-accounts">
                        <>
                            <div className="check-in-location d-flex align-items-center justify-content-between">
                                <div className="check-in-logo Location d-flex align-items-center ">
                                    <div className="check-logo">
                                        <FaFacebook className='social-icons facebook'></FaFacebook>
                                    </div>
                                    <div className="check-location">
                                        <p className="location-name">Facebook</p>
                                        <small><a href={userAbout?.facebook}>{userAbout?.facebook || 'no link'}</a></small>
                                    </div>
                                </div>
                            </div>
                            <div className="check-in-location d-flex align-items-center justify-content-between">
                                <div className="check-in-logo Location d-flex align-items-center ">
                                    <div className="check-logo">
                                        <AiFillInstagram className='social-icons instagram'></AiFillInstagram>
                                    </div>
                                    <div className="check-location">
                                        <p className="location-name">Instagram</p>
                                        <small><a href={userAbout?.instagram}>{userAbout?.instagram || 'no link'}</a></small>
                                    </div>
                                </div>
                            </div>
                            <div className="check-in-location d-flex align-items-center justify-content-between">
                                <div className="check-in-logo Location d-flex align-items-center ">
                                    <div className="check-logo">
                                        <AiOutlineTwitter className='social-icons twitter'></AiOutlineTwitter>
                                    </div>
                                    <div className="check-location">
                                        <p className="location-name">Twitter</p>
                                        <small><a href={userAbout?.twitter}>{userAbout?.twitter || 'no link'}</a></small>
                                    </div>
                                </div>
                            </div>
                        </>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ViewUserAbout;