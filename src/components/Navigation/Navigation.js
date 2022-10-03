import React from 'react';
import '../../css/style.css'
import { Link } from 'react-router-dom';

import home from '../../icons/home.png'
import upcomingTours from '../../icons/upcoming tours.png'
import tourAgencies from '../../icons/tour agencies.png'
import recentEvent from '../../icons/recent event.png'
import profile from '../../icons/profile.png'
import createAgency from '../../icons/create agency.png'
import myAgency from '../../icons/my agency.png'
import settings from '../../icons/settings.png'
import logout from '../../icons/logout.png'

import man from '../../images/man.jpg'

const Navigation = () => {
    return (
        <div>
            <section id="left-part">
                <div className="menu-part">
                    <h5 className="menu-heading">Menu</h5>
                    
                    <ul>
                        <Link className='link' to='/home'><li><img src={home} alt="" /><a href="/">Home</a></li></Link>
                        <Link className='link' to='/upcoming-tours'><li><img src={upcomingTours} alt="" /><a href="/">Upcoming Tours</a></li></Link>
                        <Link className='link' to='/tour-agencies'><li><img src={tourAgencies} alt="" /><a href="/">Tour Agencies</a></li></Link>
                        <Link className='link' to='/recent-event'><li><img src={recentEvent} alt="" /><a href="/">Recent Event</a></li></Link>
                        <Link className='link' to='/profile'><li><img src={profile} alt="" /><a href="/">profile</a></li></Link>
                        <Link className='link' to='/create-agency'><li><img src={createAgency} alt="" /><a href="/">Create Agency</a></li></Link>
                        <Link className='link' to='/my-agency'><li><img src={myAgency} alt="" /><a href="/">My Agency</a></li></Link>
                    </ul>

                    <h5 className="menu-heading">Other</h5>
                    <ul>
                        <Link className='link' to='/settings'><li><img src={settings} alt="" /><a href="/" >Settings</a></li></Link>
                        <Link className='link' to='/logout'><li id="logout"><img src={logout} alt="" /><a href="/">Log Out</a></li></Link>
                    </ul>
                </div>

                <div className="log-profile d-flex">
                    <Link to='/profile' className='link d-flex align-items-center'>
                        <div className="img">
                            <img className="img-fluid profile-img" src={man} alt="" />
                        </div>
                        <div className="text">
                            <h2>Mr. Jhon</h2>
                            <p>jhon@gmail.com</p>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Navigation;