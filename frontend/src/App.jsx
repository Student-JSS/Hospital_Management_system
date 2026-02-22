import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors';
import DoctorDetails from './pages/DoctorDetails';
import Service from './pages/Service';
import ServiceDetail from './pages/ServiceDetailPage';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
         <Route path='/doctors/:id' element={<DoctorDetails/>}/>
         <Route path='/services' element={<Service/>}/>
         <Route path='/services/:id' element={<ServiceDetail/>}/>
         <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
    
  )
}

export default App
