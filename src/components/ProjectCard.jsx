import { RiArrowRightLongLine } from "@remixicon/react";

const ProjectCard = ({ no, title, description, technologies,   onViewDetails }) => {
  return (
    <div className="group flex flex-col gap-4 border border-gray-300 rounded-xl p-4 md:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <h2 className="text-sm md:text-base font-medium text-teal-600">
        {no}
      </h2>

      <h3 className="text-lg md:text-xl font-semibold transition-colors duration-300 group-hover:text-teal-600">
        {title}
      </h3>

      <p className="text-sm md:text-base leading-relaxed">
        {description}
      </p>

      <div className="bg-gray-200 h-px w-full" />

      <div className="flex flex-wrap gap-2">
        {technologies.map((technology, index) => (
          <span
            key={index}
            className="bg-gray-200 px-2 py-1 rounded text-xs md:text-sm"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="flex gap-3 items-center">

       <button
          onClick={onViewDetails}
            className="relative font-semibold text-sm md:text-base cursor-pointer group/viewproject group-hover:text-teal-600">
          View Project

          <span className="absolute left-0 -bottom-1 w-0 h-px bg-teal-600 transition-all duration-300 group-hover/viewproject:w-full" />

        </button>

        <RiArrowRightLongLine
          size={18}
          className="text-teal-600"
        />

      </div>

    </div>
  );
};

export default ProjectCard;