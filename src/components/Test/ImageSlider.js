import React, { useState } from 'react';

const ImageSlider = ({ slides }) => {
    console.log("test", slides);
    const [currentIndex, setCurrentIndex] = useState(0)

    const goPrev = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    return (
        <div>
            <div className='main-slider'>
                <button className='prev' onClick={goPrev}>prev</button>
                <img className='test-carousel' src={slides[currentIndex].url} alt="" />
                <button className='next' onClick={goNext}>next</button>
            </div>
        </div>
    );
};

export default ImageSlider;