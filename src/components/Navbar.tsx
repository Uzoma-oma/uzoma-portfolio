import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Desktop Navigation */}
      <div className="hidden lg:block py-6">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-3 items-center">
            {/* Left - Logo */}
            <div className="flex justify-start" style={{ paddingLeft: '2rem' }}>
              <a 
                href="#home" 
                className="text-2xl font-bold transition-transform hover:scale-105"
              >
                <span className="gradient-text">Uzoma Oma</span>
              </a>
            </div>

            {/* Center - Navigation Links */}
            <div className="flex items-center justify-center">
              <a
                href="#about"
                className="nav-link text-gray-300 transition-all duration-300 relative text-sm font-medium uppercase tracking-wider pb-2"
                style={{ marginRight: '3rem' }}
              >
                About
              </a>

              <a
                href="#skills"
                className="nav-link text-gray-300 transition-all duration-300 relative text-sm font-medium uppercase tracking-wider pb-2"
                style={{ marginRight: '3rem' }}
              >
                Skills
              </a>

              <a
                href="#projects"
                className="nav-link text-gray-300 transition-all duration-300 relative text-sm font-medium uppercase tracking-wider pb-2"
                style={{ marginRight: '3rem' }}
              >
                Projects
              </a>

              <a
                href="#contact"
                className="nav-link text-gray-300 transition-all duration-300 relative text-sm font-medium uppercase tracking-wider pb-2"
              >
                Contact
              </a>
            </div>

            {/* Right - Resume Button */}
            <div className="flex justify-end" style={{ paddingRight: '2rem' }}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-3"
                style={{ borderRadius: '50px', padding: '0.5rem 1.25rem' }}
              >
                Resume
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <a 
              href="#home" 
              className="text-xl font-bold"
            >
              <span className="gradient-text">Uzoma Oma</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="mt-6 glass rounded-lg p-6 space-y-4">
              <a
                href="#about"
                className="block py-3 text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#skills"
                className="block py-3 text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block py-3 text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block py-3 text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center mt-4 px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-sm flex items-center justify-center gap-2"
              >
                Resume
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar