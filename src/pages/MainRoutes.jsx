import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Blogs from './Blogs'

const MainRoutes = () => {
  return (
    <Routes>

        <Route path='/' element={<Homepage/>} ></Route>
        <Route path='/blogs' element={<Blogs/>} ></Route>
      
    </Routes>
  )
}

export default MainRoutes
