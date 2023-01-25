import React, { useContext, useEffect, useState } from 'react';
import '../../css/style.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';

import logo from '../../images/logo.png';

import home from '../../icons/home.png'
import upcomingTours from '../../icons/upcoming tours.png'
import tourAgencies from '../../icons/tour agencies.png'
import RecentEvents from '../../icons/recent event.png'
import personalize from '../../icons/personalize.png'
import profile from '../../icons/profile.png'
import createAgency from '../../icons/create agency.png'
import myAgency from '../../icons/my agency.png'
import settings from '../../icons/settings.png'
import logout from '../../icons/logout.png'

import { AuthContext } from '../../contexts/UserContext';


const Navigation = () => {
    const navigate = useNavigate();
    const { userSignOut, user } = useContext(AuthContext);

    const [agencyActive, setAgencyActive] = useState(false);
    const [refetch, setRefetch] = useState(false);
    const [refetch2, setRefetch2] = useState(false);

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                navigate('/signin')
            })
            .catch(error => {
                console.log(error);
            })
    }

    console.log('uu', user.email);

    useEffect(() => {
        if(user.email){
            setRefetch2(!refetch2)
        }
    }, [])


    const [agency, setAgency] = useState([])
    useEffect(() => {
        console.log('in effect', user.email);
        fetch(`https://take-a-trip-server-sigma.vercel.app/createAgency?agencyEmail=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log('logging', data[0]);
                setAgency(data)
            })
    }, [user])

    console.log('agency email up', agency[0]?.agencyEmail);

    useEffect(() => {
        if (agency[0]?.agencyEmail === user?.email) {
            console.log('agency email', agency[0]?.agencyEmail);
            setAgencyActive(true)
        }
        else {
            setAgencyActive(false)
        }
    })

    useEffect(() => {
        if (user.email === undefined) {
            setRefetch(!refetch)
        }
    }, [])



    // console.log("agency from navigation", agency[0]?.agencyEmail);


    return (
        <div>
            <section id="left-part" className='main-navigation'>
                <div className="menu-part">

                    <div className="logo">
                        <Link to='/'><img src={logo} alt="" /></Link>
                    </div>

                    <div className="main-menu">
                        <h5 className="menu-heading menu">Menu</h5>
                        <ul>
                            <NavLink className='link' to='/home'><li><img className='icon' src={home} alt="" /><p >Home</p></li></NavLink>
                            <NavLink className='link' to='/upcoming-tours'><li><img className='icon' src={upcomingTours} alt="" /><p >Upcoming Tours</p></li></NavLink>
                            <NavLink className='link' to='/tour-agencies'><li><img className='icon' src={tourAgencies} alt="" /><p >Tour Agencies</p></li></NavLink>
                            <NavLink className='link' to='/recent-event'><li><img className='icon' src={RecentEvents} alt="" /><p >My Tours</p></li></NavLink>

                            <NavLink className='link' to='/request-tour'><li><img className='icon' src={personalize} alt="" /><p >Request Tour</p></li></NavLink>

                            <NavLink className='link' to='/profile/timeline'><li><img className='icon' src={profile} alt="" /><p >profile</p></li></NavLink>


                            {
                                agencyActive || <NavLink className='link' to='/create-agency'><li><img className='icon' src={createAgency} alt="" /><p >Create Agency</p></li></NavLink>
                            }

                            {/* {
                                (agency[0]?.agencyEmail === user?.email) ? <NavLink className='link' to='/my-agency/agency-timeline'><li><img className='icon' src={myAgency} alt="" /><p >My Agency</p></li></NavLink> : <NavLink className='link' to='/create-agency'><li><img className='icon' src={createAgency} alt="" /><p >Create Agency</p></li></NavLink>
                            } */}

                        </ul>

                        {
                            agencyActive && <>
                                <h5 className="menu-heading other">Agency</h5>
                                <ul>
                                    <NavLink className='link' to='/my-agency/agency-timeline'><li><img className='icon' src={myAgency} alt="" /><p >My Agency</p></li></NavLink>
                                    <NavLink className='link' to='/bid-for-tour'><li><img className='icon' src={personalize} alt="" /><p >Bid For Tour</p></li></NavLink>
                                </ul>
                            </>
                        }



                        <h5 className="menu-heading other">Other</h5>
                        <ul>
                            <NavLink className='link' to='/settings'><li><img className='icon' src={settings} alt="" /><p  >Settings</p></li></NavLink>
                            <button onClick={handleSignOut} className='logout-button link' ><li id="logout"><img className='icon' src={logout} alt="" /><p className='logout-button-color'>Log Out</p></li></button>
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