import React, { lazy, Suspense } from 'react'
// import Navbar from './Components/Navbar'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Spinner from './Spinner/Spinner'

const LazyComp = lazy(() => import('./Routing/Routing'))



const App = () => {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Suspense fallback={<Spinner />}>
          <LazyComp />
        </Suspense>

      </Router>
    </>
  )
}

export default App