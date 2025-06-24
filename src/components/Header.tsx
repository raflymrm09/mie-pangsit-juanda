import React, { useState } from 'react';
import { ChefHat, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleOrderNow = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-red-600 to-red-700 p-2 rounded-full">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Mie Pangsit</h1>
              <p className="text-sm text-red-600 font-medium">Yamin Juanda</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Beranda</a>
            <a href="#about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Tentang</a>
            <a href="#menu" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Menu</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Kontak</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={handleOrderNow}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Pesan Sekarang
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-red-600 transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Tentang</a>
              <a href="#menu" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Menu</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Kontak</a>
              <button 
                onClick={handleOrderNow}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 mt-4 self-start"
              >
                Pesan Sekarang
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;