import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import RecentEvent from './RecentEvent';

const RecentEvents = () => {

    const { user } = useContext(AuthContext)

    const [recentEvents, setRecentEvents] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/my-tours?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log("recent events", data);
                setRecentEvents(data)
            })
    }, [])

    return (
        <div>
            <div className="recent-event-heading">
                <h1 className='recent-event-title'>My Tours</h1>
            </div>

            {
                recentEvents.length <=0 && <p className='no-recent-event'>Looks like you haven't been on any tours yet</p>
            }

            <div className="all-recent-event">
                {
                    recentEvents.map(recentEvent => <RecentEvent
                        key={recentEvent._id}
                        recentEvent={recentEvent}
                    ></RecentEvent>).reverse()
                }
            </div>

        </div>
    );
};

export default RecentEvents;