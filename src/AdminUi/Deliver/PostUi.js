import React from 'react'
import { useEffect, useState, Suspense } from 'react'
import './Post.css'
import DeliverMap from './DeliverMap';
import DetailsForm from './DetailsForm';
export default function PostUi() {

    const [centerCoord, setCenterCoord] = useState([31, 76]);
    const [shouldRender, setShouldRender] = useState(false);
    //postion , setPosition is declared here so that it should be available in details form also;
    const [position, setPosition] = useState([]);
    useEffect(() => {
        // Place your code that needs to run before the component mounts here
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("asdfafs")
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            setCenterCoord([position.coords.latitude, position.coords.longitude])
        });

        // Once your code is executed, set shouldRender to true to allow rendering
        setInterval(() => {
            setShouldRender(true);
        }, 2000);

        // If you need to perform any cleanup when the component unmounts, return a cleanup function
        return () => {
            // Code to execute when the component unmounts
            console.log('Component is about to unmount');
        };
    }, []);
    return (
        <div className='post-outer'>
            <DetailsForm position={position} setPosition={setPosition}></DetailsForm>
            <Suspense fallback={<div>Loading...</div>}>
                {shouldRender && <DeliverMap centerCoord={centerCoord} position={position} setPosition={setPosition} className="map-div"></DeliverMap>

                }
            </Suspense>
        </div>
    )
}
