import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import HotelList from './components/HotelList'
import HotelDetail from './components/HotelDetail'
import FlightsPage from './components/FlightsPage'
import './App.css'

const NAV_TABS = [
  { label: 'Stays', path: '/' },
  { label: 'Flights', path: '/flights' },
  { label: 'Car rentals' },
  { label: 'Attractions' },
  { label: 'Airport taxis' },
]

function SiteNav() {
  const { pathname } = useLocation()
  const activePath = pathname.startsWith('/flights') ? '/flights' : '/'

  return (
    <div className="site-nav">
      <div className="site-nav__inner">
        {NAV_TABS.map(({ label, path }) => {
          const className = 'site-nav__tab' + (path === activePath ? ' site-nav__tab--active' : '')
          return path ? (
            <Link key={label} to={path} className={className}>
              {label}
            </Link>
          ) : (
            <button key={label} type="button" className={className}>
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="site-header__logo">
            HotelBox
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
        <SiteNav />
      </header>
      <main className="site-main">
        <Routes>
          <Route path="/" element={<HotelList />} />
          <Route path="/hotels/:id" element={<HotelDetail />} />
          <Route path="/flights" element={<FlightsPage />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <p>HotelBox — find your next stay.</p>
        </div>
      </footer>
    </BrowserRouter>
  )
}

export default App
