import  hero_png  from '../assets/hero.png'

const Hero = () => {
  return (
    <>
      <div className="max-w-screen-2xl contianer mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-2">
            <h1 className="text-sm md:text-3xl font-bold decoration-1">Your Next Great Read Awaits— <span className="text-red-500">Explore Stories,Knowledge and Inspiration</span></h1>
            <p className="text-xs md:text-xl text-black font-serif">Discover, explore, and buy books that inspire, educate, and entertain all in one place</p>
          </div>
          <div className="mt-4 md:space-x-2 space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-3/4 px-2 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
             <button className="md:px-4 md:py-2 px-2 py-2 bg-red-500 text-white rounded-md text-xs md:text-base hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img src={hero_png} alt="hero-png" className='md:ml-32 md:mt-12 md:w-92 h-92'/>
        </div>
      </div>
    </>
  )
}

export default Hero
