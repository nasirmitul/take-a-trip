import React from 'react';
import './Main.css';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';

import RightPanel from '../components/RightPanel/RightPanel';

const Main = () => {
    return (
        <div>
            <main>
                <div className="my-container">
                    <div className="row">

                        <div className='col-lg-3 navigation'>
                            <Navigation></Navigation>
                        </div>

                        <div id='middle-section' className='col-lg-6'>
                            <Outlet></Outlet>
                        </div>

                        <div className='col-lg-3 right-panel-main'>
                            <RightPanel></RightPanel>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Main;