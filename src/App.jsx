import { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Header from './components/header/Header'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/header' element={<Header/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
