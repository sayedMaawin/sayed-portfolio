import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  RiMailLine,
  RiMapPinLine,
  RiTimeLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiArrowRightLongFill,
} from "@remixicon/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send(
      "service_omi0xtd",
      "template_twvb4e9",
      formData,
      {
        publicKey: "hn3VM_jaZCBrHeQen",
      }
    )
    .then(() => {
    

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    })
    .catch((error) => {
      console.log("Failed to send email:", error);
    });
};

  return (
    <div id="contact" className="min-h-screen scroll-mt-20 py-10 md:py-16">
      <div className="max-w-7xl  px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-2/5 flex flex-col gap-5">
            <h2 className="text-sm md:text-base lg:text-lg text-teal-600 font-semibold tracking-wider uppercase">
              Contact
            </h2>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Let's build
              <br />
              something great
              <br />
              together.
            </h3>

            <p className="max-w-lg text-sm md:text-base lg:text-lg leading-relaxed text-gray-700">
              Have a project in mind, want to collaborate, or simply want to
              connect? I'm always open to discussing new ideas, opportunities,
              and interesting projects.
            </p>

            {/* Small line */}
            <div className="bg-teal-600 h-1 w-14 rounded"></div>

            {/* CONTACT INFO */}
            <div className="flex flex-col gap-5 mt-2">
              {/* Email */}
              <div className="flex items-start gap-3">
                <RiMailLine size={20} className="text-gray-500 mt-1 shrink-0" />

                <div className="flex flex-col">
                  <h4 className="text-sm font-medium">Email</h4>

                  <p className="text-sm text-gray-600 break-all">
                    sayyedprogrammer49@gmail.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <RiMapPinLine
                  size={20}
                  className="text-gray-500 mt-1 shrink-0"
                />

                <div className="flex flex-col">
                  <h4 className="text-sm font-medium">Location</h4>

                  <p className="text-sm text-gray-600">Pakistan</p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start gap-3">
                <RiTimeLine size={20} className="text-gray-500 mt-1 shrink-0" />

                <div className="flex flex-col">
                  <h4 className="text-sm font-medium">Availability</h4>

                  <p className="text-sm text-gray-600">
                    Open to freelance & collaboration
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-5 mt-2">
              <a
                href="https://github.com/sayedMaawin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition"
              >
                <RiGithubFill className="w-5 h-5 lg:w-7 lg:h-7" />
              </a>

              <a
                href="https://www.linkedin.com/in/sayyed-maawin-10b199419/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#0077B5] transition"
              >
                <RiLinkedinBoxFill className="w-5 h-5 lg:w-7 lg:h-7" />
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full lg:w-3/5">
            <div className="w-full border border-gray-200 rounded-xl p-5 md:p-6 lg:p-7 shadow-sm hover:border-teal-500 transition">
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                {/* Name */}
                <label className="text-sm font-medium text-gray-700">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-teal-500 transition"
                />

                {/* Email */}
                <label className="text-sm font-medium text-gray-700 mt-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-teal-500 transition"
                />

                {/* Subject */}
                <label className="text-sm font-medium text-gray-700 mt-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-teal-500 transition"
                />

                {/* Message */}
                <label className="text-sm font-medium text-gray-700 mt-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-teal-500 transition resize-none"
                ></textarea>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-md transition cursor-pointer mt-2"
                >
                  Send Message
                  <RiArrowRightLongFill size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
