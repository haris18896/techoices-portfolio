import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Portfolio = React.lazy(() => import('./pages/portfolio/Portfolio'))

function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Portfolio />} />
        </Routes>
      </Router>
    </>
  )
}

export default AppRoutes
