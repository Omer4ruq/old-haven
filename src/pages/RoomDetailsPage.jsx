// import { Header } from '../components/Header.jsx';
// import { Footer } from '../components/Footer.jsx';
import { ImageWithFallback } from '../components/figma/ImageWithFallback.jsx';
import { Bed, Wifi, Tv2, Coffee, AirVent, Shield, Bath, Phone, Users, CheckCircle } from 'lucide-react';
import Header from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';

export function RoomDetailsPage() {
  const roomTypes = [
    {
      title: "Private Suite",
      description: "Spacious private room with ensuite bathroom and city view",
      size: "350 sq ft",
      capacity: "1 Patient",
      price: "$450/night",
      features: ["Private bathroom", "City view", "Reclining chair", "Mini fridge"],
      popular: true
    },
    {
      title: "Semi-Private Room",
      description: "Comfortable shared accommodation with privacy curtains",
      size: "280 sq ft", 
      capacity: "2 Patients",
      price: "$275/night",
      features: ["Shared bathroom", "Privacy curtains", "Individual storage", "Shared seating"],
      popular: false
    },
    {
      title: "Deluxe Private Room",
      description: "Premium accommodation with additional amenities and space",
      size: "425 sq ft",
      capacity: "1 Patient + 1 Guest",
      price: "$650/night", 
      features: ["Large private bathroom", "Guest seating area", "Kitchenette", "Premium view"],
      popular: false
    },
    {
      title: "Family Suite",
      description: "Large suite designed for extended family stays",
      size: "550 sq ft",
      capacity: "1 Patient + 3 Guests",
      price: "$850/night",
      features: ["Separate guest area", "Full bathroom", "Kitchen facilities", "Living space"],
      popular: false
    }
  ];

  const standardAmenities = [
    {
      name: "High-Speed WiFi",
      description: "Complimentary internet access throughout the facility",
      icon: Wifi
    },
    {
      name: "Cable Television",
      description: "Premium cable package with 200+ channels",
      icon: Tv2
    },
    {
      name: "Climate Control",
      description: "Individual temperature control in each room",
      icon: AirVent
    },
    {
      name: "24/7 Security",
      description: "Round-the-clock security monitoring and access control",
      icon: Shield
    },
    {
      name: "Room Service",
      description: "Nutritious meals delivered directly to your room",
      icon: Coffee
    },
    {
      name: "Emergency Call System",
      description: "Immediate response system for medical emergencies",
      icon: Phone
    }
  ];

  const roomFeatures = [
    "Adjustable medical bed with side rails",
    "Private bathroom with safety features",
    "Individual climate control system",
    "Bedside table with storage drawer",
    "Comfortable visitor seating",
    "Medical gas outlets (oxygen, suction)",
    "Nurse call system within easy reach",
    "Personal safe for valuables",
    "Adequate lighting for reading",
    "Privacy curtains and window blinds",
    "Telephone with direct outside line",
    "Television with premium channels"
  ];

  const safetyFeatures = [
    "Anti-slip flooring throughout",
    "Grab bars in bathroom areas", 
    "Emergency pull cords in bathroom",
    "Non-removable shower seats",
    "Rounded corners on all furniture",
    "Automatic emergency lighting",
    "Fire suppression system",
    "HEPA air filtration system"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Comfortable Room Details</h1>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                Our patient rooms are designed with comfort, safety, and healing in mind. 
                Each space provides a peaceful environment that promotes recovery while 
                maintaining the highest standards of medical care.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-500 rounded-full p-3">
                  <Bed className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Premium Accommodations</p>
                  <p className="text-emerald-100 text-sm">Designed for comfort and optimal healing</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1567622153803-4526f47899d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMHJvb20lMjBtZWRpY2FsJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzU4MTc1NzE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hospital room medical facility"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Room Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of carefully designed rooms to meet your comfort preferences and care needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roomTypes.map((room, index) => (
              <div key={index} className={`relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 ${room.popular ? 'border-emerald-500' : 'border-gray-100'}`}>
                {room.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Bed className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{room.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{room.description}</p>
                  <div className="text-2xl font-bold text-emerald-600 mb-4">{room.price}</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Size:</span>
                    <span className="font-semibold">{room.size}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Capacity:</span>
                    <span className="font-semibold">{room.capacity}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                  Reserve Room
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard Amenities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Standard Amenities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every room includes these essential amenities to ensure your comfort and convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {standardAmenities.map((amenity, index) => {
              const IconComponent = amenity.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <IconComponent className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{amenity.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{amenity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Room Features & Safety */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Room Features */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Room Features</h2>
              <div className="space-y-4">
                {roomFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Features */}
            <div className="bg-emerald-600 rounded-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-8">Safety Features</h2>
              <p className="text-emerald-100 mb-6">
                Patient safety is our top priority. Every room is equipped with comprehensive 
                safety features designed to prevent accidents and ensure immediate assistance when needed.
              </p>
              <div className="space-y-4">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-emerald-200 flex-shrink-0 mt-1" />
                    <span className="text-emerald-100">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your stay with our optional premium services and amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Family Consultation</h3>
              <p className="text-gray-600 mb-4">Private meeting rooms for family discussions with medical staff.</p>
              <p className="text-emerald-600 font-semibold">$50/session</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <Coffee className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Dining</h3>
              <p className="text-gray-600 mb-4">Upgraded meal options with dietary customization and room service.</p>
              <p className="text-emerald-600 font-semibold">$35/day</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <Bath className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Spa Services</h3>
              <p className="text-gray-600 mb-4">Therapeutic massage and relaxation treatments in your room.</p>
              <p className="text-emerald-600 font-semibold">$75/session</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Reserve Your Room?</h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Our patient coordinators are standing by to help you select the perfect room 
            and arrange all the details for your stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Reserve Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Schedule Tour
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}