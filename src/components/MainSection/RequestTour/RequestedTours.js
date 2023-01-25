import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import RequestedTour from './RequestedTour';
import RequestTour from './RequestTour';

const RequestedTours = ({ refetch, handleRefetch }) => {
    const { user } = useContext(AuthContext)

    const [requestedTours, setRequestedTour] = useState([])
    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/requested-tour/${user.email}`)
            .then(res => res.json())
            .then(data => setRequestedTour(data))
    }, [refetch])
    return (
        <div>

            {
                requestedTours.length <= 0 && <p className='no-recent-event'>Looks like you haven't requested any tours yet</p>
            }

            <div className="personalize-tour-dashboard">
                {
                    requestedTours.map(requestedTour => <RequestedTour
                        key={requestedTour._id}
                        handleRefetch={handleRefetch}
                        requestedTour={requestedTour}
                    ></RequestedTour>
                    ).reverse()
                }
            </div>



        </div>
    );
};

export default RequestedTours;