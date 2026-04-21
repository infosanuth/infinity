import React, { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Search, User, Menu, X } from 'lucide-react'

const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width="160" height="40" role="img" aria-label="INFINITY">
    <rect width="320" height="80" rx="12" ry="12" fill="#1E1F5B" />
    <text x="160" y="55"
      textAnchor="middle"
      fontFamily="Arial Black, Helvetica, Impact, sans-serif"
      fontWeight="900"
      fontSize="44"
      letterSpacing="2"
      fill="#25F08A">INFINITY</text>
  </svg>
)

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Movies', to: '/movies' },
  { label: 'Theaters', to: '/theaters' },
  { label: 'Releases', to: '/releases' },
]

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="w-full bg-[#1E1F5B] pl-2 pr-6 py-3 relative">
      <div className="flex items-center justify-between">

        {/* Column 1 — Logo */}
        <div className="flex-1 flex items-center">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {/* Column 2 — Nav links (desktop only) */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide transition-colors duration-200 ${
                    isActive ? 'text-[#25F08A]' : 'text-white hover:text-[#25F08A]'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Column 3 — Icons */}
        <div className="flex-1 flex items-center justify-end gap-4">

          {/* Search */}
          <div className="flex items-center gap-2">
            {searchOpen && (
              <input
                autoFocus
                type="text"
                placeholder="Search..."
                className="bg-white/10 text-white placeholder-white/50 text-sm rounded-full px-4 py-1.5 outline-none border border-white/20 focus:border-[#25F08A] w-36 md:w-48 transition-all duration-200"
                onKeyDown={e => e.key === 'Escape' && setSearchOpen(false)}
              />
            )}
            <button
              onClick={() => setSearchOpen(o => !o)}
              className={`transition-colors duration-200 ${searchOpen ? 'text-[#25F08A]' : 'text-white hover:text-[#25F08A]'}`}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          </div>

          {/* Login */}
          <Link
            to="/login"
            className="text-white hover:text-[#25F08A] transition-colors duration-200"
            aria-label="Login"
          >
            <User size={20} />
          </Link>

          {/* mobile only */}
          <div className="relative md:hidden mt-1.5" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(o => !o)}
              className={`transition-colors duration-200 ${menuOpen ? 'text-[#25F08A]' : 'text-white hover:text-[#25F08A]'}`}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {menuOpen && (
              <ul className="absolute right-0 top-2 w-44 bg-[#1E1F5B] border border-white/10 rounded-xl shadow-lg overflow-hidden list-none m-0 p-0 z-50">
                {navLinks.map(({ label, to }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={to === '/'}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-5 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                          isActive ? 'text-[#25F08A] bg-white/5' : 'text-white hover:text-[#25F08A] hover:bg-white/5'
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
