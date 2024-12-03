import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import AddDriverDocsFrom from '../components/AddDriverDocsFrom'

const CreateDriverDocs = () => {
  return (
    <div className="flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <AddDriverDocsFrom/>
      </div>
    </div>
  )
}

export default CreateDriverDocs