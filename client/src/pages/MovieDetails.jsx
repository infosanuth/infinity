import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ChevronLeft, Clock, Calendar, Play, Ticket } from 'lucide-react'
import movies from '../assets/assets'

const SHOW_TIMES = ['10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM', '10:00 PM']

const generateDates = () => {
  const today = new Date()
  return Array.from({ length: 5 }, (_, i) => {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    return {
      day:   i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : d.toLocaleDateString('en-US', { weekday: 'short' }),
      date:  d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      value: d.toISOString().split('T')[0],
    }
  })
}

const SHOW_DATES = generateDates()

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
          style={{ backgroundImage: `url(${movie.poster})`, filter: 'blur(24px) brightness(0.18)' }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0a0b2e]/40 via-transparent to-[#0a0b2e]" />

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 pt-8 pb-16">

          <button
            onClick={() => navigate('/movies')}
            className="flex items-center gap-1.5 text-white/40 hover:text-white text-xs font-semibold uppercase tracking-widest transition-colors duration-200 mb-8"
          >
            <ChevronLeft size={15} />
            All Movies
          </button>

          {/* Title — above poster */}
          <h1 className="text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest leading-tight mb-8">
            {movie.title}
          </h1>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">

            {/* Poster — click to watch trailer */}
            <div className="shrink-0 w-40 md:w-52 flex flex-col">
              <a
                href={movie.trailer}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-xl overflow-hidden shadow-2xl shadow-black/70 ring-1 ring-white/10"
                style={{ aspectRatio: '2/3' }}
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-200" />
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/55 border border-white/15 backdrop-blur-sm group-hover:bg-[#25F08A]/15 group-hover:border-[#25F08A]/40 transition-all duration-200 whitespace-nowrap">
                  <Play size={11} fill="currentColor" className="text-white group-hover:text-[#25F08A] transition-colors duration-200" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white group-hover:text-[#25F08A] transition-colors duration-200">
                    Watch Trailer
                  </span>
                </div>
              </a>
              <span className="mt-auto pt-3 inline-flex w-full justify-center items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25F08A]/10 border border-[#25F08A]/25 text-[#25F08A] text-[10px] font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25F08A] animate-pulse" />
                In Theaters Now
              </span>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-5 pt-1 flex-1">

              {/* Description */}
              {movie.description && (
                <p className="text-white/55 text-sm leading-relaxed max-w-md">
                  {movie.description}
                </p>
              )}

              {/* Runtime */}
              <div className="flex items-center gap-2 text-white/40 text-xs font-semibold uppercase tracking-widest">
                <Clock size={13} />
                {movie.runtime}
              </div>

              <div className="h-px bg-white/8 max-w-md" />

              {/* Date picker */}
              <div>
                <p className="flex items-center gap-1.5 text-white/40 text-[10px] font-bold uppercase tracking-widest mb-3">
                  <Calendar size={12} />
                  Select Date
                </p>
                <div className="flex flex-wrap gap-2">
                  {SHOW_DATES.map(d => (
                    <button
                      key={d.value}
                      onClick={() => setSelectedDate(d.value)}
                      className={`flex flex-col items-center px-3.5 py-2 rounded-lg border transition-all duration-150 ${
                        selectedDate === d.value
                          ? 'bg-[#25F08A] border-[#25F08A] text-[#1E1F5B]'
                          : 'bg-white/5 border-white/15 text-white/55 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      <span className="text-[9px] font-bold uppercase tracking-widest leading-none mb-1">{d.day}</span>
                      <span className="text-[11px] font-semibold">{d.date}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time picker */}
              <div>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-3">
                  Select Showtime
                </p>
                <div className="flex flex-wrap gap-2">
                  {SHOW_TIMES.map(t => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide border transition-all duration-150 ${
                        selectedTime === t
                          ? 'bg-[#25F08A] border-[#25F08A] text-[#1E1F5B]'
                          : 'bg-white/5 border-white/15 text-white/55 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Book button */}
              <button
                onClick={handleBook}
                disabled={!canBook}
                className={`mt-auto flex items-center gap-2 w-fit px-8 py-2.5 text-sm font-bold uppercase tracking-widest rounded-lg transition-all duration-200 ${
                  canBook
                    ? 'bg-[#25F08A] text-[#1E1F5B] hover:bg-[#25F08A]/80'
                    : 'bg-white/8 text-white/25 cursor-not-allowed'
                }`}
              >
                <Ticket size={15} />
                {canBook ? 'Book Tickets' : 'Select Date & Time'}
              </button>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MovieDetails
