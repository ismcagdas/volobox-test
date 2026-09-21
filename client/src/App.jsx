import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HotelList from './components/HotelList'
import HotelDetail from './components/HotelDetail'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="site-header__logo">
            Volobox
          </Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<HotelList />} />
        <Route path="/hotels/:id" element={<HotelDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
