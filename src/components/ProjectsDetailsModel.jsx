import { RiCloseLine } from "@remixicon/react";

const ProjectDetailsModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm px-4 py-6">

      {/* MODAL */}
      <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-gray-200 bg-white p-6 md:p-10 shadow-2xl">

        {/* HEADER */}
        <div className="flex items-start justify-between gap-5">

          <div>
            <p className="text-sm md:text-base font-bold text-teal-600 uppercase tracking-wide">
              {project.no} / Featured {project.category}
            </p>

            <h2 className="mt-1 text-2xl md:text-3xl font-bold text-slate-900">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 transition hover:text-slate-900 cursor-pointer"
          >
            <RiCloseLine size={28} />
          </button>

        </div>

        {/* DIVIDER */}
        <div className="my-6 h-px bg-gray-200" />


        {/* DESCRIPTION */}
        <p className="text-sm md:text-base leading-7 text-slate-600">
          {project.fullDescription}
        </p>


        {/* FEATURES */}
        <div className="mt-6">

          <h3 className="text-sm font-bold uppercase text-slate-400">
            Key Engineering Features
          </h3>

          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm md:text-base text-slate-600">

            {project.features.map((feature, index) => (
              <li key={index}>
                {feature}
              </li>
            ))}

          </ul>

        </div>


        {/* TECHNOLOGIES */}
        <div className="mt-7">

          <h3 className="text-sm font-bold uppercase text-slate-400">
            Tech Stack Breakdown
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">

            {project.technologies.map((technology, index) => (
              <span
                key={index}
                className="rounded-md bg-slate-100 px-3 py-2 text-xs md:text-sm text-slate-700"
              >
                {technology}
              </span>
            ))}

          </div>

        </div>


        {/* BOTTOM DIVIDER */}
        <div className="my-7 h-px bg-gray-200" />


        {/* BUTTONS */}
        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-300 px-6 py-2.5 text-center text-sm font-semibold text-slate-700 transition hover:bg-gray-50"
          >
            GitHub Code
          </a>

          <button
            onClick={onClose}
            className="rounded-lg bg-teal-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700 cursor-pointer"
          >
            Close Preview
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProjectDetailsModal;