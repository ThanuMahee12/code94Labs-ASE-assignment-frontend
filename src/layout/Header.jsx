import React, { memo } from 'react'
import SubHeader from './SubHeader'

function Header() {
    return (
        <header className='w-full items-center py-4 px-8'>
            <nav className='flex justify-end items-center w-full '>
            <div className='w-1/5 flex items-center justify-end gap-x-10'>
<select>
    <option>ADMIN </option>
</select>
<img className='rounded-full w-8 h-8 object-cover'/>
            </div>
            </nav>
            <SubHeader/>
        </header>
    )
}

export default memo(Header)
