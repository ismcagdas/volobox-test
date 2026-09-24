import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HotelList from './components/HotelList'
import HotelDetail from './components/HotelDetail'
import './App.css'

const NAV_TABS = ['Stays', 'Flights', 'Car rentals', 'Attractions', 'Airport taxis']

function App() {
  return (
    <BrowserRouter>
      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="site-header__logo">
            MotelBox
          </Link>
          <nav className="site-header__actions">
            <button type="button" className="site-header__ghost">
              USD
            </button>
            <button type="button" className="site-header__ghost">
              List your property
            </button>
            <button type="button" className="site-header__btn">
              Register
            </button>
            <button type="button" className="site-header__btn">
              Sign in
            </button>
          </nav>
        </div>
        <div className="site-nav">
          <div className="site-nav__inner">
            {NAV_TABS.map((tab, index) => (
              <button
                key={tab}
                type="button"
                className={'site-nav__tab' + (index === 0 ? ' site-nav__tab--active' : '')}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </header>
      <main className="site-main">
        <Routes>
          <Route path="/" element={<HotelList />} />
          <Route path="/hotels/:id" element={<HotelDetail />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <p>MotelBox — find your next stay.</p>
        </div>
      </footer>
    </BrowserRouter>
  )
}

export default App
