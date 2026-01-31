import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Graph Analytics Platform",
      description: "TBD",
      category: "Data Visualization",
      image: "/images/graph-analytics.jpg", // Add your image to public/images/
      demoLink: "#",
      repoLink: "https://github.com/allykrinsky/graph-analytics",
      status: "In Progress"
    },
    {
      title: "Grocery Recommendations & Meal Planner",
      description: "TBD",
      category: "Full-Stack ML",
      image: "/images/meal-planner.jpg",
      demoLink: "#",
      repoLink: "https://github.com/allykrinsky/meal-planner",
      status: "Live"
    },
    {
      title: "Personal Budget Tracker",
      description: "TBD",
      category: "Full-Stack",
      image: "/images/budget-app.jpg",
      demoLink: "#",
      repoLink: "https://github.com/allykrinsky/budget-app",
      status: "Live"
    },
    {
      title: "Gen Z data scientist says many majors in the field are interchangeable — so this is what to do if you want an AI job",
      description: "July 17, 2024",
      category: "Press",
      image: "/images/article.png",
      demoLink: "https://lnkd.in/gPgaBjDE",
      // repoLink: "https://lnkd.in/gPgaBjDE",
      status: "Published"
    },
    {
      title: "High-Throughput Measurement and Machine Learning-Based Prediction of Collision Cross Sections for Drugs and Drug Metabolites",
      description: "May 11, 2022",
      category: "Research",
      image: "/images/ccs.png",
      demoLink: "https://pubs.acs.org/doi/pdf/10.1021/jasms.2c00111?ref=article_openPDF",
      // repoLink: "https://pubs.acs.org/doi/pdf/10.1021/jasms.2c00111?ref=article_openPDF",
      status: "Published"
    }

  ]

  return (
    <section id="projects" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-warm-black mb-12 tracking-tight">
            Projects
          </h2>

          {/* Horizontal scroll container */}
          <div className="overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0">
            <div className="flex gap-6 min-w-max md:min-w-0 md:grid md:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group w-80 md:w-auto flex-shrink-0"
                >
                  <div className="border border-medium-gray/30 rounded-lg overflow-hidden hover:border-warm-black transition-all duration-300 h-full flex flex-col">
                    {/* Project Image */}
                    <div className="aspect-video bg-light-gray relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-3xl">
                        📊
                      </div>
                      {/* Replace emoji with actual image when available:
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      /> */}
                      {project.status && (
                        <div className="absolute top-2 right-2">
                          <span className="px-2 py-0.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-warm-black">
                            {project.status}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-4 flex-grow flex flex-col">
                      <h3 className="text-base font-semibold text-warm-black group-hover:text-accent transition-colors mb-2 line-clamp-2">
                        {project.title}
                      </h3>

                      <p className="text-xs text-soft-black leading-relaxed mb-3 flex-grow line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-block px-2 py-0.5 bg-light-gray rounded-full text-xs font-medium text-soft-black">
                          {project.category}
                        </span>

                        {/* Links */}
                        <div className="flex gap-2">
                          {project.demoLink && project.demoLink !== '#' && (
                            <a
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-warm-black hover:text-accent transition-colors"
                              title="View Demo"
                            >
                              <FiExternalLink size={14} />
                            </a>
                          )}
                          {project.repoLink && (
                            <a
                              href={project.repoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-warm-black hover:text-accent transition-colors"
                              title="View Code"
                            >
                              <FiGithub size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
