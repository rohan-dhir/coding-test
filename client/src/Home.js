import React, { useEffect, useState } from 'react'
import { useData, useImages } from './util/hooks';
import Carousel from './components/Carousel';

const Home = () => {
    const { carouselImages, setCarouselImages } = useImages('cats');
    
    const [activeItems, setActiveItems] = useState(['cats'])
    const { data, setData, getData } = useData([]);

    useEffect(() => {
        getData(activeItems[0]);
    }, [])

    /*
    const getData = async (carouselImages) => {
        await fetch(`http://localhost:5000/api/${carouselImages}`)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => {
            console.log(
                "Error Fetching data: ", error
                );
        })
        .finally(() => {
            //do something here
        })
    }
    */

    return (
        <div>
            <button className="options">Cats</button>
            <button className="options">Sharks</button>
                {!data ? "Loading" : 
                    <Carousel data={data} />
                }
        </div>
    )
}

export default Home
