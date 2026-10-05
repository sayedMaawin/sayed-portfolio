import { RiCodeSSlashLine, RiToolsLine, RiBookOpenLine } from "@remixicon/react";
import { skillsData } from '../data/skillsData'


const icons = [
    <RiCodeSSlashLine className="text-teal-600" size={28} />,
    <RiToolsLine className="text-teal-600" size={28} />,
    <RiBookOpenLine className="text-teal-600" size={28} />
]


const Skills = () => {
    return (
        <div id='skills' className='min-h-screen scroll-mt-20 py-3 md:py-6 lg:py-9'>
            <div className="flex flex-col lg:flex-row gap-10 ">
                <div className=" px-4 md:px-6 lg:px-8 lg:w-2/5 flex flex-col gap-4">
                    <h2 className='text-sm md:text-base lg:text-xl font-semibold text-teal-600 uppercase tracking-wider'>Skills</h2>
                    <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight'>Technologies I work with and continue to explore.
                    </h3>

                    <p className='text-sm md:text-base lg:text-lg max-w-full leading-relaxed text-gray-500 '>I work with modern web technologies to build fast, responsive, and user-friendly interfaces. I enjoy turning ideas into clean and interactive web experiences with a strong focus on usability, performance, and responsive design. I'm always learning and exploring new tools, technologies, and best practices to improve my skills, solve problems more effectively, and create better digital experiences.
                    </p>

                    <div className='bg-teal-600 h-1 w-20 rounded'></div>
                </div>
                <div className="flex-1 flex flex-col gap-8 px-4 lg:px-0">
                    {skillsData.map((skill, index) => (
                        <div key={skill.number}>
                            <div className="flex items-start gap-3 md:gap-6">
                                <h2 className='bg-teal-100 text-teal-600 font-medium p-2 w-fit h-fit rounded'>{skill.number}</h2>
                                <div>{icons[index]}</div>
                                <div className="flex-1">
                                    <h3 className='font-bold text-base md:text-xl lg:text-2xl'>{skill.title}</h3>
                                    <p className='text-sm md:text-base lg:text-lg text-gray-500'>{skill.description}</p>
                                    <div className="flex flex-wrap gap-3 mt-3">
                                        {skill.technologies.map((tech) => (
                                            <span key={tech} className='p-2 bg-teal-100 text-teal-600 font-medium rounded'>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {index !== skillsData.length - 1 && <div className="h-px bg-gray-200 mt-8"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills
