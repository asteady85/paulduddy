import React from 'react'
import {
  Routes,
  Route,
  useParams, Link
} from 'react-router-dom'
import SubPage from './SubPage'
import { pageDetails } from './services/page-details'
import ServiceHome from './services/ServiceHome'
import ServicePartExchange from './services/ServicePartExchange'
import ServiceWearTearGuide from './services/ServiceWearTearGuide'
import ServiceContractHire from './services/ServiceContractHire'
import ServiceLeasing from './services/ServiceLeasing'
import ServiceStraightCashPurchase from './services/ServiceStraightCashPurchase'
import ServiceLeasePurchasing from './services/ServiceLeasePurchasing'
import ServiceContractPurchase from './services/ServiceContractPurchase'

const ServiceContent = () => {
  const params = useParams()

  return (
    <SubPage heroContent={pageDetails(params['*']).heroContent()} heroBackgroundImage={pageDetails(params['*']).backgroundImage}>
      <div className='content'>
        <div className='content--wrapper'>
          <div className='breadcrumbs'>
            <h2><span>Services</span></h2>
            {pageDetails(params['*']).pageTitle()}
          </div>
          <Routes>
            <Route exact path='/' element={<ServiceHome />} />
            <Route exact path='/contract-purchase' element={<ServiceContractPurchase />} />
            <Route exact path='/lease-purchasing' element={<ServiceLeasePurchasing />} />
            <Route exact path='/straight-cash-purchase' element={<ServiceStraightCashPurchase />} />
            <Route exact path='/leasing' element={<ServiceLeasing />} />
            <Route exact path='/contract-hire' element={<ServiceContractHire />} />
            <Route exact path='/part-exchange' element={<ServicePartExchange />} />
            <Route exact path='/wear-and-tear' element={<ServiceWearTearGuide />} />
            <Route path='*' element={<ServiceHome />} /> {/* 404 */}
          </Routes>
        </div>
      </div>
    </SubPage>
  )
}

export default ServiceContent
