import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const colors = {
    orange: "#FFBA5A",
    gray: "#a9a9a9"
}

const AgencyRatings = () => {
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
        }
        console.log(userReview);
    }

    return (
        <div >
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
        </div>
    );
};


export default AgencyRatings;