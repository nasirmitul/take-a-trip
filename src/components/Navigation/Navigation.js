import React, { useContext, useEffect, useState } from 'react';
import '../../css/style.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    const { userSignOut, user } = useContext(AuthContext);

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                navigate('/signin')
            })
            .catch(error => {
                console.log(error);
            })
    }


    const [agency, setAgency] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/createAgency?agencyEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setAgency(data))
    }, [])

    // console.log("agency from navigation", agency[0]?.agencyEmail);


    return (
        <div>
            <section id="left-part">
                <div className="menu-part">

                    <div className="logo">
                        <Link to='/'><img src={logo} alt="" /></Link>
                    </div>

                    <div className="main-menu">
                        <h5 className="menu-heading menu">Menu</h5>
                        <ul>
                            <NavLink className='link' to='/home'><li><img src={home} alt="" /><p >Home</p></li></NavLink>
                            <NavLink className='link' to='/upcoming-tours'><li><img src={upcomingTours} alt="" /><p >Upcoming Tours</p></li></NavLink>
                            <NavLink className='link' to='/tour-agencies'><li><img src={tourAgencies} alt="" /><p >Tour Agencies</p></li></NavLink>
                            <NavLink className='link' to='/recent-event'><li><img src={RecentEvents} alt="" /><p >My Tours</p></li></NavLink>
                            <NavLink className='link' to='/profile/timeline'><li><img src={profile} alt="" /><p >profile</p></li></NavLink>
                            {
                                (agency[0]?.agencyEmail === user?.email) ? <NavLink className='link' to='/my-agency/agency-timeline'><li><img src={myAgency} alt="" /><p >My Agency</p></li></NavLink> : <NavLink className='link' to='/create-agency'><li><img src={createAgency} alt="" /><p >Create Agency</p></li></NavLink>
                            }
                        </ul>

                        <h5 className="menu-heading other">Other</h5>
                        <ul>
                            <NavLink className='link' to='/settings'><li><img src={settings} alt="" /><p  >Settings</p></li></NavLink>
                            <button onClick={handleSignOut} className='logout-button link' ><li id="logout"><img src={logout} alt="" /><p className='logout-button-color'>Log Out</p></li></button>
                        </ul>

                        <div className="log-profile d-flex">
                            <Link to='/profile/timeline' className='link d-flex align-items-center'>
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