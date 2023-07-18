import { SelectedBusinessContext } from '@/context/SelectedBusinessContext';
import { UserLocationContext } from '@/context/UserLocationContext';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React, { useContext } from 'react'
import Pointer from './Pointer';
import Shimmering from './Shimmering';


const Map = ({ nearbyPlacesList }) => {
    const { userLocation, setUserLocation } = useContext(UserLocationContext)
    const { selectedNearbyPlace, setSelectedNearbyPlace } = useContext(SelectedBusinessContext);

    const containerStyle = {
        width: '100%',
        height: '600px',
        borderRadius: 20
    };

    return (
        <div>
            <LoadScript
                googleMapsApiKey={process.env.NEXT_PUBLIC_API_SENSITIVE}>
                {userLocation ?
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={
                            !selectedNearbyPlace.name? {
                                lat: userLocation.lat,
                                lng: userLocation.lng
                            }:selectedNearbyPlace.geometry.location}
                        zoom={20}
                    >
                        { /* Child components, such as markers, info windows, etc. */}
                        <>
                            <Pointer nearbyPlacesList={nearbyPlacesList} userLocation={userLocation} />
                        </>
                    </GoogleMap> : null}
            </LoadScript>
        </div>
    )
}

export default Map