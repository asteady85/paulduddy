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
          <Route path='/about' element={<About />} />
          <Route path='/services/*' element={<ServiceContent />} />

          {/* Redirects from old website */}
          <Route path='/purchasing' element={<Navigate to="/services/contract-hire" />} />
          {/* 404 */}
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
