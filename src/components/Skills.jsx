import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiPython,
  SiDocker,
  SiPostgresql,
  SiTensorflow,
  SiFastapi,
  SiScikitlearn,
  SiR,
  SiAwslambda,
  SiFigma,
  SiStreamlit,
  SiNeo4J,
  SiCoursera,
  SiHuggingface,
  SiJupyter,
  SiAnthropic
} from 'react-icons/si'
import { FaAws } from "react-icons/fa";
import { FiAward } from 'react-icons/fi'
import { MdArticle } from 'react-icons/md';

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      type: 'Languages & Frameworks',
      skills: [
        { name: 'Python', icon: SiPython, color: 'hover:bg-blue-500' },
        { name: 'TensorFlow', icon: SiTensorflow, color: 'hover:bg-orange-500' },
        { name: 'FastAPI', icon: SiFastapi, color: 'hover:bg-teal-500' },
        { name: 'scikit-learn', icon: SiScikitlearn, color: 'hover:bg-orange-600' },
        { name: 'Claude', icon: SiAnthropic, color: 'hover:bg-warm-black' },
        { name: 'Streamlit', icon: SiStreamlit, color: 'hover:bg-red-500' },
        { name: 'SQL', icon: SiPostgresql, color: 'hover:bg-blue-700' },
        { name: 'Jupyter', icon: SiJupyter, color: 'hover:bg-orange-600' },
        { name: 'R', icon: SiR, color: 'hover:bg-blue-600' },
        
      ]
    },
    {
      type: 'Tools & Platforms',
      skills: [
        { name: 'Docker', icon: SiDocker, color: 'hover:bg-blue-500' },
        { name: 'Neo4j', icon: SiNeo4J, color: 'hover:bg-teal-600' },
        { name: 'Figma', icon: SiFigma, color: 'hover:bg-purple-500' },
        { name: 'Hugging Face', icon: SiHuggingface, color: 'hover:bg-yellow-500' },
        
      ]
    },
    {
      type: 'Certifications',
      skills: [
        { name: 'Machine Learning Specialist', icon: FaAws, color: 'hover:bg-orange-500' },
        { name: 'Deep Learning Specialization', icon: SiCoursera, color: 'hover:bg-blue-500' },
        // { name: 'Landing an AI Role', icon: MdArticle, color: 'hover:bg-blue-500' }, //https://www.businessinsider.com/gen-z-data-scientist-personal-ai-project-important-land-job-2024-7
        // { name: 'Measurement and ML-Based Prediction of ...', icon: MdArticle, color: 'hover:bg-blue-500' } //https://pubs.acs.org/doi/pdf/10.1021/jasms.2c00111?ref=article_openPDF
      ]
    }
    
  ]

  return (
    <section id="skills" ref={ref} className="py-24 bg-light-gray">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-warm-black mb-12 tracking-tight text-center">
            Skills & Certifications
          </h2>

          {/* Skills Section */}
          <div className="space-y-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.type}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              >
                <h3 className="text-sm font-semibold text-warm-black uppercase tracking-wider mb-3 text-center">
                  {category.type}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
                  {category.skills.map((skill, index) => {
                    const Icon = skill.icon
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, delay: categoryIndex * 0.15 + index * 0.05 }}
                        className={`group px-4 py-2.5 border-2 border-medium-gray rounded-full flex items-center gap-2 ${skill.color} hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105 cursor-default`}
                      >
                        <Icon size={18} />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
