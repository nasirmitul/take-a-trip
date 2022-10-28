import React, { useEffect, useState } from 'react';

import man from '../../../images/man.jpg'
import globe from '../../../images/t.png'
import menu from '../../../icons/menu.png'
import react from '../../../icons/react.png'
import reactStroke from '../../../icons/reactStroke.png'
import comment from '../../../icons/comment.png'



const SingleUserPost = ({ post }) => {
    /* destructuring data from api */
    const { id, name, picture, caption, profile, time, reacts, comments } = post;


    /* Check Caption length and work on see more */
    const [captionLength, setCaptionLength] = useState(true);

    useEffect(() => {
        if (caption.length > 200) {
            setCaptionLength(false);
        }
        else {
            setCaptionLength(true);
        }
    }, [caption])

    const captionCharCount = () => {
        if (caption.length > 200) {
            setCaptionLength(!captionLength)
        }
    }

    /* Change React Icon and Increase/Decrease Value */
    const [reactActive, setReactActive] = useState(false);
    const [reactCount, setReactCount] = useState(reacts)


    return (
        <div>
            <div className="post">
                <div className="id d-flex post-top-part">
                    <div className="id-name d-flex align-items-center">
                        <div className="id-img">
                            <img className="post-user-img" src={profile} alt="men" />
                        </div>
                        <div className="id-text ms-4">
                            <h6>{name}</h6>
                            <p>{time}</p>
                        </div>
                    </div>
                    <div className="post-menu">
                        <img src={menu} alt="menu" />
                    </div>
                </div>

                <div className="caption-text" onClick={captionCharCount}>
                    {
                        captionLength ? caption : `${caption.slice(0, 200)} ...see more ${'<p>...see more</p>'}`
                    }
                </div>

                <div className="upload-img">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={picture} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={picture} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={picture} alt="Third slide" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="react-comment d-flex justify-content-between">
                    <div className="react">
                        <div className="react-icon" onClick={() => setReactActive(!reactActive)}>
                            {
                                reactActive ?
                                    <img onClick={() => setReactCount(reactCount - 1)} className='react-pointer' src={react} /> :
                                    <img onClick={() => setReactCount(reactCount + 1)} className='react-pointer' src={reactStroke} />
                            }
                        </div>

                        <span>{reactCount}</span>
                    </div>
                    <div className="comment">
                        <p>{comments}<span>comment</span><img src={comment} alt="" /></p>
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