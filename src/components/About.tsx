// Import your image from assets folder
import aboutImg from '../assets/about.jpeg'

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 md:order-1">
            {/* Animated gradient border wrapper */}
            <div className="relative p-1 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 animate-gradient">
              <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300 bg-[#0a0a0a]">
                <div className="w-full h-80 md:h-96 lg:h-[28rem] bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center overflow-hidden">
                  {/* 
                    IMPORTANT: Use import like this:
                    import aboutImg from '../assets/about.jpg'
                    Then use: <img src={aboutImg} ... />
                  */}
                  <img src={aboutImg} alt="About Me" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-semibold">Hey there! 👋🏻</h3>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              I'm a passionate frontend engineer with expertise in building modern,
              responsive, and user-friendly web applications. With a keen eye for
              design and a love for clean code, I transform ideas into reality.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              I specialize in creating dynamic and interactive UI/UX experiences. I stay up to date with the latest tools and techniques and have worked on a wide range of projects, from personal websites to large-scale applications.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              If you're seeking a dedicated and passionate web developer, I'm eager to collaborate with you. Let's bring your ideas to life!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About