import { Play, Ticket } from 'lucide-react'

const Hero = () => {
  return (
    <section
      className="relative w-full flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/backgroundimage.jpg')", height: 'calc(100vh - 64px)' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-2xl px-8 md:px-16">
        <h1 className="text-4xl md:text-6xl font-black text-[#25F08A] leading-tight mb-4">
            MOON KNIGHT
        </h1>

        <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
          From the shadows rises Marvel Moon Knight, a warrior of vengeance and mystery. Reserve your seats now and witness an epic night of action, destiny, and unforgettable power.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://youtu.be/x7Krla_UxRg?si=wT0JcYc-t_VX3_ly"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#25F08A] text-[#1E1F5B] font-bold text-sm hover:bg-[#25F08A]/80 transition-colors duration-200"
          >
            <Play size={18} fill="currentColor" />
            Watch Trailer
          </a>

          <a
            href="/movies"
            className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white text-white font-bold text-sm hover:bg-white hover:text-[#1E1F5B] transition-colors duration-200"
          >
            <Ticket size={18} />
            Buy Tickets
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
