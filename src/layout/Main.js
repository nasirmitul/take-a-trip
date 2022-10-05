import React from 'react';
import './Main.css';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import Notifications from '../components/Notifications/Notifications';

const Main = () => {
    return (
        <div>
            <main>
                <div className="container">
                    <div className="row">
                        <div className='col-lg-3'><Navigation></Navigation></div>
                        <div id='middle-section' className='col-lg-6 border-end border-start'><Outlet></Outlet></div>
                        <div className='col-lg-3 notification-Part'><Notifications></Notifications></div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Main;