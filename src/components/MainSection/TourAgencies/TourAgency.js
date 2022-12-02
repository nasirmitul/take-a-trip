import React from 'react';
import man from '../../../images/man.jpg'

const TourAgency = ({tourAgency}) => {
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
                            <p>{tourArranged} tour arranged</p>
                        </div>
                    </div>
                    <div className="ratings">
                        <div className="rating-count">
                            <p>4.2<span>/5</span></p>
                        </div>
                        <div className="total-ratings">
                            <p>{agencyRatings} ratings</p>
                        </div>
                    </div>
                    <div className="button">
                        <button className='agency-choose-button'>Choose</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourAgency;