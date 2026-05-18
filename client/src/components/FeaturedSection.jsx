import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import movies from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const TABS = ['Now Showing', 'Coming Soon', 'Infinity Exclusives']

const ScrollArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute ${direction === 'left' ? 'left-2' : 'right-2'} top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200`}
  >
    {direction === 'left' ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
  </button>
)

const MovieCard = ({ movie, onSeeMore }) => (
  <div
    className="relative shrink-0 w-60 md:w-72 lg:w-80 overflow-hidden group"
    style={{ aspectRatio: '2/3' }}
  >
    <img
      src={movie.poster}
      alt={movie.title}
      className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm group-hover:scale-105"
      draggable={false}
    />

    <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/10 to-transparent" />

    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
      <p
        onClick={() => onSeeMore(movie.id)}
        className="text-white font-bold text-sm tracking-widest uppercase cursor-pointer hover:text-[#25F08A] transition-colors duration-200"
      >
        See More
      </p>
      <button className="px-8 py-2.5 border-2 border-white text-white text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-200">
        Buy Tickets
      </button>
    </div>

    <div className="absolute bottom-0 left-0 right-0 px-4 pb-5 transition-opacity duration-300 group-hover:opacity-0">
      <p className="text-white font-bold text-xs md:text-sm leading-snug uppercase tracking-wide line-clamp-2">
        {movie.title}
      </p>
      <p className="text-[#25F08A] text-[10px] font-semibold tracking-widest mt-1.5 uppercase">
        In Theaters Now
      </p>
    </div>
  </div>
)

const FeaturedSection = () => {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeTab, setActiveTab] = useState(0)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 })

  const navigate = useNavigate()

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll)
    window.addEventListener('resize', checkScroll)
    return () => {
      el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setDropdownOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 280, behavior: 'smooth' })
  }

  const onMouseDown = (e) => {
    const el = scrollRef.current
    drag.current = { active: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft }
    el.style.cursor = 'grabbing'
  }

  const onMouseMove = (e) => {
    if (!drag.current.active) return
    e.preventDefault()
    const el = scrollRef.current
    el.scrollLeft = drag.current.scrollLeft - (e.pageX - el.offsetLeft - drag.current.startX)
  }

  const onMouseUp = () => {
    drag.current.active = false
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab'
  }

  return (
    <div className="bg-[#12133a] flex flex-col">

      {/* Tab header */}
      <div className="flex items-center justify-between px-6 md:px-10 pt-5 pb-0 border-b border-white/10">

        {/* Mobile: dropdown */}
        <div className="relative md:hidden" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(o => !o)}
            className="flex items-center gap-2 pb-3 text-sm font-bold tracking-widest uppercase text-white border-b-2 border-red-500 -mb-px"
          >
            {TABS[activeTab]}
            <ChevronDown size={16} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {dropdownOpen && (
            <div className="absolute left-0 top-full mt-1 w-52 bg-[#1a1b4b] border border-white/10 rounded-xl shadow-xl z-20 overflow-hidden">
              {TABS.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(i); setDropdownOpen(false) }}
                  className={`w-full text-left px-5 py-3 text-sm font-semibold uppercase tracking-wide transition-colors duration-150 ${i === activeTab ? 'text-white bg-white/10' : 'text-white/50 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop: inline tabs */}
        <div className="hidden md:flex items-end gap-8">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`pb-3 text-sm font-bold tracking-widest uppercase transition-colors duration-200 border-b-2 -mb-px ${i === activeTab
                  ? 'text-white border-red-500'
                  : 'text-white/35 border-transparent hover:text-white/60'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <button
          onClickCapture={() => navigate('/movies')}
          className="flex items-center gap-1 text-[#25F08A] hover:text-[#25F08A] text-xs md:text-sm font-semibold transition-colors duration-200 pb-3 cursor-auto"
        >
          View All <ChevronRight size={16} />
        </button>
      </div>

      {/* Carousel */}
      <div className="relative">
        {canScrollLeft && <ScrollArrow direction="left" onClick={() => scroll(-1)} />}

        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          className="hide-scrollbar flex overflow-x-auto select-none"
          style={{ cursor: 'grab', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onSeeMore={(id) => navigate(`/movies/${id}`)} />
          ))}
        </div>

        {canScrollRight && <ScrollArrow direction="right" onClick={() => scroll(1)} />}
      </div>

    </div>
  )
}

export default FeaturedSection
