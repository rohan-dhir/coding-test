import React, { useState } from 'react'

const Carousel = ({ data }) => {
    //Declare current slide state
    const [current, setCurrent] = useState(0);
    const length = data.length;

    //Increment or decrement 'current' state based on position relative to length of data array
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    //Generate an image for every item in 'data'
    //Set slide active based on 'current' state relative to index value of image
    return (
        <section className='slider'>
            <i className='fas fa-angle-left leftButton' onClick={prevSlide}></i>
            <i className='fas fa-angle-right rightButton' onClick={nextSlide}></i>

            {data.map ((value, index) => (
                <div
                    key={index}
                    className={index === current ? 'slide active' : 'slide'}
                >
                {index === current && (
                        <img key={index} src={value} className="slider-image" />
                        )}
                        </div>
                    ))
                }
            </section>
            
    )
}

export default Carousel
