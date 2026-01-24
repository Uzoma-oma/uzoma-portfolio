import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Separator Line */}
      <div className="w-full py-10">
        <div className="w-full h-px bg-gradient-to-r from-purple-600 to-pink-600"></div>
      </div>
      
      <About />
      
      {/* Separator Line */}
      <div className="w-full py-10">
        <div className="w-full h-px bg-gradient-to-r from-purple-600 to-pink-600"></div>
      </div>
      
      <Skills />
      
      {/* Separator Line */}
      <div className="w-full py-10">
        <div className="w-full h-px bg-gradient-to-r from-purple-600 to-pink-600"></div>
      </div>
      
      <Projects />
      
      {/* Separator Line */}
      <div className="w-full py-10">
        <div className="w-full h-px bg-gradient-to-r from-purple-600 to-pink-600"></div>
      </div>
      
      <Contact />
      
      <Footer />
    </div>
  )
}

export default App