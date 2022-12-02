import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import coxBazar from '../../../images/bazar.jpg'

const UpComingTourDetails = () => {

    const { image, locationName, details, agencyName, totalRating, ratings, totalCost, time, totalTravelers, tourTripDate, tourTripTime, tourTripDay, tourDeparture, tourHotelInformation } = useLoaderData();

    return (
        <div className='upcoming-tour-detail'>
            <div className="tour-card">
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="name-description">
                    <small className='left-time'>{tourTripDay} days left</small>
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
                                <p className='info-data'>{totalRating ? totalRating : 0} ratings</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Rating</p>
                                <p className='info-data ratings'>{ratings ? ratings : 0}<span>/5</span></p>
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
                                <p className='info-data'>{tourTripDate} at {tourTripTime}</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Total Travelers</p>
                                <p className='info-data'>{totalTravelers} / 2 left</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Journey Start</p>
                                <p className='info-data'>{tourTripDate}</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Journey End</p>
                                <p className='info-data'>{tourTripDate}</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Departure</p>
                                <p className='info-data'>{tourDeparture}</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Hotel Information</p>
                                <p className='info-data'>{tourHotelInformation}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='upcoming-tour-button'>Going</button>
            </div>
        </div>
    );
};

export default UpComingTourDetails;