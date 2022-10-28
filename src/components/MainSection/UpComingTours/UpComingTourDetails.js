import React from 'react';
import coxBazar from '../../../images/bazar.jpg'

const UpComingTourDetails = () => {
    return (
        <div className='upcoming-tour-detail'>
            <div className="tour-card">
                <div className="image">
                    <img src={coxBazar} alt="" />
                </div>
                <div className="name-description">
                    <small className='left-time'>2 days left</small>
                    <h3>Cox's bazar</h3>
                    <p>Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you;</p>
                </div>
                <div className="info-part agency-info">
                    <div className="info-title">
                        <h4>Agency Information</h4>
                        <div className="info-row">
                            <div className="row-1">
                                <p className='info-name'>Name</p>
                                <p className='info-data'>Noor agency</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Total Ratings</p>
                                <p className='info-data'>2000 ratings</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Rating</p>
                                <p className='info-data ratings'>4.1<span>/5</span></p>
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
                                <p className='info-data'>4000 ৳</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Time</p>
                                <p className='info-data'>13 sep, 2022 at 5:00pm</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Total Travelers</p>
                                <p className='info-data'>25 / 17 left</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Journey Start</p>
                                <p className='info-data'>1 July, 2022</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Journey End</p>
                                <p className='info-data'>4 July, 2022</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Departure</p>
                                <p className='info-data'>Dhaka, Jatrabari</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Hotel Information</p>
                                <p className='info-data'>Hotel Sea Crown, 3 Star</p>
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