import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Blogs from './Blogs'
import SingleBlogsPage from './SingleBlogsPage'

const MainRoutes = () => {
  return (
    <Routes>

        <Route path='/' element={<Homepage/>} ></Route>
        <Route path='/blogs' element={<Blogs/>} ></Route>
        <Route path='/blogs/singleblog' element={<SingleBlogsPage/>} ></Route>
      
    </Routes>
  )
}

export default MainRoutes
