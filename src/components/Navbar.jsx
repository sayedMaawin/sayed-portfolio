import { useEffect, useState } from 'react'
import logo from '../assets/Sm.png'

const Navbar = () => {

  const [activeSection, setActiveSection] = useState('home')
  const [isOpen, setIsOpen] = useState(false) // 1. Naya switch add kiya

  const navLinks = [
    { name: 'Home', id: 'home', href: '#home' },
    { name: 'About', id: 'about', href: '#about' },
    { name: 'Skills', id: 'skills', href: '#skills' },
    { name: 'Projects', id: 'projects', href: '#projects' },
    { name: 'Contact', id: 'contact', href: '#contact' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)
        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    )
    const sections = document.querySelectorAll('#home,#about,#skills,#projects,#contact')
    sections.forEach((section) => observer.observe(section))
  }, [])

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-xl font-medium rounded-b-2xl px-5 md:px-8 lg:px-10 flex flex-col">

        {/* Top Bar */}
        <div className="h-16 flex justify-between items-center w-full">
          {/* Logo + Name */}
          <div className="flex items-center gap-3 md:gap-5">
            <img src={logo} alt="Sayed Maawin" className="h-9 w-9 md:h-10 md:w-10 rounded-xl object-cover" />
            <a href="#" className="text-lg md:text-xl">Sayed Maawin</a>
          </div>

          {/* Laptop Menu */}
          <div className="hidden md:flex gap-6 lg:gap-10 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={activeSection === link.id ? 'bg-teal-600 text-white px-2 py-1 rounded' : ''}
              >
                {link.name}
              </a>
            ))}
          </div>

          
          <button 
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-5 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id)
                  setIsOpen(false) 
                }}
                className={`w-fit ${activeSection === link.id ? 'bg-teal-600 text-white px-3 py-1 rounded' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default Navbar