import React, { useContext, useEffect, useState } from 'react';

import menu from '../../../icons/menu.png'
import react from '../../../icons/react.png'
import reactStroke from '../../../icons/reactStroke.png'
import comment from '../../../icons/comment.png'

import { GrFormPrevious } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';
import { VscDebugStackframeDot } from 'react-icons/vsc';
import { AuthContext } from '../../../contexts/UserContext';
import { Link } from 'react-router-dom';


const SingleUserPost = ({ post }) => {
    const { user } = useContext(AuthContext);
    const { _id, name, email, caption, profile, time, reacts, comments, allPicture, reacts_uid } = post;


    /* Change React Icon and Increase/Decrease Value */

    const [reactCount, setReactCount] = useState(reacts)
    const [checkReact, setCheckReact] = useState(false);
    const [reactActive, setReactActive] = useState(false);


    useEffect(() => {
        reacts_uid?.forEach(react => {
            if(react === user.uid){
                setCheckReact(true)
                setReactActive(true)
            }
            else{
                setCheckReact(false)
                setReactActive(false)
            }
            // react === user.uid ? setCheckReact(true) : setCheckReact(false)
        })
    }, [checkReact])

    // console.log('uid', reacts_uid);

    const addReact = () => {
        setReactCount(reactCount + 1);

        fetch(`http://localhost:5000/post_react_add/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ react: 1, uid: user.uid })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    const removeReact = () => {
        setReactCount(reactCount - 1);

        fetch(`http://localhost:5000/post_react_remove/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ react: -1, uid: user.uid })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }



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


    /* Add new comment to a posts */
    const addComment = (event) => {
        event.preventDefault();
        const form = event.target;

        const comment = form.comment.value;
        const commentatorImg = user.photoURL;
        const commentator = user.displayName;

        if (comment.length < 1) {
            return;
        }

        const commentData = {
            comment,
            commentatorImg,
            commentator,
            date: new Date().toUTCString(),
            time: new Date().toLocaleString()
        }

        // console.log(commentData);

        fetch(`http://localhost:5000/posts/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // alert('comment added successfully')
                    form.reset();
                    
                }
                console.log(data);
            })
    }


    return (
        <div>
            <div className="post">
                <div className="id d-flex post-top-part">
                    <div className="id-name d-flex align-items-center">
                        <div className="id-img">
                            <img className="post-user-img" src={profile} alt="men" />
                        </div>
                        <div className="id-text ms-4">
                            <Link to={`${user?.email === email? `/profile/timeline` : `/user/${email}`}`}><h6>{name}</h6></Link>
                            <p>{time.slice(11, 16)}, {time.slice(0, 10)}</p>
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
                                    <VscDebugStackframeDot onClick={() => goToSlide(slideIndex)} className={slideIndex === currentIndex ? 'dot-icon-active' : 'dot-icon'}></VscDebugStackframeDot>
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
                                    <img onClick={removeReact} className='react-pointer' src={react} /> :
                                    <img onClick={addReact} className='react-pointer' src={reactStroke} />
                            }
                        </div>
                        <span>{reactCount}</span>
                    </div>


                    <div className="comment">
                        <p>{comments.length}<span>comment</span><img src={comment} alt="" /></p>
                    </div>
                </div>

                <form action="" className="comment d-flex" onSubmit={addComment}>
                    <input className="form-control w-100" name='comment' type="search" placeholder="Your thought on it" />
                    <button className="btn-comment custom-btn" type="comment">Comment</button>
                </form>


                <div className="all-comments">
                    {
                        comments.map((comment, commentIndex) =>
                            <div className='single-comment' key={commentIndex}>
                                <div className="commentator-image">
                                    <img className='commentator-image' src={comment?.commentatorImg} alt="" />
                                </div>
                                <div className="name-comment">
                                    <p className="name">{comment?.commentator}
                                        <span className="comment-time">
                                            {comment?.date?.slice(5, 17)}, {comment?.time?.slice(12, 16)} {comment?.time?.slice(20, 22)}
                                        </span>
                                    </p>
                                    <p className="comment">{comment?.comment}</p>
                                </div>
                            </div>
                        ).reverse()
                    }
                </div>

            </div>
        </div>
    );
};

export default SingleUserPost;