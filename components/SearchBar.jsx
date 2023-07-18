import { UserLocationContext } from '@/context/UserLocationContext'
import GlobalApi from '@/util/GlobalApi'
import React, { useContext } from 'react'


const SearchBar = ({ nearbyPlacesList, setNearbyPlacesList }) => {
    const { userLocation, setUserLocation } = useContext(UserLocationContext)

    const searchPlace = (searchText) => {
        GlobalApi.searchPlace(searchText, userLocation.lat, userLocation.lng)
            .then(resp =>
                setNearbyPlacesList(resp.data.candidates)
            )

    }
    return (
        <div className='flex gap-4 bg-purple-100 p-3 rounded-2xl'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-purple-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            {/* <input type="text" placeholder='Search' className='bg-transparent outline-none w-full text-[17px] placeholder-purple-400' onKeyDown={(e) => e.key === "Enter" && console.log(e.target.value)} /> */}
            <input type="text" placeholder='Search' className='bg-transparent outline-none w-full text-[17px] placeholder-purple-400' onKeyDown={(e) => e.key === "Enter" && searchPlace(e.target.value)} />
        </div>
    )
}

export default SearchBar