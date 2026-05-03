import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import movies from '../assets/assets'

const FeaturedSection = () => {

  const scrollRef = useRef(null)

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <div className="bg-[#1E1F5B] flex flex-col py-4">

      <div className="px-6 md:px-12 mb-3 flex items-center gap-3">
        <span className="w-1 h-5 bg-[#25F08A] rounded-full inline-block" />
        <h2 className="text-white font-bold text-base tracking-widest uppercase">
          Now Showing
        </h2>
      </div>

      <div className="flex gap-3 overflow-x-auto px-12 py-2">
        {movies.map((movie) => (
          <div key={movie.id} className="w-40 shrink-0">
            <img src={movie.poster} alt={movie.title} />
            <p className="text-white text-xs">{movie.title}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default FeaturedSection