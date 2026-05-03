import FeaturedSection from '../components/FeaturedSection'
import Hero from '../components/Hero'
import QuickBook from '../components/QuickBook'

const Home = () => {
  return (
    <div>
      <div className="flex flex-col" style={{ height: 'calc(100dvh - 64px)' }}>
        <Hero />
        <QuickBook />
      </div>
      <FeaturedSection />
    </div>
  )
}

export default Home
