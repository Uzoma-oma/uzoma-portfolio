// Import your project images
import todoAppImg from '../assets/todo-app.png'
import ecommerceAppImg from '../assets/ecommerce-app.png'
import spaceTourismImg from '../assets/space-tourism.png'

export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Todo App',
    description: 'A modern, feature-rich task management application built with TypeScript and React. Includes full CRUD functionality, elegant UI with shadcn/ui components, and seamless state management for organizing daily tasks efficiently.',
    image: todoAppImg,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vite'],
    liveUrl: 'https://todo-typescript-indol.vercel.app/',
    githubUrl: 'https://github.com/Uzoma-oma/todo-typescript',
    featured: true,
  },
  {
    id: 2,
    title: 'E-Commerce Website',
    description: 'A modern e-commerce product showcase built with Vue.js and TypeScript. Features responsive design, dynamic product listings, shopping cart functionality, and seamless user experience with elegant UI components.',
    image: ecommerceAppImg,
    technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://ecommerce-product-gray-gamma.vercel.app/',
    githubUrl: 'https://github.com/Uzoma-oma/ecommerce-product',
    featured: true,
  },
  {
    id: 3,
    title: 'Space Tourism Website',
    description: 'An immersive space tourism website featuring stunning visuals, interactive destination exploration, crew profiles, and technology showcases. Built with modern web technologies for a stellar user experience.',
    image: spaceTourismImg,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://space-tourism-website-gules.vercel.app/',
    githubUrl: 'https://github.com/Uzoma-oma/space-tourism-website',
    featured: true,
  },
]