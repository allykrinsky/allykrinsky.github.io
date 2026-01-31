const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-medium-gray/30 py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <p className="text-xs text-soft-black text-center">
          © {currentYear} Allison Krinsky
        </p>
      </div>
    </footer>
  )
}

export default Footer
