import { RiGithubFill } from "@remixicon/react"
import image from '../assets/image.png'

const Hero = () => {
  return (
    <div id='home' className="min-h-[90vh] scroll-mt-20 flex flex-col lg:flex-row gap-10 lg:gap-5 p-5 md:p-8 lg:p-10 items-center">

      {/* LEFT CONTENT */}
    <div className="w-full mx-auto lg:w-3/5 ml-0 lg:ml-4 flex flex-col gap-10">

        {/* Availability */}
        <div className="inline-flex w-fit items-center rounded-full bg-teal-100 p-1 font-semibold text-teal-800">

         <span className="relative flex h-3 w-3 items-center justify-center">

                            {/* Soft static ring */}
                            <span className="absolute h-3 w-3 rounded-full ring-4 ring-teal-300 animate-ping opacity-550"></span>

                            {/* Center dot */}
                            <span className="relative h-2 w-2 rounded-full bg-teal-600"></span>

                        </span>

          <h3 className="pl-2 text-sm md:text-base">
            Available for freelance

            <span className="ml-2 px-3 md:px-5 border border-teal-700 rounded-full">
              Open to work
            </span>
          </h3>

        </div>


        {/* Heading + Paragraph */}
        <div className="mt-0 lg:mt-6">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">

            I am a Frontend Developer

            <br />

            <span className="text-teal-600">
              React + Tailwind
            </span>

          </h1>

          <p className="text-gray-500 font-semibold leading-normal mt-6 md:mt-10 max-w-2xl">

            I build modern, responsive and user-friendly web interfaces
            using React.js and Tailwind CSS. I focus on clean design,
            reusable components and great user experiences.

          </p>

        </div>


        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-0">

          <a href="#projects" className="bg-teal-700 px-6 py-3 rounded font-medium cursor-pointer text-teal-200 hover:bg-teal-500 hover:text-teal-800 transition">
            View Project
          </a>

          <a href="https://github.com/sayedmaawin" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg border border-teal-600 cursor-pointer hover:bg-teal-500 transition flex items-center gap-2 hover:text-white font-medium text-teal-600">
            <RiGithubFill size={20} />
            GitHub
          </a>

        </div>

      </div>


    {/* RIGHT IMAGE */}
<div className="
  w-64 h-64
  sm:w-72 sm:h-72
  md:w-80 md:h-80
  lg:w-96 lg:h-96
  flex justify-center items-center
  border-2 border-teal-700
  rounded-full
  shrink-0
">
  
  <img
    src={image}
    alt="Sayed Maawin"
    className="
      w-56 h-56
      sm:w-64 sm:h-64
      md:w-72 md:h-72
      lg:w-90 lg:h-90
      object-cover
      rounded-full
      shadow-2xl shadow-gray-400
    "
  />

</div>

    </div>
  )
}

export default Hero