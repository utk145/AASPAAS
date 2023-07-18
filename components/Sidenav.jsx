import Image from 'next/image'
import Link from 'next/link'

const Sidenav = () => {
    const menu = [
        {
            id: 1,
            name: 'Search',
            logo: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        },
        // {
        //     id: 2,
        //     name: 'Fav',
        //     logo: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        // }
    ]


    return (
        <div className='p-2 items-center flex-col flex w-[100px] space-y-8 h-screen shadow-md shadow-purple-600 sticky top-0 bg-white  z-20'>
            <Image src="/logo.png" alt="logo" width={50} height={50} />
            {menu.map((item, index) => (
                <svg xmlns="http://www.w3.org/2000/svg" key={index} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 cursor-pointer hover:text-purple-500 hover:bg-purple-300 p-2 rounded-xl">
                    <path stroke-linecap="round" stroke-linejoin="round" d={item.logo} />
                </svg>

            ))}
        </div>
    )
}

export default Sidenav
