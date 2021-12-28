import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import Help from './Help'

const App = () => {
  return (
    <div className='App'>
      <p>HEADER</p>
      <div style={{ minHeight: '100vh' }}>
        <BrowserRouter hashType='noslash' style={{ minHeight: '100vh' }}>
          <Routes>
            <Route
              exact path='/help'
              element={<Help />}
            />
          </Routes>
        </BrowserRouter>
      </div>
      <p>FOOTER</p>
    </div>
  )
}

export default App
