import React from 'react';

import man from '../../../images/man.jpg'
import globe from '../../../images/t.png'
import menu from '../../../icons/menu.png'
import react from '../../../icons/react.png'
import comment from '../../../icons/comment.png'

const SingleUserPost = () => {
    return (
        <div>
            <div className="post">
                <div className="id d-flex post-top-part">
                    <div className="id-name d-flex align-items-center">
                        <div className="id-img">
                            <img className="post-user-img" src={man} alt="men" />
                        </div>
                        <div className="id-text ms-4">
                            <h6>Sharif</h6>
                            <p>12:03pm, june 17,20</p>
                        </div>
                    </div>
                    <div className="post-menu">
                        <img src={menu} alt="menu" />
                    </div>
                </div>

                <div className="caption-text">
                    <p>We are arranging a tour for 3 days 4 night from 1 july, 2022 to 4 july, 2022. Our journey will start from Dhaka at 7:00pm and we will reach at cox’s Bazar at 4:00 am hopefully. Let’s join in the journey and enjoy</p>
                </div>

                <div className="upload-img">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={globe} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={globe} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={globe} alt="Third slide" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="react-comment d-flex justify-content-between">
                    <div className="react">
                        <p><img src={react} alt="" /><span>300</span></p>
                    </div>
                    <div className="comment">
                        <p>27 <span>comment</span><img src={comment} alt="" /></p>
                    </div>
                </div>

                <div className="comment d-flex">
                    <input className="form-control w-100" type="search" placeholder="Your thought on it" />
                    <button className="btn-comment custom-btn" type="comment">Comment</button>
                </div>

            </div>
        </div>
    );
};

export default SingleUserPost;