import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              光未科技
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 transition">首页</a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 transition">服务</a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition">关于</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition">联系</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <a href="#home" className="block py-2 text-gray-700 hover:text-primary-600 transition">首页</a>
            <a href="#services" className="block py-2 text-gray-700 hover:text-primary-600 transition">服务</a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-primary-600 transition">关于</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-primary-600 transition">联系</a>
          </div>
        )}
      </div>
    </nav>
  );
}
