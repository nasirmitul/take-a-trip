import React from 'react';
import ImageSlider from './ImageSlider';

const images = [
    {
        id: 1, url: 'https://images.unsplash.com/photo-1669962367460-00b711b2e3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
        id: 2, url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'
    },
    {
        id: 3, url: 'https://images.unsplash.com/photo-1611501279711-670b0d0455cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
        id: 4, url: 'https://images.unsplash.com/photo-1628082878684-1b66400cdf85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
        id: 5, url: 'https://images.unsplash.com/photo-1619726578880-5da6b1be246c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyYWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
    },
]

const CarouselTest = () => {
    return (
        <div className='container'>
            <h1>Test Carousel</h1>
            <ImageSlider slides={images}></ImageSlider>
        </div>
    );
};

export default CarouselTest;