import React from 'react'
import {Routes, Route} from "react-router-dom"
import PlannerHome from './Pages/PlannerHome'
import Guests from './Pages/Guests'
import Wishlist from './Pages/Wishlist'
import SeatingChart from './Pages/SeatingChart'
import Checklist from './Pages/Checklist'
import Roles from './Pages/Roles'
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<PlannerHome/>}/>
      <Route path='guests' element={<Guests/>}/>
      <Route path='wishlist' element={<Wishlist/>}/>
      <Route path='roles' element={<Roles/>}/>
      <Route path='seatingchart' element={<SeatingChart/>}/>
      <Route path='checklist' element={<Checklist/>}/>
    </Routes>
  )
}

export default Routing