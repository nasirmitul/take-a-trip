import React, { useContext, useEffect, useState } from 'react';
import cover from '../../../../images/nature.jpg'
import { Link, NavLink, useLocation } from 'react-router-dom';
import options from '../../../../icons/menu.png'
import { AuthContext } from '../../../../contexts/UserContext';

const ViewUserProfile = () => {
    const { user } = useContext(AuthContext)
    const [userProfile, setUserProfile] = useState([])

    const location = useLocation();
    const userEmail = location.pathname;
    const emailLength = location.pathname.length;

    const email = userEmail.slice(6, emailLength)

    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`)
        .then(res => res.json())
        .then(data => {
            console.log('user data', data)
            setUserProfile(data);
        })
    }, [])

    


    return (
        <div className='user-profile'>
            <div className="profile-header">
                <div className="cover-image">
                    <img className='user-cover-image' src={cover} alt="" />
                </div>

                <div className="profile-image-others">
                    <div className="profile-image">
                        <img src={userProfile?.profile} alt="" />
                    </div>

                    <div className="profile-others">
                        <div className="profile-name-follow">
                            <div className="profile-name-email">
                                <h2 className="profile-name">{userProfile?.name}</h2>
                                <p className="profile-email">{userProfile?.email}</p>
                            </div>
                            <div className="follow-button">
                                <button className="custom-btn">Follow</button>
                            </div>
                        </div>
                        <div className="profile-navigation profile-navigation-top">
                            <div className="navigation-links">
                                <NavLink to={`/user/${email}/timeline`}>Timeline</NavLink>
                                <NavLink to={`/user/${email}/about`}>About</NavLink>
                                <NavLink to={`/user/${email}/followers`}>Followers</NavLink>
                                <NavLink to={`/user/${email}/following`}>Following</NavLink>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="profile-navigation profile-navigation-bottom">
                    <div className="navigation-links">
                        <NavLink to={`/user/${email}/timeline`}>Timeline</NavLink>
                        <NavLink to={`/user/${email}/about`}>About</NavLink>
                        <NavLink to={`/user/${email}/followers`}>Followers</NavLink>
                        <NavLink to={`/user/${email}/following`}>Following</NavLink>
                    </div>
                    
                </div>


            </div>
        </div>
    );
};

export default ViewUserProfile;