import React, { useState } from 'react';
import man from '../../../images/man.jpg'
import AgencyDetailModal from './AgencyDetailModal';

const TourAgency = ({tourAgency}) => {
    const [viewAgencyModal, setViewAgencyModal] = useState(null);
    const closeAgencyModal = () => {
        setViewAgencyModal(null)
    }


    const {agencyName, agencyProfile, tourArranged, agencyRatings} = tourAgency;
    return (
        <div>
            <div className="tour-agency">
                <div className="image">
                    <img src={agencyProfile} alt="" />
                </div>
                <div className="agency-info">
                    <div className="name-tourArranged">
                        <div className="name">
                            <p>{agencyName}</p>
                        </div>
                        <div className="tour-arranged">
                            <p>{tourArranged ? tourArranged : '0'} tour arranged</p>
                        </div>
                    </div>
                    <div className="ratings">
                        <div className="rating-count">
                            <p>4.2<span>/5</span></p>
                        </div>
                        <div className="total-ratings">
                            <p>{agencyRatings ? agencyRatings : 0} ratings</p>
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