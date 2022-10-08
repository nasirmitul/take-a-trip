import React from 'react';
import man from '../../../images/man.jpg'

const TourAgency = () => {
    return (
        <div>
            <div className="tour-agency">
                <div className="image">
                    <img src={man} alt="" />
                </div>
                <div className="agency-info">
                    <div className="name-tourArranged">
                        <div className="name">
                            <p>Sheikh Monsur Tour Agency</p>
                        </div>
                        <div className="tour-arranged">
                            <p>1320 tour arranged</p>
                        </div>
                    </div>
                    <div className="ratings">
                        <div className="rating-count">
                            <p>4.2<span>/5</span></p>
                        </div>
                        <div className="total-ratings">
                            <p>1,256 ratings</p>
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