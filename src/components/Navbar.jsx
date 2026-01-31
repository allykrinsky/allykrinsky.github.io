import { motion } from 'framer-motion'

const Navbar = ({ scrolled }) => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Connect', href: '#connect' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-medium-gray/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="font-display text-lg font-semibold text-warm-black tracking-tight hover:text-accent transition-colors"
          >
            Allison Krinsky
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm text-soft-black hover:text-warm-black transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
