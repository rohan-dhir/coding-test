import React, { useState } from 'react'

const Carousel = ({ data }) => {
    const [current, setCurrent] = useState(0);
    const length = data.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

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
                        <img key={index} src={value} />
                        )}
                        </div>
                    ))
                }
            </section>
            
    )
}

export default Carousel
