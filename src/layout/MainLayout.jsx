import React, { memo } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <div className='px-14 mx-auto'>
        <Header/>
        <Outlet/>
        </div >
    )
}

export default memo(MainLayout)
