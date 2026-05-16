import { useNavigate } from 'react-router-dom'
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
  return (
    <div className="min-h-screen bg-[#0a0b2e] px-6 py-8">
      <h1 className="text-white text-3xl font-bold mb-8">
        Now Showing
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Movies