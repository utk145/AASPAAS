import { SelectedBusinessContext } from '@/context/SelectedBusinessContext';
import React, { useContext } from 'react'
import NearbyItem from './NearbyItem';
import Shimmering from './Shimmering';

const Nearby = ({ nearbyPlacesList }) => {
    const [tmp, settmp] = React.useState(0);
    console.log("Nearby Places", nearbyPlacesList);
    const [Loader, setLoader] = React.useState(true);

    const { selectedNearbyPlace, setSelectedNearbyPlace } = useContext(SelectedBusinessContext);

    React.useEffect(() => {
        setInterval(() => {
            setLoader(false);
        }, 2000);
    }, []);

    React.useEffect(() => {
        settmp(0);
        setLoader(true);
    }, [nearbyPlacesList]);


    return (
        <div>
            <h2 className='text-[20px]  mt-3 mb-3 font-bold flex items-center justify-between'>Top places nearby
                <span className='flex'>
                    {tmp > 0 ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 p-2 text-gray-400 hover:text-purple-500 hover:bg-purple-200 cursor-pointer rounded-xl" onClick={() => settmp(tmp - 3)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg> : null}
                    {tmp < nearbyPlacesList.length - 2 ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 p-2 text-gray-400 hover:text-purple-500 hover:bg-purple-200 cursor-pointer rounded-xl" onClick={() => settmp(tmp + 3)}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg> : null}
                </span>
            </h2>
            {!Loader ?
                <div className='cursor-pointer rounded-2xl'>
                    {nearbyPlacesList?.map((nearby, index) => index >= tmp && index < tmp + 3 && (
                        <div onClick={() =>setSelectedNearbyPlace(nearby)} className={`${selectedNearbyPlace.name===nearby.name?'bg-purple-200 rounded-t-[16px]':null}`}>
                            <NearbyItem nearby={nearby} key={index}  />
                        </div>
                    ))}
                </div>
                : null}
            {Loader ? [1, 2, 3].map((item, index) => (
                <Shimmering key={index} />
            )) : null}
        </div>
    )
}

export default Nearby
