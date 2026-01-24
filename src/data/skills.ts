import type { IconType } from 'react-icons'
import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiNextdotjs, 
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiChakraui,
  SiRedux,
  SiVuedotjs,
  SiGit,
  SiVite,
  SiWebpack,
  SiFigma,
  SiGithub,
  SiNetlify,
  SiVercel
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

export interface Skill {
  name: string
  category: string
  icon: IconType
}

export const skills: Skill[] = [
  // Frontend
  { 
    name: 'React', 
    category: 'Frontend',
    icon: SiReact
  },
  { 
    name: 'TypeScript', 
    category: 'Frontend',
    icon: SiTypescript
  },
  { 
    name: 'JavaScript', 
    category: 'Frontend',
    icon: SiJavascript
  },
  { 
    name: 'Next.js', 
    category: 'Frontend',
    icon: SiNextdotjs
  },
  { 
    name: 'Tailwind CSS', 
    category: 'Frontend',
    icon: SiTailwindcss
  },
  { 
    name: 'HTML', 
    category: 'Frontend',
    icon: SiHtml5
  },
  { 
    name: 'CSS', 
    category: 'Frontend',
    icon: SiCss3
  },
  { 
    name: 'Chakra UI', 
    category: 'Frontend',
    icon: SiChakraui
  },
  { 
    name: 'Redux', 
    category: 'Frontend',
    icon: SiRedux
  },
  { 
    name: 'Vue.js', 
    category: 'Frontend',
    icon: SiVuedotjs
  },
  
  // Tools
  { 
    name: 'Git', 
    category: 'Tools',
    icon: SiGit
  },
  { 
    name: 'Vite', 
    category: 'Tools',
    icon: SiVite
  },
  { 
    name: 'Webpack', 
    category: 'Tools',
    icon: SiWebpack
  },
  { 
    name: 'Figma', 
    category: 'Tools',
    icon: SiFigma
  },
  { 
    name: 'VS Code', 
    category: 'Tools',
    icon: VscCode
  },
  { 
    name: 'GitHub', 
    category: 'Tools',
    icon: SiGithub
  },
  { 
    name: 'Netlify', 
    category: 'Tools',
    icon: SiNetlify
  },
  { 
    name: 'Vercel', 
    category: 'Tools',
    icon: SiVercel
  },
]