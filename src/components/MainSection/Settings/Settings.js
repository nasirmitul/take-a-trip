import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import icon from "../../../icons/profile.png"

const Settings = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAgencyDelete = () => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/deleteAgency/${user.email}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    console.log(data.deletedCount);
                    navigate('/home');
                }
            })
    }
    

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

                        {/* <div className="setting-section">
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
                        </div> */}

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
                                    <p className='delete' onClick={handleAgencyDelete}>Delete</p>
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