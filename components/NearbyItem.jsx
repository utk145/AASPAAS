import Image from 'next/image'
import React from 'react'

const NearbyItem = ({ nearby }) => {
    const gapi = process.env.NEXT_PUBLIC_API_SENSITIVE;
    const photo_ref = nearby?.photos ? nearby?.photos[0]?.photo_reference : ''
    return (
        <div className='flex gap-5 p-3 border-b-[1px] border-purple-400 items-center mb-4'>
            {photo_ref ?
                <Image src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_ref}&key=${gapi}`} alt='placeholder' width={90} height={90} className="rounded-xl object-fit h-[100px] w-[100px]" />
                :
                <Image src="/logo.png" alt='placeholder' width={90} height={90} className="rounded-xl object-fit h-[100px] w-[100px]" />
            }
            <div className=''>
                <h2 className='text-[20px] font-semibold'>{nearby.name}</h2>
                <h2 className='text-[15px] text-gray-500'>{nearby.vicinity}</h2>
                <div className='flex gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <span>{nearby.rating}</span> {nearby?.opening_hours?.open_now === true ? <span className='text-green-600 font-semibold'>OPEN</span> : <span className='text-red-600 font-semibold'>CLOSE</span>}
                </div>

            </div>
        </div>
    )
}

export default NearbyItem