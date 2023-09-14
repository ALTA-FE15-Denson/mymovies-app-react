import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboard/>} path='/dashboard'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App