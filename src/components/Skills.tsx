import { skills } from '../data/skills'
import { useState } from 'react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', 'Frontend', 'Tools']

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section id="skills" className="relative">
      <div className="blur-circle w-72 h-72 md:w-96 md:h-96 bg-blue-600 top-20 right-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 text-sm md:text-base max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 scale-105'
                  : 'glass hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.name}
                className="glass rounded-lg p-6 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center gap-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Component */}
                <Icon className="w-12 h-12 md:w-16 md:h-16" />
                
                {/* Skill Name */}
                <h3 className="text-sm md:text-base font-semibold text-white">
                  {skill.name}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills