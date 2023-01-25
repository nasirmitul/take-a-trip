import React, { useContext, useState } from 'react';

import man from '../../../images/man.jpg'
import travel from '../../../images/space-travel.jpg'
import menu from '../../../icons/menu.png'
import interested from '../../../icons/interested.png'
import going from '../../../icons/going.png'
import moreInfo from '../../../icons/more info.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
var twelve = require('twentyfour-to-twelve');

const SingleAgencyPost = ({ post, handleRefetch }) => {
    const { user } = useContext(AuthContext);
    const { _id, agencyName, agencyEmail, agencyProfile, time, image, tourTripDate, tourTripTime, locationName, details } = post;
    const [handleMenu, setHandleMenu] = useState(false)

    const handlePostDelete = (id) => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/agency-post/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                handleRefetch();
                setHandleMenu(false)
            })
    }

    return (
        <div>
            <div className="agency-post">
                <div className="post">
                    <div className="id d-flex post-top-part">
                        <div className="id-name d-flex align-items-center">
                            <div className="id-img">
                                <img className="post-user-img" src={agencyProfile} alt="men" />
                            </div>
                            <div className="id-text  ms-4">
                                <h6>{agencyName}</h6>
                                <p>{time || 'posted time here'}</p>
                            </div>
                        </div>


                        <div className="post-menu" >

                            <div className="post-menu-icon" onClick={() => setHandleMenu(!handleMenu)}>
                                <img src={menu} alt="menu" />
                            </div>


                            {handleMenu &&
                                <div className="menu-items">
                                    {
                                        user.email === agencyEmail && <p onClick={() => handlePostDelete(_id)}>Delete</p>
                                    }
                                </div>
                            }
                        </div>


                    </div>

                    <div className="upload-img">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={image} alt="First slide" />
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
                        <p id="time">{tourTripDate} at {twelve(tourTripTime)}</p>
                        <h4>{locationName}</h4>
                        <p>{details}</p>
                    </div>

                    <div className="agency-icons d-flex justify-content-around mt-3">
                        {/* <div className="interested">
                            <p><Link><img src={interested} alt="" /><span>interested</span></Link></p>
                        </div> */}

                        <div className="info">
                            <p><Link to={`/tour-details/${_id}`}><img src={moreInfo} alt="" /><span>More info</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAgencyPost;