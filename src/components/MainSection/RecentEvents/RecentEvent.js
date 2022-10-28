import React from 'react';
import bazar from '../../../images/bazar.jpg'

const RecentEvent = () => {
    return (
        <div className='recent-event'>
            <div className="recent-event-card">
                <img className='event-image' src={bazar} alt="" />
                <h2 className="location-name">Cox's Bazar</h2>
                <p className="recent-event-time">13 sep, 2022 at 5:00pm</p>
            </div>
        </div>
    );
};

export default RecentEvent;