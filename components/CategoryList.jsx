import List from '@/Shared/List';
import React, { useEffect, useState } from 'react'
import Categoryitem from './Categoryitem';

const CategoryList = ({setSelectedCategory}) => {
    const [category, setCategory] = useState();
    const [selectedCategory,setSelectedCategory_]=useState();
    useEffect(() => {
        setCategory(List.CategoryListData)
    }, [])
    return (
        <div>
            <h2 className='text-[20px]  mt-3 mb-3 font-bold'>Choose your category</h2>
            {category&& <div className='flex gap-6 mb-5'>
                {category?.map((item,index) => (
                    <div key={index} onClick={()=>{setSelectedCategory(item.value);setSelectedCategory_(item)}}><Categoryitem category={item}/></div>
                ))}
            </div>}
        </div>
    )
}

export default CategoryList