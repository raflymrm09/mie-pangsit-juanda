import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const Menu = () => {
  const handleOrderItem = (itemName: string) => {
    // Scroll to contact section for customer to choose ordering method
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    
    // Store selected item in sessionStorage so contact section can use it
    sessionStorage.setItem('selectedItem', itemName);
    
    // Add visual feedback
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.classList.add('animate-pulse');
        setTimeout(() => {
          contactSection.classList.remove('animate-pulse');
        }, 2000);
      }
    }, 500);
  };

  const handleContactUs = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    {
      id: 1,
      name: "Mie Yamin Pedas Manis",
      description: "Nikmati sensasi mie yamin pedas manis khas dengan perpaduan bumbu pedas dan manis yang menggugah selera. Disajikan dengan pangsit goreng renyah dan sayuran segar untuk menambah kelezatan.",
      price: "Rp 15.000",
      rating: 4.9,
      image: "/mie_yaminpedas.jpeg",
      popular: true
    },
    {
      id: 2,
      name: "Mie Yamin Manis",
      description: "Mie yamin manis bercita rasa manis gurih, dipadukan dengan pangsit rebus, sayuran hijau segar, dan kuah kaldu hangat yang menghangatkan.",
      price: "Rp 14.000",
      rating: 4.8,
      image: "/mie_yaminmanis.jpeg"
    },
    {
      id: 3,
      name: "Mie Pangsit",
      description: "Mie pangsit spesial dengan potongan ayam kampung, dilengkapi pangsit jumbo, telur rebus, dan berbagai topping lengkap yang memanjakan lidah.",
      price: "Rp 13.000",
      rating: 4.9,
      image: "mie_pangsitt.jpeg"
    },
    {
      id: 4,
      name: "Mie Pedas Gurih",
      description: "Paduan mie pedas gurih dengan bumbu pedas gurih, disertai bakso sapi pilihan dan pangsit goreng garing yang menambah tekstur kriuk dalam setiap suapan.",
      price: "Rp 14.000",
      rating: 4.7,
      image: "/mie_pedasgurih.jpeg"
    },
    {
      id: 5,
      name: "Mie Chili Oil",
      description: "Mie Chili Oil dilumuri saus chili oil khas yang kaya rasa dan pedas menggoda, cocok untuk pecinta makanan berbumbu tajam.",
      price: "Rp 15.000",
      rating: 4.8,
      image: "/mie_chilioil.jpeg"
    },
    {
      id: 6,
      name: "Wonton Chili Oil",
      description: "Wonton isi sayuran disajikan dengan saus chili oil spesial, ditambah tahu, tempe, dan sayuran organik. Cocok untuk kamu yang cari hidangan sehat tapi tetap mantap!",
      price: "Rp 15.000",
      rating: 4.6,
      image: "/wonton_chilioil.jpeg"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Menu <span className="text-red-600">Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilihan lengkap mie pangsit yamin dengan berbagai varian rasa yang menggugah selera. 
            Setiap hidangan dibuat dengan resep autentik dan bahan berkualitas.
          </p>
          <div className="mt-6 p-4 bg-red-50 rounded-xl border-l-4 border-red-500">
            <p className="text-red-700 font-medium">
              💡 Pilih menu yang Anda inginkan, lalu kami akan mengarahkan Anda ke bagian kontak untuk memilih metode pemesanan
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.popular && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Populer
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-700">{item.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">{item.price}</span>
                  <button 
                    onClick={() => handleOrderItem(item.name)}
                    className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Pilih</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Tidak Menemukan Yang Anda Cari?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Kami siap membantu Anda menemukan hidangan yang sesuai dengan selera. 
            Hubungi kami untuk konsultasi menu atau permintaan khusus.
          </p>
          <button 
            onClick={handleContactUs}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;