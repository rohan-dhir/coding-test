import { useState } from 'react'

export const useData = (initialState = []) => {

    //Declaring 'data' state for images
    //Declaring isFetching state to determine loading status
    const [data, setData] = useState(initialState)
    const [isFetching, setIsFetching] = useState();

    //Fetch the appropriate data and store the result in the 'data' state
    const getData = async (dataSet) => {
        setIsFetching(true)
        await fetch(`http://localhost:5000/api/${dataSet}`)
        .then(res => res.json())
        .then(data => {
            setData(data)
            setIsFetching(false);
        })
        .catch(error => {
            console.log(error);
            setIsFetching(false);
        })
    }

    return {
        data,
        isFetching,
        getData,
    }
}