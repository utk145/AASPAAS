import { MarkerF, InfoBox } from '@react-google-maps/api'
import React from 'react'

const Pointer = ({ userLocation, nearbyPlacesList }) => {
    return (
        <div>
            {nearbyPlacesList && nearbyPlacesList?.map((business, index) => (index <= 8) && (
                <MarkerF key={business.place_id} position={{
                    lat: business?.geometry?.location.lat,
                    lng: business?.geometry?.location.lng
                }}
                    icon={{
                        url: "/location-pin.png",
                        scaledSize: {
                            width: 50,
                            height: 50
                        }
                    }}
                >
                    <InfoBox position={business.geometry.location}>
                        <div style={{
                                backgroundColor: "#c084fc",
                                opacity: 1,
                                padding: 7,
                                color: "white",
                                borderRadius: 10,
                                width: 100,}}>
                            <div style={{ fontSize: 13, fontColor: `#08233B` }}>
                                {business.name}
                            </div>
                        </div>
                    </InfoBox>
                </MarkerF>
            ))}
            <MarkerF position={userLocation}
                icon={{
                    url: "/user-location.png",
                    scaledSize: {
                        width: 50,
                        height: 50
                    }
                }}

            >

            </MarkerF>
        </div>
    )
}

export default Pointer