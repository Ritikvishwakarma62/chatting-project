import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../component/feature/Home'
import User1 from '../component/feature/User1'
import User2 from '../component/feature/User2'

const AllRoute = () => {
  return (
    <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='user1' element={<User1/>}/>
        <Route path='user2' element={<User2 />}/>
    </Routes>
  )
}

export default AllRoute