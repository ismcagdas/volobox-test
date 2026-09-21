import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HotelList from './components/HotelList'
import HotelDetail from './components/HotelDetail'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HotelList />} />
        <Route path="/hotels/:id" element={<HotelDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
