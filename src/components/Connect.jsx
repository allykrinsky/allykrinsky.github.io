import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SocialBubbles from './SocialBubbles'

const Connect = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="connect" ref={ref} className="py-24 bg-light-gray">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-warm-black mb-8 tracking-tight">
            Connect
          </h2>

          <p className="text-base text-soft-black mb-12 leading-relaxed max-w-2xl mx-auto">
            Follow along on my journey, reach out for collaborations, or just say hi.
          </p>

          {/* Social Link Bubbles */}
          <SocialBubbles delay={0.2} isInView={isInView} />
        </motion.div>
      </div>
    </section>
  )
}

export default Connect
