import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  const handleOrderNow = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-red-50 to-orange-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Mie Pangsit
                <span className="text-red-600 block">Yamin Juanda</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Nikmati kelezatan mie pangsit yamin autentik dengan resep turun menurun dari Magetan. 
                Cita rasa yang tak terlupakan, dibuat dengan bahan berkualitas terbaik.
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 fill-current text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-800">4.9/5</span>
              <span className="text-gray-600">(200+ ulasan)</span>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-5 w-5 text-red-600" />
                <span>Warkop SAE Mulyorejo, 
                  <p></p>Sedati Sidoarjo</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-5 w-5 text-red-600" />
                <span>Buka 08:00 - 22:00</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleOrderNow}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Pesan Sekarang
              </button>
              <button 
                onClick={handleViewMenu}
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                Lihat Menu
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="/mie_pangsit.jpeg" 
                alt="Mie Pangsit Yamin Juanda" 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">3+</div>
                <div className="text-sm text-gray-600 font-medium">Tahun</div>
                <div className="text-sm text-gray-600">Berpengalaman</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;