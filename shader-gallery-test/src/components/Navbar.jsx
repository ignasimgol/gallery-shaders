import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000]">
      <nav className="bg-black/90 backdrop-blur-sm rounded-full py-2 px-6">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-white text-xl font-semibold">
            Imagify
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </a>
            <a href="#perks" className="text-gray-300 hover:text-white transition-colors">
              Perks
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </a>
          </div>

          {/* CTA Button */}
          <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors">
            Book a call
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar