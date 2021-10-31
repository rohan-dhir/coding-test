import React, { useEffect, useState } from 'react'
import { useData } from './util/hooks';
import Carousel from './components/Carousel';
import Spinner from './components/Spinner';

const Home = () => {
    
    //Declaring activeItems initial state
    const [activeItems, setActiveItems] = useState({
        sharks:true,
        cats:false
    });

    const { data, isFetching, getData } = useData();

    //Fetching data based on activeItems state
    //Disable buttons accordingly
    useEffect(() => {
        
        if(activeItems.sharks && activeItems.cats) {
            getData('getAll');
            document.getElementById("catsBtn").disabled = false;
            document.getElementById("sharksBtn").disabled = false;
        }

        if(!activeItems.sharks && activeItems.cats) {
            getData('cats');
            document.getElementById("catsBtn").disabled = true;
        }

        if(activeItems.sharks && !activeItems.cats) {
            getData('sharks');
            document.getElementById("sharksBtn").disabled = true;
        }
    }, [activeItems])

    //Toggling activeItems state
    const toggle = (dataSet) => {
        if (dataSet === 'sharks') 
            setActiveItems((prev) => ({...prev, sharks: !prev.sharks }))

        if (dataSet === 'cats') 
            setActiveItems((prev) => ({...prev, cats: !prev.cats }))
    }

    //Setting buttons appearence based on activeItems state
    //Display spinner if data is still being fetched from the server
    return (
        <div>
            <div className="btns">
            <button 
                id="sharksBtn"
                className={activeItems.sharks ? 'options active' : 'options'} 
                onClick={() => toggle('sharks')}
                >
                    Sharks
            </button>
            
            <button 
                id="catsBtn"
                className={activeItems.cats ? 'options active' : 'options'}  
                onClick={() => toggle('cats')}
                >
                    Cats
            </button>
        </div>

        <div className="carouselSection">
            {isFetching ? <Spinner /> : 
                <Carousel data={data} />
            }
        </div>
        </div>
    )
}

export default Home
