import React, { memo } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function SearchResult() {
    return (
        <div className='relative border-b-2 border-gray-200 px-3 py-6'>
            <h3 className='text-[#001EB9] font-semibold'>sku</h3>
            <h1 className='text-lg font-bold'>Product-name</h1>
            <p className='text-gray-400 w-[90%] overflow-clip'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat ipsa dolorem odit sed voluptas, saepe perferendis reiciendis eum numquam nostrum consequatur accusantium, illum id distinctio quos ullam. Natus, laudantium ipsam!</p>
            <Link to={`/edit/2323`}  className='absolute top-1/2 right-3 text-[#001EB9]'>
            <FaAngleRight size={28}/>
            </Link>
        </div>
    )
}

export default memo(SearchResult)
