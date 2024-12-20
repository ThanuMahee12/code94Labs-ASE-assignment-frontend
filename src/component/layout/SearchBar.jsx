import React, { memo, useState } from 'react'
import Button from '../core/Button'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
function SearchBar({className}) {
    const [searchvalue,setsearchValue]=useState('')
    const navigate=useNavigate()
    const onChange=e=>setsearchValue(e.target.value)
const onclick=()=>{
    navigate(`/search`)
}
    return (
        <div className={`flex rounded-full bg-gray-100 border border-gray-400 p-2 items-center ${className}`}>
<input onChange={onChange} value={searchvalue} placeholder='search for products' className='w-4/5 bg-transparent outline-none border-none block px-2 placeholder:font-semibold ms-7'></input>
<Button onClick={onclick} disabled={searchvalue==''} className='flex items-center gap-x-4' rounded='full'>Search <FaSearch/> </Button>
        </div>
    )
}

export default memo(SearchBar)
