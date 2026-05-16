// VERSION 2
import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import movies from '../assets/assets'

function MovieCard({ movie }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/movies/${movie.id}`)}
      className="cursor-pointer"
    >
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full rounded-lg"
      />

      <div className="mt-2">
        <h3 className="text-white font-bold">{movie.title}</h3>
        <p className="text-white/50 text-sm">{movie.runtime}</p>
      </div>
    </div>
  )
}

const Movies = () => {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() =>
    movies.filter(m =>
      m.title.toLowerCase().includes(search.toLowerCase())
    ),
    [search]
  )

  return (
    <div className="min-h-screen bg-[#0a0b2e] px-6 py-8">

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-white text-3xl font-bold">
          Now Showing
        </h1>

        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
          />

          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="bg-white/10 text-white pl-10 pr-4 py-2 rounded-lg outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filtered.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

    </div>
  )
}

export default Movies