import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { NavBar } from './NavBar'
import { UserProvider } from './context/UserProvider'

export const MainApp = () => {
    return (
        
        <UserProvider>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </UserProvider>
    )
}
