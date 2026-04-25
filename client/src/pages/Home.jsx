import Hero from '../components/Hero'
import QuickBook from '../components/QuickBook'

const Home = () => {
  return (
    <div className="flex flex-col overflow-hidden" style={{ height: 'calc(100dvh - 64px)' }}>
      <Hero />
      <QuickBook />
    </div>
  )
}

export default Home
