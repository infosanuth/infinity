import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import movies from '../assets/assets'

const FeaturedSection = () => {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

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

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }

  return (
    <div className="bg-[#1E1F5B] flex flex-col py-4">

      {/* Header */}
      <div className="px-6 md:px-12 mb-3 flex items-center gap-3">
        <span className="w-1 h-5 bg-[#25F08A] rounded-full inline-block" />
        <h2 className="text-white font-bold text-base tracking-widest uppercase">Now Showing</h2>
      </div>

      {/* Carousel */}
      <div className="relative flex items-center">

        {/* Left arrow */}
        <button
          onClick={() => scroll(-1)}
          disabled={!canScrollLeft}
          className="absolute left-2 md:left-4 z-10 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-[#25F08A] hover:text-[#1E1F5B] transition-colors duration-200 disabled:opacity-30 disabled:cursor-default"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Movie list */}
        <div
          ref={scrollRef}
          className="hide-scrollbar flex gap-3 overflow-x-auto scroll-smooth px-12 md:px-16 py-2 items-center"
          style={{ msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative shrink-0 w-36 sm:w-44 md:w-48 rounded-xl overflow-hidden cursor-pointer group"
              style={{ aspectRatio: '2/3' }}
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                draggable={false}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 px-3 pb-3">
                <p className="text-white font-bold text-xs leading-tight uppercase tracking-wide line-clamp-2">
                  {movie.title}
                </p>
                <p className="text-[#25F08A] text-[10px] font-semibold tracking-widest mt-1 uppercase">
                  In Theaters Now
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll(1)}
          disabled={!canScrollRight}
          className="absolute right-2 md:right-4 z-10 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-[#25F08A] hover:text-[#1E1F5B] transition-colors duration-200 disabled:opacity-30 disabled:cursor-default"
        >
          <ChevronRight size={20} />
        </button>
      </div>

    </div>
  )
}

export default FeaturedSection
