import React from 'react';
import { Users, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="/mie_yamin.png" 
                alt="Tentang Mie Pangsit Yamin Juanda" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm opacity-90">Pelanggan Puas</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Tentang <span className="text-red-600">Kami</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Mie Pangsit Yamin Juanda telah melayani masyarakat Surabaya selama 3 tahun dengan dedikasi tinggi. 
                Kami bangga menyajikan mie pangsit yamin dengan resep turun menurun dari Magetan yang autentik.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Setiap mangkuk mie yang kami sajikan adalah hasil dari perpaduan sempurna antara tradisi kuliner 
                yang kaya dengan inovasi modern, menciptakan pengalaman kuliner yang tak terlupakan.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-red-50 rounded-xl">
                <Users className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Pelanggan</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-xl">
                <Award className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">3</div>
                <div className="text-sm text-gray-600">Tahun</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-xl">
                <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">4.8</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>

            {/* Story */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cerita Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Cerita di Balik Mie Pangsit Yamin Juanda
                Awal mula kami merantau dari Magetan ke 
                Surabaya tahun 2017 dan tinggal di kos-kosan
                Sidoarjo bersama tiga saudara. Di tengah kesederhanaan,
                kami sering memasak sendiri—terutama mie yamin, menu favorit
                keluarga sejak dulu. Dari dapur kecil itu, lahir mimpi besar.
              </p>
              <p>
                Tahun 2020, saat pandemi melanda, kami nekat memulai usaha kecil-kecilan
                dari kos: Mie Pangsit Yamin Juanda. Perlahan tapi pasti, pelanggan mulai berdatangan karena rasa khas dan harga bersahabat. Dukungan dari sekitar menjadi semangat kami untuk terus berkembang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;