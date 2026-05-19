import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import movies from '../assets/assets'

function MovieCard({ movie }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/movies/${movie.id}`)}
      className="group cursor-pointer flex flex-col"
    >
      {/* Poster */}
      <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: '2/3' }}>
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Dark vignette at bottom */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={e => { e.stopPropagation(); navigate(`/movies/${movie.id}`) }}
            className="px-6 py-2.5 border-2 border-white text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-200 rounded"
          >
            Book Tickets
          </button>
        </div>
      </div>
d
      {/* Info below poster */}
      <div className="mt-2.5 px-0.5">
        <h3 className="text-white font-bold text-sm uppercase tracking-wide leading-snug line-clamp-1 mb-1">
          {movie.title}
        </h3>
        <span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">
          {movie.runtime}
        </span>
      </div>
    </div>
  )
}

const Movies = () => {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() =>
    movies.filter(m => m.title.toLowerCase().includes(search.toLowerCase())),
    [search]
  )

  return (
    <div className="min-h-screen bg-[#0a0b2e]">

      {/* Page header */}
      <div className="bg-[#12133a] border-b border-white/10 px-6 md:px-10 pt-8 pb-6">
        <h1 className="text-white text-2xl md:text-3xl font-extrabold uppercase tracking-widest mb-1">
          Now Showing
        </h1>
        <p className="text-white/40 text-xs tracking-widest uppercase">
          {filtered.length} movie{filtered.length !== 1 ? 's' : ''} available
        </p>
      </div>

      {/* Search bar */}
      <div className="sticky top-0 z-20 bg-[#0d0e30]/95 backdrop-blur-md border-b border-white/10 px-6 md:px-10 py-3">
        <div className="relative max-w-sm">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/15 text-white text-xs placeholder:text-white/30 pl-8 pr-4 py-2.5 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
          />
        </div>
      </div>

      {/* Movie grid */}
      <div className="px-6 md:px-10 py-8">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <p className="text-white/30 text-lg font-bold uppercase tracking-widest">No Movies Found</p>
            <button
              onClick={() => setSearch('')}
              className="text-red-400 text-xs font-semibold uppercase tracking-widest hover:text-red-300 transition-colors"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-8">
            {filtered.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default Movies
