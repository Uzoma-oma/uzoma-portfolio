const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 md:py-12 border-t border-white/10 bg-black/20 mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold gradient-text">Uzoma Oma</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
            >
              Contact
            </a>
          </div>

          <p className="text-gray-400 text-sm md:text-base">
            © {currentYear} Uzoma Okorie Osi
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer