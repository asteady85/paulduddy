import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.scss'
import Header from './Header'
import Help from './pages/Help'
import Home from './pages/Home'
import Footer from './Footer'
import ServiceContent from './pages/ServiceContent'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter hashType='noslash'>
        <Header />
        <Routes>
          <Route
            exact path='/new/help'
            element={<Help />}
          />
          <Route path='/new' element={<Home />} />
          <Route path='/new/services/*' element={<ServiceContent />} />

          <Route path='*' element={<Home />} /> {/* 404 */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
