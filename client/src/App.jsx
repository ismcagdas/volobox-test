import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import HotelList from './components/HotelList'
import HotelDetail from './components/HotelDetail'
import RestaurantList from './components/RestaurantList'
import './App.css'

const NAV_TABS = ['Flights', 'Car rentals', 'Attractions', 'Airport taxis']

const tabClass = ({ isActive }) => 'site-nav__tab' + (isActive ? ' site-nav__tab--active' : '')

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
        <div className="site-nav">
          <div className="site-nav__inner">
            <NavLink to="/" end className={tabClass}>
              Stays
            </NavLink>
            <NavLink to="/restaurants" className={tabClass}>
              Restaurants
            </NavLink>
            {NAV_TABS.map((tab) => (
              <button key={tab} type="button" className="site-nav__tab">
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
          <Route path="/restaurants" element={<RestaurantList />} />
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
