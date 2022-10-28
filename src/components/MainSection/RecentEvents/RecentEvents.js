import React from 'react';
import RecentEvent from './RecentEvent';

const RecentEvents = () => {
    return (
        <div>
            <div className="recent-event-heading">
                <h1 className='recent-event-title'>Recent Event</h1>
            </div>

            <div className="all-recent-event">
                <RecentEvent></RecentEvent>
                <RecentEvent></RecentEvent>
                <RecentEvent></RecentEvent>
                <RecentEvent></RecentEvent>
                <RecentEvent></RecentEvent>
                <RecentEvent></RecentEvent>
                <RecentEvent></RecentEvent>
                <RecentEvent></RecentEvent>
            </div>

        </div>
    );
};

export default RecentEvents;