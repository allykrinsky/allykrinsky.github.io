import { motion } from 'framer-motion'
import { FiInstagram, FiLinkedin, FiMail, FiGithub } from 'react-icons/fi'
import { SiTiktok } from 'react-icons/si'

const SocialBubbles = ({ delay = 0, isInView = true }) => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: FiInstagram,
      url: 'https://instagram.com/itsallykrinsky',
      color: 'hover:bg-pink-500'
    },
    {
      name: 'TikTok',
      icon: SiTiktok,
      url: 'https://tiktok.com/@itsallykrinsky',
      color: 'hover:bg-black'
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      url: 'https://www.linkedin.com/in/allisonkrinsky/',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      icon: FiGithub,
      url: 'https://github.com/allykrinsky',
      color: 'hover:bg-gray-700'
    },
    {
      name: 'Email',
      icon: FiMail,
      url: 'mailto:ally@allisonkrinsky.com',
      color: 'hover:bg-red-500'
    }
  ]

  return (
    <div className="flex gap-4 justify-center flex-wrap">
      {socialLinks.map((social, index) => {
        const Icon = social.icon
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: delay + index * 0.1 }}
            className={`w-14 h-14 flex items-center justify-center rounded-full border-2 border-medium-gray text-warm-black ${social.color} hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-110`}
            aria-label={social.name}
          >
            <Icon size={22} />
          </motion.a>
        )
      })}
    </div>
  )
}

export default SocialBubbles
