import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import man from '../../../images/man.jpg'
import AgencyDetailModal from './AgencyDetailModal';

const TourAgency = ({ tourAgency }) => {
    const { user } = useContext(AuthContext)

    const { _id, agencyEmail, agencyName, agencyProfile, tourArranged, agencyRatings, reviews } = tourAgency;
    const [totalRating, setTotalRating] = useState(0)
    const [upComingTours, setUpcomingTours] = useState([]);

    const [viewAgencyModal, setViewAgencyModal] = useState(null);
    const closeAgencyModal = () => {
        setViewAgencyModal(null)
    }

    useEffect(() => {
        const total = reviews.reduce((acc, row) => acc + row.rating, 0);
        setTotalRating(total)
    }, [reviews]);

    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/upcomingTours/${agencyEmail}`)
            .then(res => res.json())
            .then(data => setUpcomingTours(data))
    }, [])


    return (
        <div>
            <div className="tour-agency">
                <div className="image">
                    <img src={agencyProfile} alt="" />
                </div>
                <div className="agency-info">
                    <div className="name-tourArranged">
                        <div className="name">
                            <Link to={agencyEmail === user.email ? '/my-agency/agency-timeline' : `/agencyProfile/${_id}`}>
                                <p>{agencyName}</p>
                            </Link>
                        </div>
                        <div className="tour-arranged">
                            <p>{upComingTours.length} tour arranged</p>
                        </div>
                    </div>
                    <div className="ratings">
                        <div className="rating-count">
                            <p>{totalRating <= 0 ? '0' : (totalRating / reviews.length).toFixed(1)}<span>/5</span></p>
                        </div>
                        <div className="total-ratings">
                            <p>{reviews.length ? reviews.length : 0} reviews</p>
                        </div>
                    </div>

                    <div className="button">
                        <button className='agency-choose-button' onClick={() => setViewAgencyModal(tourAgency)}>Choose</button>
                    </div>
                </div>
            </div>

            {
                viewAgencyModal && <AgencyDetailModal agencyDetail={viewAgencyModal} closeAgencyModal={closeAgencyModal}></AgencyDetailModal>
            }

        </div>
    );
};

export default TourAgency;