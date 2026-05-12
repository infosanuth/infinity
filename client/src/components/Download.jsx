import appstore from '../assets/appstore.png'
import googleplay from '../assets/googleplay.png'

const Download = () => {
  return (
    <div className="bg-[#0a0b2e] py-12 flex flex-col items-center gap-6">
      <p className="text-white text-sm md:text-base font-semibold tracking-wide">
        Find us on App Store and Google Play Store
      </p>
      <div className="flex items-center gap-4">
        <a href="#" className="block">
          <img src={appstore} alt="Download on the App Store" className="h-12 md:h-14 w-auto" />
        </a>
        <a href="#" className="block">
          <img src={googleplay} alt="Get it on Google Play" className="h-12 md:h-14 w-auto" />
        </a>
      </div>
    </div>
  )
}

export default Download
