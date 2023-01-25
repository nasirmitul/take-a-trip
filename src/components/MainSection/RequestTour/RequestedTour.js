import React, { useContext, useState } from 'react';
import Countdown from 'react-countdown';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import { RxCross2 } from 'react-icons/rx';

const RequestedTour = ({ requestedTour, handleRefetch }) => {
    const { _id, person, which_time, which_day, days, tourDeparture, location, allBids, time } = requestedTour;
    const [showBids, setShowBids] = useState(false);
    const [leftTime, setIsLeftTime] = useState(false);
    const { user } = useContext(AuthContext);

    const handleCancel = (id) => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/bid-tour/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.error('tour canceled');
                handleRefetch();
            })
            .catch(error => console.log(error))
    }

    const tourTime = new Date(time);
    const test = (tourTime.getTime() + (90 * 60 * 1000)) - new Date().getTime()

    const Completionist = () => {
        return (
            <>
                <span className='countDown'>Times up.</span>
                {
                    setIsLeftTime(true)
                }
            </>
        );
    };

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            fetch(`https://take-a-trip-server-sigma.vercel.app/update-time/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ timesUp: true })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
            return <Completionist />;
        } else {
            return (
                <span className='countDown'>
                    {hours} h {minutes} m {seconds} s left
                </span>
            );
        }
    };

    const handleAcceptBid = (bid) => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/approve-bid/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ timesUp: true, bid })
        })
            .then(res => res.json())
            .then(data => {
                setShowBids(false)
                console.log(data);
            })
    }

    return (
        <div className='requested-tour'>
            <div className='personalized-tour-agency-dashboard'>
                <div className="info-part">
                    <div className="info-title">
                        <h4>Tour Information</h4>
                        <p className='countDown'><Countdown date={Date.now() + test} renderer={renderer} /></p>
                        <div className="info-row">
                            <div className="row-1">
                                <p className='info-name'>Person</p>
                                <p className='info-data'>{person}</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Journey Start</p>
                                <p className='info-data'>{which_day}, {which_time}</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Days</p>
                                <p className='info-data'>{days} days</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Departure</p>
                                <p className='info-data'>{tourDeparture}</p>
                            </div>
                            <div className="row-1">
                                <p className='info-name'>Location</p>
                                <p className='info-data'>{location}</p>
                            </div>

                        </div>
                        <div className="actions">
                            <button className="pending" onClick={() => setShowBids(!showBids)}>Check {allBids?.length} Bids</button>
                            <button className="cancel" onClick={() => handleCancel(_id)}>Cancel Request</button>
                        </div>
                    </div>
                </div>
            </div>


            {
                showBids && allBids?.length > 0 &&
                <div className="all-bids">
                    <div className="bid-heading">
                        <p>{allBids?.length} bids</p>
                        <RxCross2 onClick={() => setShowBids(false)} className='cancel'></RxCross2>
                    </div>

                    {
                        allBids.map(bid =>
                            <div key={bid?._id} className='bids'>
                                <div className="agency-profile">
                                    <img src={bid.agencyProfile} alt="" />
                                </div>

                                <div className="agency-name-email">
                                    <Link to={bid.agencyEmail === user.email ? '/my-agency/agency-timeline' : `/agencyProfile/${bid.agencyId}`}>
                                        <p className='name'>{bid.agencyName}</p>
                                    </Link>
                                    <p className='email'>{bid.agencyEmail}</p>
                                </div>

                                <div className="amount">
                                    <p className='number'>{bid.amount} ৳</p>
                                </div>

                                <div className="actions">
                                    <button onClick={() => handleAcceptBid(bid)} className="approve-button">Accept</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            }
        </div>
    );
};

export default RequestedTour;