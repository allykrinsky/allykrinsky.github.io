import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-24 bg-light-gray">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-semibold text-warm-black mb-12 tracking-tight">
            About
          </h2>

          {/* Bio */}
          <div className="space-y-6 text-soft-black text-base leading-relaxed">
            <p>
              I'm a <span className="font-medium text-warm-black">Product Manager at JPMorgan Chase</span>,
              building our firmwide Data & AI platform.
            </p>

            <p>
              But here's what you won't find on LinkedIn: I'm here to give you the career advice
              nobody else will. The stuff your parents don't know and your professors won't teach you.
            </p>

            <p>
              I share what it's really like navigating AI/tech as a young woman, staying technical as
              a PM, building routines that actually work, and designing a life with intention.
            </p>

            <p className="font-medium text-warm-black pt-2">
              Everything I share comes from actually doing it, not just thinking about it.
            </p>
          </div>

          {/* What I Focus On */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <h3 className="text-sm font-semibold text-warm-black uppercase tracking-wider">
                Career & Tech
              </h3>
              <p className="text-sm text-soft-black leading-relaxed">
                AI/ML product management, corporate navigation, and building technical skills as a PM
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-2"
            >
              <h3 className="text-sm font-semibold text-warm-black uppercase tracking-wider">
                Productivity
              </h3>
              <p className="text-sm text-soft-black leading-relaxed">
                Strategic goal setting, learning frameworks, and staying sharp in a fast-moving industry
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-2"
            >
              <h3 className="text-sm font-semibold text-warm-black uppercase tracking-wider">
                Balance
              </h3>
              <p className="text-sm text-soft-black leading-relaxed">
                Work life integration, building sustainable routines, and avoiding burnout
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-2"
            >
              <h3 className="text-sm font-semibold text-warm-black uppercase tracking-wider">
                Lifestyle
              </h3>
              <p className="text-sm text-soft-black leading-relaxed">
                Travel, personal finance, and designing an intentional life beyond the office
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
