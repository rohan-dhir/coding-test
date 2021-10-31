import { useState } from 'react'

export const useData = (initialState = []) => {
    const [data, setData] = useState(initialState)

    const getData = async (dataSet) => {
        await fetch(`http://localhost:5000/api/${dataSet}`)
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
    return {
        data,
        setData,
        getData
    }
}

export const useImages = (initialState = ('cats')) => {
    const [carouselImages, setCarouselImages] = useState(initialState);

    return {
        carouselImages,
        setCarouselImages
    }
}