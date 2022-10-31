import React from 'react';
import icon from "../../../icons/home.png"

const ProfileSettings = () => {
    return (
        <div>
            <div>
                <div className="d-flex justify-content-between">
                    <h3>Settings</h3>
                </div>
                {/* ---------------Account------------------ */}
                <div className="account d-flex my-4">
                    <h3 className="settings-title">Account</h3>
                    <div className="settings-value">
                        <p>Email</p>
                        <p>Password</p>
                    </div>
                    <div className="settings-data">
                        <p>nasir@gmail.com</p>
                        <p>*********</p>
                    </div>
                    <div className="settings-links">
                        <p>
                            <a href="#">Change Email</a>
                        </p>
                        <p>
                            <a href="#">Change Password</a>
                        </p>
                    </div>
                </div>
                <hr />
                {/* -----------Profile--------------- */}
                <div className="profile d-flex my-4">
                    <h3 className="settings-title">Profile</h3>
                    <div className="settings-value">
                        <p>Avater</p>
                        <p>Display name</p>
                    </div>
                    <div className="settings-data">
                        <p>
                            <img src={icon} alt="" />
                        </p>
                        <small>nasirmitul</small>
                    </div>
                    <div className="settings-links">
                        <p>
                            <a href="#">Change Avater</a>
                        </p>
                        <p>
                            <a href="#">Change Display name</a>
                        </p>
                    </div>
                </div>
                <hr />
                {/* -------------Connectr Account----------------- */}
                <div className="connect-acc d-flex my-4">
                    <h3 className="settings-title">Connect Account</h3>
                    <div className="settings-value">
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
                    <div className="settings-data">
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                    </div>
                    <div className="settings-links">
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
                <hr />

                {/* --------------------- */}
                <div className="dlt-acc d-flex">
                    <h3 className="settings-title">Delete Account</h3>
                    <div className="settings-value">
                        <p className="dltacc">I would like to delete my account</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;