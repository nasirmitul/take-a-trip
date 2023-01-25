import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { AuthContext } from '../../../../contexts/UserContext';
import { toast } from 'react-hot-toast';

const colors = {
    orange: "#FFBA5A",
    gray: "#a9a9a9"
}

const ViewAgencyRatings = () => {
    const agencyRatingsData = useLoaderData();
    const { user } = useContext(AuthContext);
    const [userTours, setUserTours] = useState([]);
    const [reload, setReload] = useState(false);

    const [reviews, setReviews] = useState([])
    const [totalRating, setTotalRating] = useState(0)

    const [allowRating, setAllowRating] = useState(false);

    const { _id, agencyEmail } = agencyRatingsData;

    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/user/tours/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUserTours(data)
            })
    }, [])

    console.log('userTours', userTours);

    useEffect(() => {
        userTours.forEach(userTour => {
            if (userTour?.agencyEmail === agencyEmail) {
                setAllowRating(true);
            }
        })
    }, [userTours])

    const stars = Array(5).fill(0)
    const [currentValue, setCurrentValue] = useState(0)
    const [hoverValue, setHoverValue] = useState(undefined);

    const handelClick = value => {
        setCurrentValue(value)
    };

    const handleMouseOver = value => {
        setHoverValue(value);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const review = form.review.value;
        const rating = currentValue;

        const userReview = {
            review,
            rating,
            reviewerName: user.displayName,
            reviewerEmail: user.email,
            reviewerImage: user.photoURL,
            reviewTime: new Date()
        }

        console.log(userReview);
        if (rating < 1) {
            return toast.error('you need to rate the agency to give a review');
        }

        fetch(`https://take-a-trip-server-sigma.vercel.app/review/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(data => {
                form.reset();
                setCurrentValue(0)
                console.log(data);
                setReload(!reload);
                toast.success('you gave a review');
            })
    }


    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/agency/reviews/${agencyEmail}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data);
            })
    }, [reload])

    useEffect(() => {
        const total = reviews.reduce((acc, row) => acc + row.rating, 0);
        setTotalRating(total)
    }, [reviews]);

    return (
        <div className='view-agency-ratings'>
            <div className="user-profile-links">
                <NavLink to={`/agencyProfile/${_id}`}>Timeline</NavLink>
                <NavLink to={`/agencyProfile/${_id}/about`}>About</NavLink>
                <NavLink className='active-link' to={`/agencyProfile/${_id}/ratings`}>Reviews</NavLink>
            </div>

            {
                userTours.length <= 0 && <p className='no-recent-event'>You are not eligible to rate this agency <br /> as you haven't took any service from them.</p>
            }

            {
                allowRating &&
                <div className='agency-ratings'>
                    <div className="stars">
                        <p className='feedback-title'>Feedback Rating</p>
                        {
                            stars.map((_, index) => {
                                return (
                                    <AiFillStar className='star-hover'
                                        key={index}
                                        size={24}
                                        style={{
                                            'cursor': 'pointer'
                                        }}
                                        color={(hoverValue || currentValue) > index ? colors.orange : colors.gray}
                                        onClick={() => handelClick(index + 1)}
                                        onMouseOver={() => handleMouseOver(index + 1)}
                                        onMouseLeave={handleMouseLeave}
                                    ></AiFillStar>
                                )
                            })
                        }
                    </div>

                    <form className='review-form' action="" onSubmit={handleSubmit}>
                        <textarea name="review" placeholder='Write a review' required></textarea>
                        <button type="submit" className='custom-btn'>Submit</button>
                    </form>

                </div>
            }


            <div className="rating-reviews">
                {
                    reviews.length > 0 &&
                    <div className="rating">
                        <div className="rating-numbers">
                            {
                                typeof totalRating === 'number' &&
                                <h1 className='rating-count'>
                                    {
                                        reviews.length > 0 ? (totalRating / reviews.length).toFixed(1) : '0.0'
                                    }
                                </h1>
                            }
                            <ul className='rating-icons'>
                                {
                                    Array.apply(null, { length: Math.floor(totalRating / reviews.length) }).map((e, i) => <li key={i} className='orange'><AiFillStar></AiFillStar></li>)
                                }
                                {
                                    Math.floor(totalRating / reviews.length) < 5 && Array.apply(null, { length: 5 - Math.floor(totalRating / reviews.length) }).map((e, i) => <li key={i} className='gray'><AiFillStar></AiFillStar></li>)
                                }
                            </ul>
                        </div>
                        <div className="total-reviews">
                            <p><span>{reviews.length}</span> reviews</p>
                        </div>
                    </div>
                }


                {
                    reviews.map(review =>
                        <div className="reviews">
                            <div className="image">
                                <Link to={`${user?.email === review?.reviewerEmail ? `/profile/timeline` : `/user/${review?.reviewerEmail}`}`}>
                                    <img src={review.reviewerImage} alt="" />
                                </Link>
                            </div>
                            <div className="reviewer-info">
                                <Link to={`${user?.email === review?.reviewerEmail ? `/profile/timeline` : `/user/${review?.reviewerEmail}`}`}>
                                    <p className="name">{review.reviewerName}</p>
                                </Link>

                                <div className="rating-time">
                                    <ul className='rating-icons'>
                                        {
                                            Array.apply(null, { length: review.rating }).map((e, i) => <li key={i} className='orange'><AiFillStar></AiFillStar></li>)
                                        }
                                        {
                                            review.rating < 5 && Array.apply(null, { length: 5 - review.rating }).map((e, i) => <li key={i} className='gray'><AiFillStar></AiFillStar></li>)
                                        }
                                    </ul>
                                    <p className="time">{review.reviewTime.slice(0, 10)}</p>
                                </div>
                                <div className="main-review">
                                    <p>{review.review}</p>
                                </div>
                            </div>
                        </div>
                    ).reverse()
                }
            </div>


        </div>
    );
};

export default ViewAgencyRatings;