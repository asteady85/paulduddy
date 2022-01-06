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
          <Route path='/new/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
