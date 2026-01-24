import { projects } from '../data/projects'

const Projects = () => {
  return (
    <section id="projects" className="relative">
      <div className="blur-circle w-72 h-72 md:w-96 md:h-96 bg-purple-600 bottom-20 left-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-gray-400 mb-20 text-sm md:text-base max-w-2xl mx-auto">
          Here are some of my recent projects showcasing my skills in frontend development,
          UI/UX design, and problem-solving.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-56 md:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-center pb-6 gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 glass rounded-lg font-semibold hover:bg-white/20 transition-colors text-sm"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm md:text-base mb-6 line-clamp-2 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs bg-white/10 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1.5 text-xs bg-white/10 rounded-full text-gray-300">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button - Links to GitHub */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/Uzoma-oma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 glass rounded-full font-semibold hover:scale-105 transition-all duration-300 text-sm md:text-base"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects