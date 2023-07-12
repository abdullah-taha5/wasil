import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'

function DashboardLayout({children}) {
  return (
    <div id="admin-page">
    <Sidebar />
    {children}
  </div>
  )
}

export default DashboardLayout