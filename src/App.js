import React,{useEffect} from 'react'
import AllRoute from './allRoutes/AllRoute'
import Header from './component/shared/Header'
import {useDispatch} from 'react-redux'
import {getAll} from './redux/MessageSlice'

const App = () => {
  let Dispatch = useDispatch()

  useEffect(()=>{
    Dispatch(getAll())
  },[])

   return (
  <>
    <AllRoute/>
  </>
  )
}

export default App