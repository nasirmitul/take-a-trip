import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';

const AcceptedTour = () => {
    const { user } = useContext(AuthContext);
    const [acceptedTours, setAcceptedTours] = useState([])
    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/accepted-tour/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAcceptedTours(data)
            })
    }, [])
    return (
        <div>
            <div className="recent-event-heading">
                <h1 className='recent-event-title'>Accepted Tour</h1>
            </div>

            {
                acceptedTours.map(tour =>
                    <div style={{ 'marginBottom': '10px' }} key={tour._id} className='personalized-tour-agency-dashboard'>
                        <div className="info-part">
                            <div className="info-title">
                                <h4>Tour Information</h4>
                                <div className="info-row">
                                    <div className="row-1">
                                        <p className='info-name'>Agency Name</p>
                                        <p className='info-data'>
                                            <Link style={{ 'color': '#119A7C' }} to={`/agencyProfile/${tour.accepted.agencyId}`}>
                                                {tour.accepted.agencyName}
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="row-1">
                                        <p className='info-name'>Agency Email</p>
                                        <p className='info-data'>{tour.accepted.agencyEmail}</p>
                                    </div>
                                    <div className="row-1">
                                        <p className='info-name'>Agency Phone</p>
                                        <p className='info-data'>{tour.accepted.agencyPhone}</p>
                                    </div>
                                    <div className="row-1">
                                        <p className='info-name'>Amount</p>
                                        <p className='info-data'>{tour.accepted.amount}৳</p>
                                    </div>
                                    <div className="row-1">
                                        <p className='info-name'>Person</p>
                                        <p className='info-data'>{tour.person}</p>
                                    </div>
                                    <div className="row-1">
                                        <p className='info-name'>Journey Start</p>
                                        <p className='info-data'>{tour.which_day}, {tour.which_time}</p>
                                    </div>
                                    <div className="row-1">
                                        <p className='info-name'>Days</p>
                                        <p className='info-data'>{tour.days} days</p>
                                    </div>
                                    <div className="row-1">
                                        <p className='info-name'>Departure</p>
                                        <p className='info-data'>{tour.tourDeparture}</p>
                                    </div>
                                    <div className="row-1">
                                        <p className='info-name'>Location</p>
                                        <p className='info-data'>{tour.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>).reverse()
            }



            {/*  */}

        </div>
    );
};

export default AcceptedTour;