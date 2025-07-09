import React from 'react'
import AdminSideBar from '../../components/admin/AdminSideBar'
import AdminNavBar from '../../components/admin/AdminNavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
            <AdminNavBar/>
        <div className='flex'>
            <AdminSideBar/>
            
        <div className='flex-1  px-4 py-10 md:px-10 h-[calc(100vh-64px)] overflow-y-auto'>
            <Outlet/>
        </div>
        </div>
    </>
  )
}

export default Layout