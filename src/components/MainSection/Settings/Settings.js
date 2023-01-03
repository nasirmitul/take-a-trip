import React from 'react';
import icon from "../../../icons/home.png"

const Settings = () => {
    return (
        <div>
            <div>
                {/* User Account Settings */}
                <div className="account-settings">
                    <div className="account-setting-title">
                        <h3 className='title-text'>User Account Settings</h3>
                    </div>

                    <div className="main-settings">
                        <div className="setting-section">
                            <div className="setting-section-title">
                                <h5 className="section-title">Account</h5>
                            </div>
                            <div className="section-contents">
                                <div className="titles">
                                    <p>Email</p>
                                    <p>Password</p>
                                </div>
                                <div className="info">
                                    <p>nasir@gmail.com</p>
                                    <p>*********</p>
                                </div>
                                <div className="action">
                                    <p>
                                        <a href="#">Change</a>
                                    </p>
                                    <p>
                                        <a href="#">Change</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="setting-section">
                            <div className="setting-section-title">
                                <h5 className="section-title">Profile</h5>
                            </div>
                            <div className="section-contents">
                                <div className="titles">
                                    <p>Avatar</p>
                                    <p>Name</p>
                                </div>
                                <div className="info">
                                    <p>
                                        <img src={icon} alt="" />
                                    </p>
                                    <p>Abu Al Nasir Mitul</p>
                                </div>
                                <div className="action">
                                    <p>
                                        <a href="#">Change</a>
                                    </p>
                                    <p>
                                        <a href="#">Change</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="setting-section">
                            <div className="setting-section-title">
                                <h5 className="section-title">Others Accounts</h5>
                            </div>
                            <div className="section-contents">
                                <div className="titles">
                                    <p>
                                        <img src={icon} alt="" />
                                    </p>
                                    <p>
                                        <img src={icon} alt="" />
                                    </p>
                                    <p>
                                        <img src={icon} alt="" />
                                    </p>
                                </div>
                                <div className="info">
                                    <p>Facebook</p>
                                    <p>Twitter</p>
                                    <p>Instagram</p>
                                </div>
                                <div className="action">
                                    <p>
                                        <a href="#">Connect</a>
                                    </p>
                                    <p>
                                        <a href="#">Connect</a>
                                    </p>
                                    <p>
                                        <a href="#">Connect</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="setting-section">
                            <div className="setting-section-title">
                                <h5 className="section-title">Delete Account</h5>
                            </div>
                            <div className="section-contents">
                                <div className="delete-account">
                                    <p>Delete Account</p>
                                    <p className='delete'>Delete</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="account-settings">
                    <div className="account-setting-title">
                        <h3 className='title-text'>Agency Settings</h3>
                    </div>

                    <div className="main-settings">

                        <div className="setting-section">
                            <div className="setting-section-title">
                                <h5 className="section-title">Profile</h5>
                            </div>
                            <div className="section-contents">
                                <div className="titles">
                                    <p>Avatar</p>
                                    <p>Name</p>
                                </div>
                                <div className="info">
                                    <p>
                                        <img src={icon} alt="" />
                                    </p>
                                    <p>Abu Al Nasir Mitul</p>
                                </div>
                                <div className="action">
                                    <p>
                                        <a href="#">Change</a>
                                    </p>
                                    <p>
                                        <a href="#">Change</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="setting-section">
                            <div className="setting-section-title">
                                <h5 className="section-title">Available for</h5>
                            </div>
                            <div className="section-contents">
                                <div className="available-for">
                                    <p>Available for personalize tour event</p>
                                    <p className='available'>Available</p>
                                </div>
                            </div>
                        </div>

                        <div className="setting-section">
                            <div className="setting-section-title">
                                <h5 className="section-title">Delete Account</h5>
                            </div>
                            <div className="section-contents">
                                <div className="delete-account">
                                    <p>Delete Account</p>
                                    <p className='delete'>Delete</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;