import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { AiFillStar } from 'react-icons/ai';

const AgencyDetailModal = ({ agencyDetail, closeAgencyModal }) => {
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
                    <AiFillStar className='star'></AiFillStar><p>4.2<span>/5</span></p>
                </div>

                <div className="actions">
                    <button className="custom-btn">View Profile</button>
                    <button className="custom-btn-outline">Personalize Tour</button>
                </div>

            </div>
        </div>
    );
};

export default AgencyDetailModal;