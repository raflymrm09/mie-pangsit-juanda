import React, { useEffect, useState } from 'react';
import { Phone, MessageSquare, Instagram, Video, Mail, Clock, MapPin, Navigation } from 'lucide-react';

const Contact = () => {
  const [selectedItem, setSelectedItem] = useState<string>('');

  useEffect(() => {
    // Check if there's a selected item from menu
    const item = sessionStorage.getItem('selectedItem');
    if (item) {
      setSelectedItem(item);
      // Clear it after getting it
      sessionStorage.removeItem('selectedItem');
    }
  }, []);

  const handleContactClick = (type: string, value: string) => {
    let message = 'Halo, saya ingin memesan mie pangsit yamin';
    
    if (selectedItem) {
      message = `Halo, saya ingin memesan ${selectedItem}`;
    }

    switch (type) {
      case 'phone':
        window.open(`tel:${value}`, '_blank');
        break;
      case 'whatsapp':
        const whatsappMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${value.replace(/\D/g, '')}?text=${whatsappMessage}`, '_blank');
        break;
      case 'tiktok':
        window.open(`https://www.tiktok.com/@masken_37?_t=ZS-8xTaMI9Xci9&_r=1${value.replace('@masken_37', '')}`, '_blank');
        break;
    }
  };

  const handleMapClick = () => {
    // Open Google Maps with the restaurant location
    const address = "Jalan Juanda No. 123, Gubeng, Surabaya, Jawa Timur";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      info: "+62 813 5754 2079",
      color: "from-blue-500 to-blue-600",
      type: "phone"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      info: "+62 813 5754 2079",
      color: "from-green-500 to-green-600",
      type: "whatsapp"
    },
    {
      icon: Video,
      title: "TikTok",
      info: "@miepangsityaminjuanda",
      color: "from-gray-800 to-gray-900",
      type: "tiktok"
    },
    ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hubungi <span className="text-red-600">Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih metode komunikasi yang Anda sukai untuk melakukan pemesanan atau mendapatkan informasi lebih lanjut.
          </p>
          {selectedItem && (
            <div className="mt-6 p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
              <p className="text-green-700 font-medium">
                ✅ Anda memilih: <span className="font-bold">{selectedItem}</span>
              </p>
              <p className="text-green-600 text-sm mt-1">
                Klik salah satu metode kontak di bawah untuk melanjutkan pemesanan
              </p>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pilih Metode Pemesanan</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div 
                      key={index} 
                      onClick={() => handleContactClick(contact.type, contact.info)}
                      className="flex items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group border-2 border-transparent hover:border-red-200"
                    >
                      <div className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-7 w-7 text-white drop-shadow-sm" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 text-lg drop-shadow-sm">{contact.title}</div>
                        <div className="text-gray-600 font-medium">{contact.info}</div>
                      </div>
                      <div className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-semibold">Klik untuk {contact.title.toLowerCase()}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-red-600 mr-3" />
                <h4 className="text-xl font-bold text-gray-900">Jam Operasional</h4>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span className="font-semibold">08:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu - Minggu</span>
                  <span className="font-semibold">07:00 - 23:00</span>
                </div>
                <div className="flex justify-between text-red-600 font-semibold">
                  <span>Hari Libur</span>
                  <span>08:00 - 22:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Location & Map */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Lokasi Kami</h3>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Mie Pangsit Yamin Juanda</h4>
                  <p className="text-gray-600 mb-4">
                    Jalan Juanda No. 123, Gubeng<br/>
                    Surabaya, Jawa Timur 60281<br/>
                    Indonesia
                  </p>
                  <button 
                    onClick={handleMapClick}
                    className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-semibold hover:bg-red-50 px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <Navigation className="h-4 w-4" />
                    <span>Buka di Google Maps</span>
                  </button>
                </div>
              </div>

              {/* Interactive Map */}
              <div 
                onClick={handleMapClick}
                className="bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl h-80 flex items-center justify-center shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-2 border-red-200 hover:border-red-300"
              >
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-red-600 mx-auto mb-4 animate-bounce" />
                  <p className="text-red-700 font-bold text-lg">Klik untuk Buka Maps</p>
                  <p className="text-red-600 font-medium">Jalan Juanda No. 123, Gubeng, Surabaya</p>
                  <p className="text-sm text-red-500 mt-2">📍 Navigasi langsung ke lokasi kami</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            {selectedItem ? `Siap Memesan ${selectedItem}?` : 'Siap Memesan?'}
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {selectedItem 
              ? `Pilih metode kontak di atas untuk memesan ${selectedItem} atau hubungi kami langsung melalui tombol di bawah.`
              : 'Hubungi kami sekarang untuk menikmati kelezatan mie pangsit yamin autentik dari Magetan. Kami siap melayani dengan sepenuh hati!'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleContactClick('whatsapp', '+62 813 5754 2079')}
              className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Pesan via WhatsApp
            </button>
            <button 
              onClick={() => handleContactClick('phone', '+62 813 5754 2079')}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              Telepon Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;