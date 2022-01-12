import React from 'react'
import {
  Routes,
  Route,
  useParams
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
import Breadcrumbs from '../modules/breadcrumbs'
import ServicesNav from './services/nav'

const ServiceContent = () => {
  const params = useParams()
  const nav = () => (<ServicesNav />)

  return (
    <SubPage heroContent={pageDetails(params['*']).heroContent()} heroBackgroundImage={pageDetails(params['*']).backgroundImage} NavContent={nav}>
      <div className='content'>
        <div className='content--wrapper'>
          <Breadcrumbs title='Services' subTitle={pageDetails(params['*']).pageTitle} />
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
