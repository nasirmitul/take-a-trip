import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import { AiFillStar } from 'react-icons/ai';

const AgencyRatings = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    const [totalRating, setTotalRating] = useState(0)
    useEffect(() => {
        fetch(`https://take-a-trip-server-sigma.vercel.app/agency/reviews/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data);
            })
    }, [])

    useEffect(() => {
        const total = reviews.reduce((acc, row) => acc + row.rating, 0);
        setTotalRating(total)
    }, [reviews]);

    return (
        <div >
            <div className="rating-reviews">
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
                            {/* <li><AiFillStar></AiFillStar></li>
                            <li><AiFillStar></AiFillStar></li>
                            <li><AiFillStar></AiFillStar></li>
                            <li><AiFillStar></AiFillStar></li>
                            <li><AiFillStar></AiFillStar></li> */}

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


                {
                    reviews.map(review =>
                        <div className="reviews">
                            <div className="image">
                                <img src={review.reviewerImage} alt="" />
                            </div>
                            <div className="reviewer-info">
                                <p className="name">{review.reviewerName}</p>
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


export default AgencyRatings;