import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
var twelve = require('twentyfour-to-twelve');

const UpComingTour = ({ upComingTour }) => {
    const { user } = useContext(AuthContext)

    const { _id, image, locationName, details, agencyName, agencyEmail, agencyId, totalRating, ratings, totalCost, time, totalTravelers, tourTripDate, tourTripTime } = upComingTour || {};

    const [agencyDetail, setAgencyDetail] = useState([])

    const [totalAgencyRating, setTotalAgencyRating] = useState(0)
    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/agency-info/${agencyEmail}`)
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            setAgencyDetail(data)
        })
    }, [])


    useEffect(() => {
        const total = agencyDetail?.reviews?.reduce((acc, row) => acc + row.rating, 0);
        setTotalAgencyRating(total)
    }, [agencyDetail?.reviews]);





    




    return (
        <div>
            <div className="tour-card">
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="name-description">
                    <h3>{locationName}</h3>
                    <p>{details.slice(0, 150)}...</p>
                </div>
                <div className="info-part agency-info">
                    <div className="info-title">
                        <h4>Agency Information</h4>
                        <div className="info-row">
                            <div className="row-1">
                                <p className='info-name'>Name</p>
                                <Link to={agencyEmail === user.email ? '/my-agency/agency-timeline' : `/agencyProfile/${agencyId}`}>
                                    <p className='info-data'>{agencyName}</p>
                                </Link>

                            </div>
                            <div className="row-1">
                                <p className='info-name'>Total Reviews</p>
                                <p className='info-data'>{agencyDetail?.reviews ? agencyDetail?.reviews?.length : 0} Reviews</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Rating</p>
                                <p className='info-data ratings'>{totalAgencyRating > 0 ? (totalAgencyRating / agencyDetail?.reviews?.length).toFixed(1) : 0} <span>/5</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-part">
                    <div className="info-title">
                        <h4>Tour Information</h4>
                        <div className="info-row">
                            <div className="row-1">
                                <p className='info-name'>Total Cost</p>
                                <p className='info-data'>{totalCost} ৳</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Time</p>
                                <p className='info-data'>{tourTripDate} at {twelve(tourTripTime)}</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Total Travelers</p>
                                <p className='info-data'>{totalTravelers}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link className='upcoming-tour-button-link' to={`/tour-details/${_id}`}><button className='upcoming-tour-button'>Details</button></Link>
            </div>
        </div>
    );
};

export default UpComingTour;