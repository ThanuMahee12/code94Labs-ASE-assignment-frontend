import React, { memo } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <>
        <Header/>
        <Outlet/>
        </>
    )
}

export default memo(MainLayout)
