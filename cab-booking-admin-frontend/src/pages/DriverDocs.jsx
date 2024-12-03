import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import DriverDocsList from '../components/DriverDocsList'

const DriverDocs = () => {
  return (
    <div className="flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <DriverDocsList/>
      </div>
    </div>
  )
}

export default DriverDocs