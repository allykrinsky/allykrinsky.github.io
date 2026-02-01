import { motion } from 'framer-motion'
import SocialBubbles from './SocialBubbles'

const Hero = () => {

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center overflow-hidden border border-medium-gray/30"
          >
            {/* Replace with actual image */}
            {/* <div className="text-5xl">👩🏽‍💼</div> */}
            <img
                src="images/headshot.jpeg"
                alt="headshot"
                className="w-full h-full object-cover"
              />
          </motion.div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-semibold text-warm-black tracking-tight">
            Allison Krinsky
          </h1>

          {/* Title/Role */}
          <p className="text-xl md:text-2xl text-soft-black font-light">
            Product Manager, AI & Data @ JPMorgan Chase
          </p>

          {/* Company */}
          {/* <p className="text-base text-soft-black">
            Content Creator
          </p> */}

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-soft-black max-w-2xl mx-auto leading-relaxed pt-2"
          >
            Building AI platforms by day. Sharing career insights and strategic living advice
            to help ambitious young women design intentional lives in tech.
          </motion.p>

          {/* Social Link Bubbles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="pt-8"
          >
            <SocialBubbles delay={0.6} isInView={true} />
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="pt-12"
          >
            <a
              href="#about"
              className="text-xs text-soft-black hover:text-warm-black transition-colors uppercase tracking-wider"
            >
              Scroll to explore
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
