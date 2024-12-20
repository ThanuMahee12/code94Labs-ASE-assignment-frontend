import React, { memo } from 'react'
import Button from '../core/Button'
import {FaSearch} from 'react-icons/fa'
function SearchBar({className}) {
    return (
        <div className={`inline-flex  ${className}`}>
<input className='w-4/5'></input>
<Button>Search <FaSearch/> </Button>
        </div>
    )
}

export default memo(SearchBar)
