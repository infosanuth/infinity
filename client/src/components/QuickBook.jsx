import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FIELDS = [
  { key: 'movie',   placeholder: 'Select Movie',   options: ['Moon Knight', 'Avengers', 'Doctor Strange'] },
  { key: 'date',    placeholder: 'Select Date',    options: ['Today', 'Tomorrow', 'This Weekend'] },
  { key: 'theater', placeholder: 'Select Theater', options: ['Theater 1', 'Theater 2', 'Theater 3'] },
  { key: 'timing',  placeholder: 'Select Timing',  options: ['10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM', '10:00 PM'] },
]

const Select = ({ placeholder, options, value, onChange, className = 'flex-1 min-w-35' }) => (
  <div className={`relative ${className}`}>
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full appearance-none bg-white/10 border border-white/20 rounded-lg px-4 py-1.5 text-sm text-white focus:outline-none focus:border-[#25F08A] cursor-pointer pr-8 transition-colors duration-200"
    >
      <option value="" className="bg-[#1E1F5B] text-white">{placeholder}</option>
      {options.map(o => (
        <option key={o} value={o} className="bg-[#1E1F5B] text-white">{o}</option>
      ))}
    </select>
    <ChevronDown size={15} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" />
  </div>
)

const BookButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-[#25F08A] hover:bg-[#25F08A]/80 text-[#1E1F5B] font-bold text-sm px-6 py-1.5 rounded-lg transition-colors duration-200 whitespace-nowrap"
  >
    Book
  </button>
)

const QuickBook = () => {
  const [form, setForm] = useState({ movie: '', date: '', theater: '', timing: '' })

  const handleChange = (key) => (value) => setForm(prev => ({ ...prev, [key]: value }))

  const handleBook = () => {
    if (Object.values(form).some(v => !v)) return
    // booking logic
  }

  return (
    <div className="w-full bg-[#1E1F5B] border-t border-white/10 py-2.5 px-6 md:px-12">

      {/* Mobile layout */}
      <div className="flex flex-col gap-2 md:hidden">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-[#25F08A] whitespace-nowrap tracking-wide">Quick Book</span>
          <BookButton onClick={handleBook} />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {FIELDS.map(({ key, placeholder, options }) => (
            <Select key={key} placeholder={placeholder} options={options} value={form[key]} onChange={handleChange(key)} className="w-full" />
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex flex-wrap items-center gap-3">
        <span className="text-sm font-bold text-[#25F08A] whitespace-nowrap tracking-wide">Quick Book</span>
        {FIELDS.map(({ key, placeholder, options }) => (
          <Select key={key} placeholder={placeholder} options={options} value={form[key]} onChange={handleChange(key)} />
        ))}
        <BookButton onClick={handleBook} />
      </div>

    </div>
  )
}

export default QuickBook
