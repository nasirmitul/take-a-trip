import React, { useState, useEffect } from 'react';
import Slider from "react-slick";




const CarouselTest = () => {
    const [images, setImage] = useState([])
    useEffect(() => {
        fetch("JSON/test.json")
            .then(res => res.json())
            .then(data => setImage(data))
    }, [])

    console.log(images);


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (





        images.map(image =>
            <div style={{ "width": "500px", "margin": "auto" }}>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    {
                        image.pictures.map(img =>
                            <div>
                                <img src={img} />
                            </div>
                        )
                    }
                </Slider>
            </div>
        )
    );
};

export default CarouselTest;