import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const About = () => {
    return (
        <div>
            <div className="profile-about">
                <div className="bio">
                    <h6 className='section-heading'>Bio</h6>
                    <p>
                        Travel isn’t always pretty. It isn’t always comfortable.
                        Sometimes it hurts, it even breaks your heart. But that’s
                        okay. The journey changes you; Travel isn’t always pretty. It
                        isn’t always comfortable. Sometimes it hurts, it even breaks
                        your heart. But that’s okay. The journey changes you;{" "}
                    </p>
                </div>


                <div className="check-in">
                    <div className="check d-flex justify-content-between">
                        <h6 className='section-heading'>Check ins</h6>
                        <a className='see-all' href="#">see all</a>
                    </div>
                    <div className="check-in-location d-flex align-items-center justify-content-between">
                        <div className="check-in-logoLocation d-flex align-items-center ">
                            <div className="check-logo">
                                <p>D</p>
                            </div>
                            <div className="check-location">
                                <p className="location-name">Daffodil International University</p>
                                <small>visited on November 30,2021</small>
                            </div>
                        </div>
                        <div className="check-icon">
                            <BsThreeDots className='three-dot-icon'></BsThreeDots>
                        </div>
                    </div>

                    <div className="check-in-location d-flex align-items-center justify-content-between my-2">
                        <div className="check-in-logo Location d-flex align-items-center ">
                            <div className="check-logo">
                                <p>D</p>
                            </div>
                            <div className="check-location">
                                <p className="location-name">Daffodil International University</p>
                                <small>visited on November 30,2021</small>
                            </div>
                        </div>
                        <div className="check-icon">
                            <BsThreeDots className='three-dot-icon'></BsThreeDots>
                        </div>
                    </div>
                </div>



                <div className="social-accounts">
                    <h6 className='section-heading'>Other Social Media Accounts</h6>
                    <div className="check-in-location d-flex align-items-center justify-content-between">
                        <div className="check-in-logo Location d-flex align-items-center ">
                            <div className="check-logo">
                                <FaFacebook className='social-icons facebook'></FaFacebook>
                            </div>
                            <div className="check-location">
                                <p className="location-name">Facebook</p>
                                <small>https://facebook.com/nasirmitul28</small>
                            </div>
                        </div>
                        <div className="check-icon">
                            <BsThreeDots className='three-dot-icon'></BsThreeDots>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;