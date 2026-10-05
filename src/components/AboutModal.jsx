import { useEffect } from 'react';

const AboutModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto' }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-white/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-2xl w-full rounded-2xl p-6 md:p-8 relative shadow-2xl border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-xl hover:bg-gray-200 hover:text-black p-2 rounded cursor-pointer w-9 h-9 flex items-center justify-center">
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-2 text-teal-600">About Me</h2>
        <p className="text-sm text-gray-800 mb-6">My journey in detail</p>

        <div className="space-y-4 text-gray-800 leading-relaxed text-[15px]">
          <p>
           I am Sayed Maawin, a Software Engineering student and Front-End Developer passionate about building modern, responsive, and user-friendly web experiences.
          </p>
          <p>
           I work primarily with HTML, CSS, JavaScript, React.js, and Tailwind CSS. I enjoy turning ideas into clean, functional interfaces with a strong focus on usability and design.
          </p>
          <p>
           I am continuously improving my development skills and exploring technologies like Node.js, REST APIs, TypeScript, and Next.js. My goal is to grow as a professional software engineer and build products that are both useful and impactful.
          </p>
          <p className="font-medium text-black">
            My goal is to become a skilled software engineer by building meaningful, user-focused, and impactful digital products.
          </p>
        </div>

        <button onClick={onClose} className="mt-8 w-full bg-teal-600 text-white py-3 rounded-xl font-medium hover:bg-teal-700 transition">
          Close
        </button>
      </div>
    </div>
  );
};

export default AboutModal;