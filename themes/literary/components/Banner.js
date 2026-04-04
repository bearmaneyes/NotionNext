import CONFIG from '../config'

const Banner = () => {
  return (
    <div className="relative w-full h-[25vh] min-h-[200px] max-h-[280px] flex items-center justify-center">
      <img
        src={CONFIG.BANNER_IMAGE}
        alt="Blog Banner"
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl md:text-4xl font-normal tracking-widest mb-3 drop-shadow-lg">
          {CONFIG.TITLE}
        </h1>
        <p className="italic text-sm md:text-base text-gray-200 drop-shadow-md font-light">
          {CONFIG.SUBTITLE}
        </p>
      </div>
    </div>
  )
}
export default Banner
