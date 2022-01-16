import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Header from './Header'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Footer from './Footer'
import ServiceContent from './pages/ServiceContent'
import About from './pages/About'
import './App.scss'
import InitialDisclosure from './pages/InitialDisclosure'
import TreatingCustomersFairly from './pages/TreatingCustomersFairly'
import Complaints from './pages/Complaints'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import BVRLACodeOfConduct from './pages/BVRLACodeOfConduct'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter hashType='noslash'>
        <Header />
        <Routes>
          <Route
            exact path='/help'
            element={<Contact />}
          />
          <Route path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route path='/services/*' element={<ServiceContent />} />
          <Route exact path='/initial-disclosure' element={<InitialDisclosure />} />
          <Route exact path='/treating-customers-fairly' element={<TreatingCustomersFairly />} />
          <Route exact path='/complaint-handling-procedure' element={<Complaints />} />
          <Route exact path='/terms' element={<TermsAndConditions />} />
          <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route exact path='/bvrla-code-of-conduct' element={<BVRLACodeOfConduct />} />

          {/* Redirects from old website */}
          <Route path='/purchasing.html' element={<Navigate to='/services/contract-purchase' />} />
          <Route path='/lease_purchasing.html' element={<Navigate to='/services/lease-purchasing' />} />
          <Route path='/straight_cash_purchase.html' element={<Navigate to='/services/straight-cash-purchase' />} />
          <Route path='/leasing.html' element={<Navigate to='/services/leasing' />} />
          <Route path='/contract_hire.html' element={<Navigate to='/services/contract-hire' />} />
          <Route path='/part_exchange.html' element={<Navigate to='/services/part-exchange  ' />} />
          <Route path='/wear-and-tear.html' element={<Navigate to='/services/wear-and-tear' />} />
          <Route path='/initial-disclosure.html' element={<Navigate to='/initial-disclosure' />} />
          <Route path='/complaint-handling-procedure.html' element={<Navigate to='/complaint-handling-procedure' />} />
          <Route path='/privacy.html' element={<Navigate to='/privacy-policy' />} />
          {/* 404 */}
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
