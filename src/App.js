import React, { lazy, Suspense } from 'react'
// import Navbar from './Components/Navbar'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import loading from './Spinner/loadingball.gif'

const Routing = lazy(() => import('./Routing/Routing'))



const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Suspense fallback={<div style={{ textAlign: 'center' }}>
          <img src={loading} alt="loading" />
        </div>}>
          <Routing />
        </Suspense>

      </Router>
    </>
  )
}

export default App