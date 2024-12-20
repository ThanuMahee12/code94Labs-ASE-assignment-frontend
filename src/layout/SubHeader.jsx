import React, { memo } from 'react'
import SearchBar from '../component/layout/SearchBar'
import Button from '../component/core/Button'
import { FaStar } from 'react-icons/fa'

function SubHeader() {
    return (
        <>
        <div>
        <h1 className='text-3xl font-semibold'>PRODUCTS</h1>
       </div>
       <div className='flex items-center justify-between w-full'>
<SearchBar/> 
<div className='flex gap-x-8'>
<Button to='/new'>New Product</Button>
<Button to='/favourite' varient='outline'><FaStar size={22}/></Button>
</div>
       </div>
       </>
    )
}

export default memo(SubHeader)
