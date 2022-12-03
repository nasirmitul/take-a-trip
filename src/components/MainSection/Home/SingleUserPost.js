import React, { useEffect, useState } from 'react';

import menu from '../../../icons/menu.png'
import react from '../../../icons/react.png'
import reactStroke from '../../../icons/reactStroke.png'
import comment from '../../../icons/comment.png'

import { GrFormPrevious } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';
import { VscDebugStackframeDot } from 'react-icons/vsc';


const SingleUserPost = ({ post }) => {
    const { id, name, caption, profile, time, reacts, comments, allPicture } = post;

    /* Image slider for posts pictures */
    const [currentIndex, setCurrentIndex] = useState(0)

    const goPrev = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? allPicture.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goNext = () => {
        const isLastSlide = currentIndex === allPicture.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

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
                        captionLength ? caption : `${caption.slice(0, 200)} ...see more`
                    }
                </div>

                <div className="image-slider">
                    <div className='main-slider'>
                        <button className='prev' onClick={goPrev}><GrFormPrevious className='n-p-icon'></GrFormPrevious></button>
                        <img className='slider-img' src={allPicture[currentIndex].imgURL} alt="" />
                        <button className='next' onClick={goNext}><GrFormNext className='n-p-icon'></GrFormNext></button>
                    </div>

                    <div className="change-image">
                        {
                            allPicture.map((image, slideIndex) => (
                                <div className='dot' key={slideIndex}>
                                    <VscDebugStackframeDot onClick={() => goToSlide(slideIndex)} className='dot-icon'></VscDebugStackframeDot>
                                </div>
                            ))
                        }
                    </div>

                    <div className="image-count">
                        <p className='image-number'>{currentIndex + 1}<span>/{allPicture.length}</span></p>
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
                        <p>{comments.length}<span>comment</span><img src={comment} alt="" /></p>
                    </div>
                </div>

                <div className="comment d-flex">
                    <input className="form-control w-100" type="search" placeholder="Your thought on it" />
                    <button className="btn-comment custom-btn" type="comment">Comment</button>
                </div>


                <div className="all-comments">
                    {
                        comments.map((comment, commentIndex) =>
                            <div className='single-comment' key={commentIndex}>
                                <div className="commentator-image">
                                    <img className='commentator-image' src={comment.commentatorImg} alt="" />
                                </div>
                                <div className="name-comment">
                                    <p className="name">{comment.commentator}</p>
                                    <p className="comment">{comment.comment}</p>
                                </div>
                            </div>).reverse()
                    }
                </div>

            </div>
        </div>
    );
};

export default SingleUserPost;