import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import SubPage from './SubPage'
import ServiceHome from './services/ServiceHome'
import ServicePartExchange from './services/ServicePartExchange'

const ServiceContent = ({ children }) => {
  return (
    <SubPage>
      <Routes>
        <Route exact path='/' element={<ServiceHome />} />
        <Route exact path='/part-exchange' element={<ServicePartExchange />} />
      </Routes>
    </SubPage>
  )
}

export default ServiceContent
