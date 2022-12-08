import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';

import RightPanel from '../components/RightPanel/RightPanel';
import BottomNavigation from '../components/BottomNavigation/BottomNavigation';

const Main = () => {
    return (
        <div>
            <main>
                <div className="my-container">
                    
                    <div className="main-content">
                        <div className='navigation-main'>
                            <Navigation></Navigation>
                        </div>

                        <div id='middle-section' className='middle-section-main'>
                            <Outlet></Outlet>
                        </div>

                        <div className='right-panel-main'>
                            <RightPanel></RightPanel>
                        </div>
                    </div>
                </div>
                
                <div className="bottom-navigation-main">
                    <BottomNavigation></BottomNavigation>
                </div>
            </main>
        </div>
    );
};

export default Main;