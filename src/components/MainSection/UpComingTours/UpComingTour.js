import React from 'react';
import space from '../../../images/space-travel.jpg'

const UpComingTour = ({ upComingTour }) => {

    const { id, image, locationName, details, agencyName, totalRating, ratings, totalCost, time, totalTravelers } = upComingTour || {};

    return (
        <div>
            <div className="tour-card">
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="name-description">
                    <h3>{locationName}</h3>
                    <p>{details}</p>
                </div>
                <div className="info-part agency-info">
                    <div className="info-title">
                        <h4>Agency Information</h4>
                        <div className="info-row">
                            <div className="row-1">
                                <p className='info-name'>Name</p>
                                <p className='info-data'>{agencyName}</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Total Ratings</p>
                                <p className='info-data'>{totalRating} ratings</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Rating</p>
                                <p className='info-data ratings'>{ratings} <span>/5</span></p>
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
                                <p className='info-data'>{time}</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Total Travelers</p>
                                <p className='info-data'>{totalTravelers}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='upcoming-tour-button'>Details</button>
            </div>
        </div>
    );
};

export default UpComingTour;