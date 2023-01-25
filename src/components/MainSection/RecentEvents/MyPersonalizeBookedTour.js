import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import { RxCross2 } from 'react-icons/rx';

const MyPersonalizeBookedTour = () => {

    const [personalizeTours, setPersonalizeTours] = useState([])
    const [showPayment, setShowPayment] = useState(false);

    const [tourDetail, setTourDetail] = useState(null);

    const [refetch, setRefetch] = useState(false)
    const [cancelTour, setCancelTour] = useState(null)
    const { user } = useContext(AuthContext)

    const handlePayment = (tour) => {
        setTourDetail(tour);
        setShowPayment(true);
    }

    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/personalized-tours/user/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPersonalizeTours(data)
            })
    }, [refetch])

    const handleCheckout = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const phone_number = form.phone_number.value;
        // const post_code = form.post_code.value;
        const address = form.address.value;

        const makePayment = {
            tour: tourDetail._id,
            locationName: tourDetail.location,
            username: name,
            userEmail: email,
            phone_number: phone_number,
            address: address,
            tourImage: 'N/A',
            tourTripDate: tourDetail.which_day,
            tourTripTime: tourDetail.which_time,
            tourTripDay: tourDetail.days,
            tourDeparture: tourDetail.tourDeparture,
            agencyEmail: tourDetail.agencyEmail,
            agencyName: tourDetail.agencyName
        }

        console.log(makePayment);
        fetch('https://take-a-trip-server-sigma.vercel.app/payment/personalize', {
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

    const handleCancel = (tour) => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/personalized-tours/${tour._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRefetch(!refetch)
                toast.error('tour canceled');
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="recent-event-heading">
                <h1 className='recent-event-title'>My Tours</h1>
            </div>

            <div className="dashboard-navigation">
                <Link to='/recent-event'>My Tours</Link>
                <Link className='active' to='/personalize-booked-tour'>Personalize Booked Tours</Link>
            </div>

            {
                personalizeTours.length <= 0 && <p className='no-recent-event'>Looks like you haven't been on any tours yet</p>
            }

            <div className="personalize-tour-dashboard">
                {
                    personalizeTours.map(
                        personalizeTour =>
                            <div className='personalized-tour-agency-dashboard' key={personalizeTour._id}>
                                <div className="info-part">
                                    <div className="info-title">
                                        <h4>Tour Information</h4>
                                        <div className="info-row">
                                            <div className="row-1">
                                                <p className='info-name'>Agency Name</p>
                                                <p className='info-data'>{personalizeTour.agencyName}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Agency Email</p>
                                                <p className='info-data'>{personalizeTour.agencyEmail}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Agency Phone</p>
                                                <p className='info-data'>{personalizeTour.agencyPhone}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Person</p>
                                                <p className='info-data'>{personalizeTour.person}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Journey Start</p>
                                                <p className='info-data'>{personalizeTour.which_day}, {personalizeTour.which_time}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Days</p>
                                                <p className='info-data'>{personalizeTour.days} days</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Departure</p>
                                                <p className='info-data'>{personalizeTour.tourDeparture}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Location</p>
                                                <p className='info-data'>{personalizeTour.location}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Amount</p>
                                                <p className='info-data'>{personalizeTour.amount <= 0 ? 'pending' : personalizeTour.amount}</p>
                                            </div>
                                        </div>
                                        <div className="actions">
                                            {
                                                personalizeTour.payment ||
                                                (personalizeTour.status &&
                                                    <button className="pending" onClick={() => { handlePayment(personalizeTour) }}>{`pay ${personalizeTour.amount}`}</button>)
                                            }
                                            {
                                                personalizeTour.payment || <button onClick={() => handleCancel(personalizeTour)} className='cancel'>cancel</button>
                                            }
                                            {
                                                personalizeTour.payment && <button className="approved">paid</button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>



                        /* tour =>
                        <div key={tour._id}>
                            <p>{tour._id}</p>
                            {tour.status && <button onClick={() => { handlePayment(tour) }}>{`pay ${tour.amount}`}</button>}
                            <button onClick={() => handleCancel(tour)}>Cancel</button>
                        </div> */
                    ).reverse()
                }
            </div>



            <div className={`tour-payment p-3 ${showPayment ? 'show-tour-payment' : 'hide-tour-payment'}`}>
                <div className="tour-payment-body">
                    <div className="title-cancel form-text">
                        <h2 className="payment-title">Payment Details</h2>
                        <RxCross2 className='cancel' onClick={() => { setShowPayment(false) }}></RxCross2>
                    </div>
                    <p className="payment-description">Complete your payment for {/* <span>{locationName}</span> */} tour by providing your details</p>

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
                                defaultValue={tourDetail?.email}
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
                                defaultValue={tourDetail?.name}
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
                                defaultValue={tourDetail?.phone}
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
                        <button type='submit' className='custom-btn'>Pay ৳{tourDetail?.amount}</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default MyPersonalizeBookedTour;