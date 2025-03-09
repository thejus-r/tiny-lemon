import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from "./components/pages/HomePage.jsx"
import BookingPage from './components/pages/BookingPage.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/booking' element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
