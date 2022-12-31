import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import cover from '../../../images/nature.jpg'
import { Link, NavLink } from 'react-router-dom';
import options from '../../../icons/menu.png'

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='user-profile'>
            <div className="profile-header">
                <div className="cover-image">
                    <img className='user-cover-image' src={cover} alt="" />
                </div>

                <div className="profile-image-others">
                    <div className="profile-image">
                        <img src={user.photoURL} alt="" />
                    </div>

                    <div className="profile-others">
                        <div className="profile-name-follow">
                            <div className="profile-name-email">
                                <h2 className="profile-name">{user.displayName}</h2>
                                <p className="profile-email">{user.email}</p>
                            </div>
                        </div>
                        <div className="profile-navigation profile-navigation-top">
                            <div className="navigation-links">
                                <NavLink to='/profile/timeline'>Timeline</NavLink>
                                <NavLink to='/profile/about'>About</NavLink>
                                <NavLink to='/profile/followers'>Followers</NavLink>
                                <NavLink to='/profile/following'>Following</NavLink>
                            </div>
                            {/* <div className="profile-settings">
                                <Link to='/profile-settings'><img src={options} alt="" /></Link>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="profile-navigation profile-navigation-bottom">
                    <div className="navigation-links">
                        <NavLink to='/profile/timeline'>Timeline</NavLink>
                        <NavLink to='/profile/about'>About</NavLink>
                        <NavLink to='/profile/followers'>Followers</NavLink>
                        <NavLink to='/profile/following'>Following</NavLink>
                    </div>
                    {/* <div className="profile-settings">
                        <Link to='/profile-settings'><img src={options} alt="" /></Link>
                    </div> */}
                </div>


            </div>
        </div>
    );
};

export default Profile;