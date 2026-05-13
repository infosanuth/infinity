const links = [
  { label: 'Home',       href: '/' },
  { label: 'Movies',     href: '/movies' },
  { label: 'Theaters',   href: '/theaters' },
  { label: 'Releases',   href: '/releases' },
  { label: 'About Us',   href: '/about' },
  { label: 'Contact Us', href: '/contact' },
]

const Footer = () => {
  return (
    <footer className="bg-[#0a0b2e] border-t border-white/10 pt-8 pb-6 px-6">

      {/* Nav links */}
      <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-white/80 hover:text-red-500 text-sm font-semibold uppercase tracking-widest transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Divider */}
      <div className="border-t border-white/10 mb-5" />

      {/* Bottom bar */}
      <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-white/40 text-xs">
        <span>©2026 Infinity. All Rights Reserved.</span>
        <span className="hidden sm:inline text-white/20">|</span>
        <a href="#" className="hover:text-white/70 transition-colors duration-200">Disclaimer</a>
        <a href="#" className="hover:text-white/70 transition-colors duration-200">Privacy Policy</a>
        <a href="#" className="hover:text-white/70 transition-colors duration-200">Terms & Conditions</a>
      </div>

    </footer>
  )
}

export default Footer
