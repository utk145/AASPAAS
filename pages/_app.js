import { UserLocationContext } from '@/context/UserLocationContext';
import '@/styles/globals.css'
import React, { useEffect, useState } from 'react'
export default function App({ Component, pageProps }) {
  const [userLocation, setUserLocation] = useState([]);
  useEffect(() => {
    getUserLoc();
  }, [])

  const getUserLoc = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log(pos);
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      })
    })
  }
  return (
    <UserLocationContext.Provider value={{userLocation,setUserLocation}}>
      <Component {...pageProps} />
    </UserLocationContext.Provider>
  )
}
