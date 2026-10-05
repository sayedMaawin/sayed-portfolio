import { useState } from 'react'
import { projectsData } from '../data/projectsData'
import ProjectCard from "./ProjectCard";
import ProjectDetailsModel from './ProjectsDetailsModel'

const Projects = () => {

  const [activeFilter, setActiveFilter] = useState('all');

  const [selectedProject , setSelectedProject] = useState(null);

  const filterProjects =
        activeFilter === "all"
        ? projectsData
        : projectsData.filter(
          (project) => project.filter === activeFilter
        );


  return (
   <div id='projects' className="min-h-screen  scroll-mt-20 py-10 md:py-16">

    <div className="flex flex-col gap-6 px-4 md:px-8 lg:px-12 max-w-7xl ">

      {/* Label - Desktop / Mobile dono */}
      <div className="flex items-center gap-2">
        
        <h2 className="text-xs md:text-sm font-semibold text-teal-700 uppercase tracking-[0.2em]">
          Projects
        </h2>
      </div>

      {/* Heading */}
      <h3 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900">
        Selected work <br className="hidden md:block" />
        <span className="md:hidden">I've built.</span>
        <span className="hidden md:inline">I've built and worked on.</span>
      </h3>

      {/* Description */}
      <p className="md:hidden text-sm text-gray-500 leading-relaxed">
        Practical frontend applications focused on modern React & UI performance.
      </p>
      <p className="hidden md:block max-w-3xl text-base text-gray-500 leading-relaxed">
        A curated collection of web application projects demonstrating modern frontend development, thoughtful UI/UX interaction design, performant code architectures, and API integrations.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 md:gap-3 mt-2">
        <button
        onClick={() => setActiveFilter("all")}
         className={`border border-gray-200 rounded-full px-4 py-1.5 text-sm  cursor-pointer ${activeFilter === "all" 
          ? "border-teal-600 bg-teal-50 text-teal-800"
          : "border-gray-200 hover:bg-gray-50"
         }`}
         >
          All Projects
        </button>
        <button
        onClick={() => setActiveFilter("react")}
         className={`border border-gray-200 rounded-full px-4 py-1.5 text-sm cursor-pointer hover:bg-gray-50 ${activeFilter === "react"
          ? "border-teal-600 bg-teal-50 text-teal-800"
          : "border-gray-200 hover:bg-gray-50"
         }`}
         >
          React 
        </button>
        <button 
        onClick={() => setActiveFilter("api")}
        className={`border border-gray-200 rounded-full px-4 py-1.5 text-sm cursor-pointer hover:bg-gray-50 ${activeFilter === ("api")
          ? "border-teal-600 bg-teal-50 text-teal-800"
          : "border-gray-200 hover:bg-gray-50"
        }`}
        >
          REST API / Async
        </button>
      </div>

      {/* Cards Grid - YEH SAB SE IMPORTANT HAI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-6">
        {filterProjects.map((project) => (
          <ProjectCard
            key={project.no}
            no={project.no}
            category={project.category}
            status={project.status}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            isDark={project.isDark}
            onViewDetails={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectDetailsModel
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        />
      )}

    </div>
   </div>
  );
};

export default Projects;