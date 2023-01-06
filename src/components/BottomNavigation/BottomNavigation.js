import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import home from '../../icons/home-w.png';
import hamburger from '../../icons/hamburger-w.png';
import profile from '../../icons/profile-w.png';
import notification from '../../icons/notification.png'

import useWindowDimensions from '../../CustomHook/useWindowDimension';

const BottomNavigation = () => {
    /* const [isMobile, setIsMobile] = useState(false)

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 750) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, []) */


    const { width } = useWindowDimensions();

    return (
        <div className={`${width < 750 ? 'small-device' : 'bottom-navigation-route'}`}>
            <div className="bottom-navigation">
                <NavLink to='/home'>
                    <img src={home} alt="" />
                </NavLink>
                <NavLink to='/profile/timeline'>
                    <img src={profile} alt="" />
                </NavLink>
                {/* <NavLink to='/notification'>
                    <img src={notification} alt="" />
                </NavLink> */}
                <NavLink to='/menu'>
                    <img src={hamburger} alt="" />
                </NavLink>

            </div>
        </div>
    );
};

export default BottomNavigation;