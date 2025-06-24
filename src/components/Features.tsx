import React from 'react';
import { Crown, Leaf, Users, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Crown,
      title: "Resep Turun Menurun dari Magetan",
      description: "Warisan kuliner autentik yang telah diwariskan secara turun menurun, menjaga keaslian cita rasa tradisional.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Leaf,
      title: "Bahan Berkualitas",
      description: "Kami selalu menggunakan bahan-bahan segar dan berkualitas tinggi yang dipilih secara selektif setiap hari.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Pelayanan Terbaik",
      description: "Tim yang berpengalaman dan ramah siap memberikan pelayanan terbaik untuk kepuasan pelanggan.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Cepat dan Higienis",
      description: "Proses penyajian yang cepat dengan standar kebersihan tinggi untuk menjaga kualitas dan kesehatan.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Keunggulan <span className="text-red-600">Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empat pilar utama yang menjadikan Mie Pangsit Yamin Juanda pilihan terbaik 
            untuk pengalaman kuliner yang tak terlupakan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;