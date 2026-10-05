import { useState } from 'react'
import AboutModal from './AboutModal'
import { RiArrowRightLongLine } from "@remixicon/react"

const About = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div id='about' className='min-h-screen scroll-mt-20 py-10 md:py-16 lg:py-20 '>
            <div className="max-w-7xl  px-4 md:px-6 lg:px-10 flex flex-col items-start gap-6 md:gap-8 lg:gap-10 ">
                <div className=" w-full flex flex-col text-left gap-6 md:gap-8 ">
                    <h2 className='text-sm md:text-base font-semibold  text-teal-600 uppercase tracking-wider '>About Me </h2>

                    <p className='text-4xl md:text-6xl  lg:text-6xl max-w-full lg:max-w-lg leading-[0.95]  font-bold tracking-tight '>I turn ideas <br />into real <br />products.</p>

                    <div className="flex items-center gap-3 group">
                        <button onClick={() => setIsModalOpen(true)} className=' relative font-medium  cursor-pointer transition group/readmore group-hover:text-teal-600'>Read More <span className='absolute left-0 -bottom-1 w-0 h-px bg-teal-600 transition-all duration-300 group-hover/readmore:w-full'></span>
                        </button>

                        <div className='border rounded-full w-8 h-8 flex items-center justify-center group-hover:text-teal-600 cursor-pointer'><RiArrowRightLongLine size={18} /></div>
                    </div>

                    <p className='text-sm md:text-base lg:text-lg max-w-full  leading-relaxed '>I am a frontend developer driven by precision, clean architecture, and intuitive design. I enjoy transforming ideas into responsive, user-friendly interfaces that are simple, engaging, and built with attention to detail. I focus on creating smooth digital experiences that not only look modern but also feel natural and easy to use across different devices. With a strong interest in React, Tailwind CSS, and modern web development, I am continuously learning, experimenting, and improving my skills to build better products.
                    </p>

                    <p className='invisible md:visible  text-sm md:text-base lg:text-lg max-w-full  leading-relaxed text-gray-500'>My approach balances thoughtful design with clean, reliable code. I focus on responsive layouts, usability, and meaningful details that create polished digital experiences.
                    </p>

                    <div className="bg-gray-200 max-w-full   h-px"></div>

                    <div className='flex flex-col sm:flex-row   justify-between sm:gap-8'>
                        <div className='flex items-center justify-between sm:flex-col sm:items-start'>
                            <p className="text-xs text-gray-500 uppercase">
                                01 / Focus
                            </p>

                            <p className='text-sm font-semibold text-gray-800'>
                                Frontend Development
                            </p>
                        </div>

                        <div className='flex items-center justify-between sm:flex-col sm:items-start'>
                            <p className="text-xs text-gray-500 uppercase">
                                02 / Stack
                            </p>

                            <p className='text-sm font-semibold text-gray-800'>
                                React & Tailwind
                            </p>
                        </div>

                        <div className='flex items-center justify-between sm:flex-col sm:items-start'>
                            <p className="text-xs text-gray-500 uppercase">
                                03 / Mindset
                            </p>

                            <p className='text-sm font-semibold text-gray-800'>
                                UI/UX Focus
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            {/* Modal ko yahan lagana zaroori hai */}
            <AboutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </div>
        
    )
}

export default About
