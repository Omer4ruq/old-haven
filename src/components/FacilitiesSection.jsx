import { ImageWithFallback } from './figma/ImageWithFallback.jsx';
import { 
  Bed, 
  Users, 
  Shield, 
  Armchair, 
  AlertTriangle, 
  Heart, 
  UtensilsCrossed, 
  Brain, 
  Church, 
  Palette, 
  BookOpen, 
  Bath, 
  FileText, 
  Sprout,
  Flower2
} from 'lucide-react';

export function FacilitiesSection() {
  const facilities = [
    {
      id: 1,
      emoji: "🛏️",
      title: "Adjustable Beds for Comfort & Safety",
      description: "Electric beds with memory foam mattresses reduce pressure sores and support restful sleep.",
      icon: Bed,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      emoji: "♿",
      title: "Mobility Support (Wheelchairs & Walkers)",
      description: "Lightweight, ergonomic mobility aids elders move independently and safely.",
      icon: Users,
      color: "bg-green-100 text-green-600"
    },
    {
      id: 3,
      emoji: "🚿",
      title: "Bathroom Safety Installations",
      description: "Grab bars, anti-slip mats, and raised toilet seats prevent falls and promote dignity.",
      icon: Bath,
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: 4,
      emoji: "🪑",
      title: "Lift Chairs & Recliners",
      description: "Power recliners with massage and heat features ease joint pain and improve relaxation.",
      icon: Armchair,
      color: "bg-orange-100 text-orange-600"
    },
    {
      id: 5,
      emoji: "📟",
      title: "Medical Alert Systems",
      description: "24/7 emergency response devices ensure immediate help during health crises.",
      icon: AlertTriangle,
      color: "bg-red-100 text-red-600"
    },
    {
      id: 6,
      emoji: "🩺",
      title: "Regular Health Monitoring",
      description: "Routine checkups, blood pressure tracking, and chronic disease management by certified professionals.",
      icon: Heart,
      color: "bg-pink-100 text-pink-600"
    },
    {
      id: 7,
      emoji: "🍲",
      title: "Culturally Appropriate Nutrition Plans",
      description: "Balanced meals tailored to Bangladeshi tastes and dietary needs—diabetic-friendly, heart-healthy, etc.",
      icon: UtensilsCrossed,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      id: 8,
      emoji: "🧘",
      title: "Mental Health & Emotional Support",
      description: "Counseling, mindfulness sessions, and peer companionship to combat loneliness and depression.",
      icon: Brain,
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      id: 9,
      emoji: "🕌",
      title: "Spiritual & Religious Engagement",
      description: "Prayer spaces, Quran recitation, and religious gatherings to nurture spiritual wellbeing.",
      icon: Church,
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      id: 10,
      emoji: "🎨",
      title: "Recreational Activities & Hobbies",
      description: "Storytelling, gardening, music, and crafts to stimulate creativity and joy.",
      icon: Palette,
      color: "bg-teal-100 text-teal-600"
    },
    {
      id: 11,
      emoji: "📚",
      title: "Intergenerational Learning Programs",
      description: "Youth volunteers engage elders in tech literacy, storytelling, and cultural exchange.",
      icon: BookOpen,
      color: "bg-cyan-100 text-cyan-600"
    },
    {
      id: 12,
      emoji: "🧼",
      title: "Personal Hygiene & Grooming Assistance",
      description: "Gentle support with bathing, dressing, and grooming to maintain dignity and self-esteem.",
      icon: Bath,
      color: "bg-sky-100 text-sky-600"
    },
    {
      id: 13,
      emoji: "🧾",
      title: "Legal & Financial Guidance",
      description: "Help with pensions, property rights, guardianship, and transparent documentation.",
      icon: FileText,
      color: "bg-slate-100 text-slate-600"
    },
    {
      id: 14,
      emoji: "🧑‍⚕️",
      title: "Farming Activities to Keep Them Busy",
      description: "For our elderly to keep them busy we will have different kinds of farming activities to maintain their physical and mental engagement.",
      icon: Sprout,
      color: "bg-lime-100 text-lime-600"
    },
    {
      id: 15,
      emoji: "🕊️",
      title: "End-of-Life Care & Legacy Planning",
      description: "Palliative care, funeral support, and legacy documentation aligned with cultural values.",
      icon: Flower2,
      color: "bg-rose-100 text-rose-600"
    }
  ];

  // Featured facilities for visual showcase
  const featuredFacilities = [
    {
      title: "Culturally Appropriate Care",
      description: "Our facilities are designed with Bangladeshi culture and traditions in mind, ensuring comfort and familiarity.",
      image: "https://images.unsplash.com/photo-1635301305776-c8cac70cf837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5nbGFkZXNoJTIwZWxkZXJseSUyMGNhcmUlMjBudXJzaW5nfGVufDF8fHx8MTc1ODYyOTA4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Traditional Farming Activities",
      description: "Therapeutic farming programs that connect elders with nature and traditional agricultural practices.",
      image: "https://images.unsplash.com/photo-1661258260257-32ac495ec503?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5nbGFkZXNoJTIwdHJhZGl0aW9uYWwlMjBmYXJtaW5nJTIwYWdyaWN1bHR1cmV8ZW58MXx8fHwxNzU4NjI5MDg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Spiritual Wellness Center",
      description: "Dedicated prayer spaces and spiritual guidance that honor Islamic traditions and cultural values.",
      image: "https://images.unsplash.com/photo-1705320941669-4909d97cb5cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5nbGFkZXNoJTIwbW9zcXVlJTIwcHJheWVyJTIwc3Bpcml0dWFsfGVufDF8fHx8MTc1ODYyOTA5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Traditional Nutrition Program",
      description: "Authentic Bangladeshi cuisine prepared with health-conscious adaptations for elderly dietary needs.",
      image: "https://images.unsplash.com/photo-1592093144703-3b05233ed433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGFzaWFuJTIwdHJhZGl0aW9uYWwlMjBmb29kJTIwbnV0cml0aW9ufGVufDF8fHx8MTc1ODYyOTA5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Comprehensive Facilities</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Experience culturally-sensitive elder care with modern amenities designed specifically for 
            the Bangladeshi community, combining traditional values with contemporary healthcare excellence
          </p>
        </div>

        {/* Featured Visual Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {featuredFacilities.map((facility, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-bold text-lg mb-2">{facility.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Complete Facilities Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Complete Care Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility) => {
              const IconComponent = facility.icon;
              return (
                <div key={facility.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${facility.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-2xl">{facility.emoji}</span>
                        <h4 className="font-bold text-gray-900 text-lg">{facility.title}</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm">{facility.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Special Focus Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Cultural Integration */}
          <div className="bg-emerald-50 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <Church className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Cultural & Spiritual Care</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Islamic Prayer Facilities</h4>
                  <p className="text-gray-600 text-sm">Dedicated prayer rooms facing Qibla with proper ablution facilities</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Bengali Language Support</h4>
                  <p className="text-gray-600 text-sm">All staff trained in Bengali language and cultural sensitivity</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Traditional Festivals</h4>
                  <p className="text-gray-600 text-sm">Celebration of Eid, Pohela Boishakh, and other cultural events</p>
                </div>
              </div>
            </div>
          </div>

          {/* Therapeutic Farming Program */}
          <div className="bg-green-50 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Sprout className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Therapeutic Farming</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Vegetable Gardens</h4>
                  <p className="text-gray-600 text-sm">Grow traditional vegetables like bottle gourd, okra, and eggplant</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Fish Pond Management</h4>
                  <p className="text-gray-600 text-sm">Small-scale fish farming activities for engagement and nutrition</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Herbal Medicine Garden</h4>
                  <p className="text-gray-600 text-sm">Traditional medicinal plants like tulsi, neem, and ginger cultivation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-emerald-600 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Our Impact</h3>
            <p className="text-emerald-100 text-lg max-w-3xl mx-auto">
              Creating a meaningful difference in the lives of Bangladeshi elders through comprehensive, culturally-sensitive care
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-emerald-200">Emergency Response</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-emerald-200">Comprehensive Services</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-emerald-200">Cultural Sensitivity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">365</div>
              <div className="text-emerald-200">Days Quality Care</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Experience Our Facilities</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Schedule a visit to see our state-of-the-art facilities designed specifically for the Bangladeshi elderly community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
              Schedule Facility Tour
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors">
              Download Facilities Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}