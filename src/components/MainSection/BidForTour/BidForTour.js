import React, { useContext, useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/UserContext';
import uuid from 'react-uuid';

const BidForTour = () => {
    const { user } = useContext(AuthContext);
    const [allTours, setAllTours] = useState([])
    const [showPopup, setShowPopup] = useState(false);
    const [bidData, setBidData] = useState(null);
    const [agency, setAgency] = useState([])
    useEffect(() => {
        fetch('https://take-a-trip-server-sigma.vercel.app/bid-tour')
            .then(res => res.json())
            .then(data => {
                console.log('bid data', data);
                setAllTours(data)
            })
    }, [])


    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/createAgency?agencyEmail=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('tripToken')}`
            }
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                setAgency(data)
                console.log('data', data);
            })
    }, [])

    const handleApproveTour = (tour) => {
        setShowPopup(true)
        setBidData(tour)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bidData.name);
        const form = e.target;
        const amount = form.amount.value;

        const bidInfo = {
            _id: uuid(),
            amount: amount,
            agencyName: agency[0]?.agencyName,
            agencyEmail: agency[0]?.agencyEmail,
            agencyPhone: agency[0]?.agencyPhone,
            agencyProfile: agency[0]?.agencyProfile,
            agencyId: agency[0]?._id
        }

        fetch(`https://take-a-trip-server-sigma.vercel.app/bid-tour/${bidData._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bidInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success(`you bid ${amount} tk successfully`)
                setShowPopup(false)
            })
    }



    const Completionist = () => {
        return (
            <>
                <span className='countDown'>Times up.</span>
                {/* {
                    setIsLeftTime(true)
                } */}
            </>
        );
    };

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return (
                <span className='countDown'>
                    {hours} h {minutes} m {seconds} s left
                </span>
            );
        }
    };

    /* const tourTime = new Date(time);
    const test = (tourTime.getTime() + (90 * 60 * 1000)) - new Date().getTime() */

    return (
        <div>
            <div className="recent-event-heading">
                <h1 className='recent-event-title'>Bid Tours</h1>
            </div>

            {
                allTours.length <= 0 && <p className='no-recent-event'>There is no tour available to bid</p>
            }

            <div className="personalize-tour-dashboard">
                {
                    allTours.map(allTour =>
                        <div key={allTour._id}>
                            <div className='personalized-tour-agency-dashboard'>
                                <div className="info-part">
                                    <div className="info-title">
                                        <h4>Tour Information</h4>
                                        <p className='countDown'><Countdown date={Date.now() + ( (new Date(allTour.time).getTime() + (90 * 60 * 1000)) - new Date().getTime())} renderer={renderer} /></p>
                                        <div className="info-row">
                                            <div className="row-1">
                                                <p className='info-name'>Name</p>
                                                <p className='info-data'>{allTour.name}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Person</p>
                                                <p className='info-data'>{allTour.person}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Journey Start</p>
                                                <p className='info-data'>{allTour.which_day}, {allTour.which_time}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Days</p>
                                                <p className='info-data'>{allTour.days} days</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Departure</p>
                                                <p className='info-data'>{allTour.tourDeparture}</p>
                                            </div>
                                            <div className="row-1">
                                                <p className='info-name'>Location</p>
                                                <p className='info-data'>{allTour.location}</p>
                                            </div>
                                            <div className="row-1 description">
                                                <p className='info-name'>Description</p>
                                                <p className='info-data'>{allTour.description}</p>
                                            </div>
                                        </div>
                                        <div className="actions">
                                            <button className="pending" onClick={() => handleApproveTour(allTour)}>Bid</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ).reverse()
                }
            </div>

            {
                showPopup &&
                <div className='add-amount-background'>
                    <form className='add-amount' action="" onSubmit={handleSubmit}>
                        <input type="number" name='amount' className='amount' placeholder='Amount needed' required />
                        <div className="actions">
                            <button type='submit' className="custom-btn">Submit</button>
                            <div onClick={() => setShowPopup(false)} className="custom-btn cancel">Cancel</div>
                        </div>
                    </form>
                </div>
            }

        </div>
    );
};

export default BidForTour;