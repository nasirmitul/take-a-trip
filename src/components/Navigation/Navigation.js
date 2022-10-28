import React, { useContext } from 'react';
import '../../css/style.css'
import { Link, NavLink } from 'react-router-dom';

import logo from '../../images/logo.png';

import home from '../../icons/home.png'
import upcomingTours from '../../icons/upcoming tours.png'
import tourAgencies from '../../icons/tour agencies.png'
import RecentEvents from '../../icons/recent event.png'
import profile from '../../icons/profile.png'
import createAgency from '../../icons/create agency.png'
import myAgency from '../../icons/my agency.png'
import settings from '../../icons/settings.png'
import logout from '../../icons/logout.png'

import { AuthContext } from '../../contexts/UserContext';


const Navigation = () => {
    const { userSignOut, user } = useContext(AuthContext);

    const handleSignOut = () => {
        userSignOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <section id="left-part">
                <div className="menu-part">

                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>

                    <div className="main-menu">
                        <h5 className="menu-heading menu">Menu</h5>
                        <ul>
                            <NavLink className='link' to='/home'><li><img src={home} alt="" /><a href="/">Home</a></li></NavLink>
                            <NavLink className='link' to='/upcoming-tours'><li><img src={upcomingTours} alt="" /><a href="/">Upcoming Tours</a></li></NavLink>
                            <NavLink className='link' to='/tour-agencies'><li><img src={tourAgencies} alt="" /><a href="/">Tour Agencies</a></li></NavLink>
                            <NavLink className='link' to='/recent-event'><li><img src={RecentEvents} alt="" /><a href="/">Recent Event</a></li></NavLink>
                            <NavLink className='link' to='/profile'><li><img src={profile} alt="" /><a href="/">profile</a></li></NavLink>
                            <NavLink className='link' to='/create-agency'><li><img src={createAgency} alt="" /><a href="/">Create Agency</a></li></NavLink>
                            <NavLink className='link' to='/my-agency'><li><img src={myAgency} alt="" /><a href="/">My Agency</a></li></NavLink>
                        </ul>

                        <h5 className="menu-heading other">Other</h5>
                        <ul>
                            <NavLink className='link' to='/settings'><li><img src={settings} alt="" /><a href="/" >Settings</a></li></NavLink>
                            <button onClick={handleSignOut} className='logout-button link' ><li id="logout"><img src={logout} alt="" /><a href="/">Log Out</a></li></button>
                        </ul>

                        <div className="log-profile d-flex">
                            <Link to='/profile' className='link d-flex align-items-center'>
                                <div className="img">
                                    {
                                        user.photoURL && <img className="img-fluid profile-img" src={user?.photoURL} alt="profile image" />
                                    }
                                </div>
                                <div className="text">
                                    <h2>{user?.displayName ? user?.displayName : 'User Name'}</h2>
                                    <p>{user?.email}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Navigation;