import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ChevronLeft, Clock, Calendar } from 'lucide-react'
import movies from '../assets/assets'

const SHOW_TIMES = ['10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM', '10:00 PM']

const generateDates = () => {
  const today = new Date()
  return Array.from({ length: 5 }, (_, i) => {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    return {
      label: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
      value: d.toISOString().split('T')[0],
    }
  })
}

const SHOW_DATES = generateDates()

const getEmbedUrl = (trailerUrl) => {
  const match = trailerUrl?.match(/[?&]v=([^&]+)/)
  return match ? `https://www.youtube.com/embed/${match[1]}` : null
}

const MovieDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const movie = movies.find(m => m.id === Number(id))
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  if (!movie) {
    return (
      <div className="min-h-screen bg-[#0a0b2e] flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/40 text-lg font-bold uppercase tracking-widest mb-4">Movie not found</p>
          <button
            onClick={() => navigate('/movies')}
            className="text-[#25F08A] text-sm font-semibold uppercase tracking-widest hover:text-[#25F08A]/70 transition-colors"
          >
            Back to Movies
          </button>
        </div>
      </div>
    )
  }

  const embedUrl = getEmbedUrl(movie.trailer)
  const canBook = selectedDate && selectedTime

  const handleBook = () => {
    if (!canBook) return
    navigate(`/movies/${movie.id}/${selectedDate}`, { state: { time: selectedTime } })
  }

  return (
    <div className="min-h-screen bg-[#0a0b2e]">

      {/* Hero */}
      <div className="relative overflow-hidden">

        {/* Blurred poster background */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${movie.poster})`, filter: 'blur(22px) brightness(0.2)' }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0a0b2e]/30 via-transparent to-[#0a0b2e]" />

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 pt-8 pb-14">

          <button
            onClick={() => navigate('/movies')}
            className="flex items-center gap-1.5 text-white/40 hover:text-white text-xs font-semibold uppercase tracking-widest transition-colors duration-200 mb-8"
          >
            <ChevronLeft size={15} />
            All Movies
          </button>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">

            {/* Poster */}
            <div className="shrink-0 w-44 md:w-60 rounded-xl overflow-hidden shadow-2xl shadow-black/70 ring-1 ring-white/10">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-full object-cover"
                style={{ aspectRatio: '2/3' }}
              />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-5 pt-1">

              {/* Title + meta */}
              <div>
                <h1 className="text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest leading-tight mb-3">
                  {movie.title}
                </h1>
                <div className="flex items-center gap-2 text-white/40 text-xs font-semibold uppercase tracking-widest">
                  <Clock size={13} />
                  {movie.runtime}
                </div>
              </div>

              <span className="inline-flex w-fit items-center px-3 py-1 rounded-full bg-[#25F08A]/10 border border-[#25F08A]/25 text-[#25F08A] text-[10px] font-bold uppercase tracking-widest">
                In Theaters Now
              </span>

              {/* Date picker */}
              <div>
                <p className="flex items-center gap-1.5 text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2.5">
                  <Calendar size={12} />
                  Select Date
                </p>
                <div className="flex flex-wrap gap-2">
                  {SHOW_DATES.map(d => (
                    <button
                      key={d.value}
                      onClick={() => setSelectedDate(d.value)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide border transition-colors duration-150 ${
                        selectedDate === d.value
                          ? 'bg-[#25F08A] border-[#25F08A] text-[#1E1F5B]'
                          : 'bg-white/5 border-white/15 text-white/55 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time picker */}
              <div>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2.5"> Select Showtime</p>
                <div className="flex flex-wrap gap-2">
                  {SHOW_TIMES.map(t => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide border transition-colors duration-150 ${
                        selectedTime === t
                          ? 'bg-red-500 border-red-500 text-white'
                          : 'bg-white/5 border-white/15 text-white/55 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Booking */}
              <button onClick={handleBook} disabled={!canBook}
                className={`mt-1 w-fit px-8 py-2.5 text-sm font-bold uppercase tracking-widest rounded-lg transition-all duration-200 ${
                  canBook
                    ? 'bg-[#25F08A] text-[#1E1F5B] hover:bg-[#25F08A]/80'
                    : 'bg-white/8 text-white/25 cursor-not-allowed'
                }`}
              >
                Book Tickets
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
