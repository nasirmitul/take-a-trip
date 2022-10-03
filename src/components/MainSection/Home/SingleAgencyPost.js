import React from 'react';

import man from '../../../images/man.jpg'
import travel from '../../../images/space-travel.jpg'
import menu from '../../../icons/menu.png'
import interested from '../../../icons/interested.png'
import going from '../../../icons/going.png'
import moreInfo from '../../../icons/more info.png'

const SingleAgencyPost = () => {
    return (
        <div>
            <div className="agency-post">
                <div className="post">
                    <div className="id d-flex post-top-part">
                        <div className="id-name d-flex align-items-center">
                            <div className="id-img">
                                <img className="post-user-img" src={man} alt="men" />
                            </div>
                            <div className="id-text  ms-4">
                                <h6>Sharif</h6>
                                <p>12:03pm, june 17,20</p>
                            </div>
                        </div>
                        <div className="post-menu">
                            <img src={menu} alt="menu" />
                        </div>
                    </div>

                    <div className="upload-img">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={travel} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="./images/t.png" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="./images/t.png" alt="Third slide" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="agency-text">
                        <p id="time">August 23 at 7:00 pm</p>
                        <h4>Cox’s Bazar Tour</h4>
                        <p>We are arranging a tour for 3 days 4 night from 1 july, 2022 to 4 july, 2022. Our journey will
                            start from Dhaka at 7:00pm and we will reach at cox’s Bazar at 4:00 am hopefully. Let’s join in the
                            journey and enjoy...</p>
                    </div>

                    <div className="agency-icons d-flex justify-content-between mt-3">
                        <div className="interested">
                            <p><a href="/"><img src={interested} alt="" /><span>interested</span></a></p>
                        </div>
                        <div className="going">
                            <p><a href="/"><img src={going} alt="" /><span>Going</span></a></p>
                        </div>
                        <div className="info">
                            <p><a href="/"><img src={moreInfo} alt="" /><span>More info</span></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAgencyPost;