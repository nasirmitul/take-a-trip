import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { AuthContext } from '../../../contexts/UserContext';

const UpComingTourDetails = () => {

    const { _id, image, locationName, details, agencyName, totalRating, ratings, totalCost, time, totalTravelers, tourTripDate, tourTripTime, tourTripDay, tourDeparture, tourHotelInformation, leftTravelers, agencyEmail } = useLoaderData();

    console.log(_id, image, locationName, details, agencyName, totalRating, ratings, totalCost, time, totalTravelers, tourTripDate, tourTripTime, tourTripDay, tourDeparture, tourHotelInformation, leftTravelers, agencyEmail);

    const [showPayment, setShowPayment] = useState(false);
    const [disable, setDisable] = useState(false)

    useEffect(() => {
        if (parseInt(totalTravelers) === leftTravelers) {
            setDisable(true)
        }
    }, [leftTravelers])


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
            address: address,
            tourImage: image,
            tourTripDate: tourTripDate,
            tourTripTime: tourTripTime,
            tourTripDay: tourTripDay,
            tourDeparture: tourDeparture,
            agencyEmail: agencyEmail,
            agencyName: agencyName
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

                                <Link to={agencyEmail === user.email ? '/my-agency/agency-timeline' : `/agencyProfile/${_id}`}>
                                    <p className='info-data'>{agencyName}</p>
                                </Link>
                                
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
                <button className='upcoming-tour-button' onClick={() => { setShowPayment(true) }} disabled={disable}>Going</button>
            </div>


            <div className={`tour-payment p-3 ${showPayment ? 'show-tour-payment' : 'hide-tour-payment'}`}>
                <div className="tour-payment-body">
                    <div className="title-cancel form-text">
                        <h2 className="payment-title">Payment Details</h2>
                        <RxCross2 className='cancel' onClick={() => { setShowPayment(false) }}></RxCross2>
                    </div>
                    <p className="payment-description">Complete your payment for <span>{locationName}</span> tour by providing your details</p>

                    <form className="payment-info" onSubmit={handleCheckout}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="@example.com"
                                name="email"
                                defaultValue={user.email}
                                readOnly
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Username
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="username"
                                name="name"
                                defaultValue={user.displayName}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Phone
                            </label>
                            <input
                                type="tel"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="phone"
                                name="phone_number"
                                required
                            />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                Address
                            </label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                name="address"
                                placeholder='address'
                                required
                            ></textarea>
                        </div>
                        <button type='submit' className='custom-btn'>Pay ৳{totalCost}</button>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default UpComingTourDetails;