import React from 'react';
import bazar from '../../../images/bazar.jpg'

const RecentEvent = ({recentEvent}) => {

    const {locationName} = recentEvent;
    return (
        <div className='recent-event'>
            <div className="recent-event-card">
                <img className='event-image' src={recentEvent?.tourImage} alt="" />
                <h2 className="location-name">{locationName}</h2>
                <p className="recent-event-time">{recentEvent?.tourTripDate} at {recentEvent?.tourTripTime}</p>
            </div>
        </div>
    );
};

export default RecentEvent;