import React, { useContext } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { AiFillStar } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';

const AgencyDetailModal = ({ agencyDetail, closeAgencyModal }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <div>
            <div className='full-agency-detail-modal' onClick={closeAgencyModal}></div>

            <div className="agency-detail-modal">
                <div className="modal-head" onClick={closeAgencyModal}>
                    <RxCross2 className='cancel-icon'></RxCross2>
                </div>

                <div className="agency-cover-image">
                    <img src={agencyDetail.agencyCover} alt="" />
                </div>

                <div className="agency-profile-image">
                    <img src={agencyDetail.agencyProfile} alt="" />
                </div>

                <div className="agency-name">
                    <h3>{agencyDetail.agencyName}</h3>
                </div>

                <div className="agency-email">
                    <p>{agencyDetail.agencyEmail}</p>
                </div>

                <div className="tour-arranged">
                    <p>{agencyDetail.tourArranged ? agencyDetail.tourArranged : '0'} tour arranged</p>
                </div>

                <div className="ratings">
                    <p>{agencyDetail.agencyRatings ? agencyDetail.agencyRatings : 0} ratings</p>
                </div>

                <div className="reviews">
                    <AiFillStar className='star'></AiFillStar><p>0<span>/5</span></p>
                </div>

                <div className="actions">
                    <Link to={agencyDetail.agencyEmail === user.email ? '/my-agency/agency-timeline' : `/agencyProfile/${agencyDetail._id}`}>
                        <button className="custom-btn">View Profile</button>
                    </Link>
                    <Link to={agencyDetail.agencyEmail === user.email ? '/my-agency/agency-timeline' : `/personalize-tour/${agencyDetail._id}`}>
                        <button className="custom-btn-outline">Personalize Tour</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default AgencyDetailModal;