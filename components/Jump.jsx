import { SelectedBusinessContext } from '@/context/SelectedBusinessContext';
import { UserLocationContext } from '@/context/UserLocationContext';
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'

const Jump = () => {
    const { selectedNearbyPlace, setSelectedNearbyPlace } = useContext(SelectedBusinessContext);
    const { userLocation, setUserLocation } = useContext(UserLocationContext)


    const [distance, setDistance] = useState();
    useEffect(() => {
        if (selectedNearbyPlace.name) {
            calculateDistance(
                selectedNearbyPlace.geometry.location.lat,
                selectedNearbyPlace.geometry.location.lng,
                userLocation.lat,
                userLocation.lng
            )
        }
    }, [selectedNearbyPlace])


    const calculateDistance = (lat1, lon1, lat2, lon2) => {

        const earthRadius = 6371; // in kilometer

        const degToRad = (deg) => {
            return deg * (Math.PI / 180);
        };

        const dLat = degToRad(lat2 - lat1);
        const dLon = degToRad(lon2 - lon1);

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const distance = earthRadius * c;

        setDistance(distance.toFixed(1))
        return distance.toFixed(2); // Return the distance with 2 decimal places
    };

    const onDirectionClick = () => {
        window.open('https://www.google.com/maps/dir/?api=1&origin=' +
            userLocation.lat + ',' + userLocation.lng + '&destination='
            + selectedNearbyPlace.geometry.location.lat
            + ',' + selectedNearbyPlace.geometry.location.lng + '&travelmode=driving')
    }

    
    return (
        <>
            {selectedNearbyPlace.name ?

                <div className='fixed bottom-2 right-8 z-30 flex items-center bg-purple-400 p-4 rounded-3xl gap-5'>
                    <div className='text-white'>
                        <h2 className='font-semibold text-[18px]'>{selectedNearbyPlace.name}</h2>
                        <h2>{(distance * 1.60934).toFixed(2)} Km</h2>
                    </div>
                    <div className='bg-purple-500 p-3 rounded-2xl hover:scale-105 transition-all cursor-pointer' onClick={onDirectionClick}>
                        <Image src="/go.png" alt="go-there" width={30} height={30} />
                    </div>
                </div>
                : null}
        </>
    )
}

export default Jump