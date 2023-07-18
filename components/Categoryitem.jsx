import Image from 'next/image'
import React from 'react'

const Categoryitem = ({ category }) => {
    return (
        <div className='flex flex-col items-center bg-purple-100  p-3 rounded-2xl hover:scale-105 transition-all w-[90px] duration-100   cursor-pointer'>
            <Image src={category.icon} width={40} height={40} alt={category.name} />
            <h2 className='text-[13px] text-purple-700 line-clamp-1'>{category.name}</h2>
        </div>
    )
}

export default Categoryitem