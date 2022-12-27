import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { AuthContext } from '../../../contexts/UserContext';

const UpComingTourDetails = () => {

    const { _id, image, locationName, details, agencyName, totalRating, ratings, totalCost, time, totalTravelers, tourTripDate, tourTripTime, tourTripDay, tourDeparture, tourHotelInformation, leftTravelers } = useLoaderData();

    const [showPayment, setShowPayment] = useState(false);
    const { user } = useContext(AuthContext)



    const handleCheckout = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const phone_number = form.phone_number.value;
        // const post_code = form.post_code.value;
        const address = form.address.value;

        const makePayment = {
            tour: _id,
            locationName,
            username: name,
            userEmail: email,
            phone_number: phone_number,
            // post_code,
            address: address
        }

        console.log(makePayment);
        fetch('http://localhost:5000/payment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(makePayment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                /* if (data.acknowledged) {
                    form.reset();
                } */
                window.location.replace(data.url)
            })
            .catch(error => console.log(error))
    }



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
                                <p className='info-data'>{totalTravelers} / {parseInt(totalTravelers) - leftTravelers} left</p>
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
                <button className='upcoming-tour-button' onClick={() => { setShowPayment(true) }}>Going</button>
            </div>


            <div className={`tour-payment ${showPayment ? 'show-tour-payment' : 'hide-tour-payment'}`}>
                <div className="title-cancel">
                    <h2 className="payment-title">Payment Details</h2>
                    <RxCross2 onClick={() => { setShowPayment(false) }}></RxCross2>
                </div>
                <p className="payment-description">Complete your payment for <span>{locationName}</span> tour by providing your payment details</p>

                <div className="payment-info">
                    <form action="" onSubmit={handleCheckout}>
                        <input type="email" name="email" defaultValue={user.email} readOnly />
                        <input type="text" name="name" defaultValue={user.displayName} placeholder='Name' />
                        <input type="tel" name="phone_number" placeholder='Phone Number' />
                        {/* <input type="number" name="post_code" placeholder='Post Code' /> */}
                        <textarea name="address" placeholder='Address'></textarea>

                        <button className='upcoming-tour-button' type='submit'>Payment</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default UpComingTourDetails;