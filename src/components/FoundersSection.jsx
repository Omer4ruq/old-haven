import { ImageWithFallback } from './figma/ImageWithFallback.jsx';
import { Crown, Users, TrendingUp, Heart, Network, Award, Globe, HandHeart, Star } from 'lucide-react';
export function FoundersSection() {
  const founders = [
    {
      name: "Dr. SaLeh Faruq",
      role: "Chief Executive Officer & Co-Founder",
      image: "https://www.the100indianmuslims.com/upld/blog/92/abdul-kader-fazlani.jpg",
      bio: "With over 20 years of experience in geriatric medicine, Dr. Mitchell founded HealthCare with a vision to revolutionize senior care. Her dedication to compassionate healthcare has transformed thousands of lives."
    },
    {
      name: "Michael Thompson",
      role: "Chief Operations Officer & Co-Founder",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMG1hbGV8ZW58MXx8fHwxNzU3ODQwNTMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Michael brings extensive healthcare administration expertise, ensuring our operations run seamlessly. His strategic leadership has expanded our services to reach more families in need."
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Chief Medical Officer & Co-Founder",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc1Nzg0MDUzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Specializing in preventive care and family medicine, Dr. Rodriguez ensures our medical standards exceed industry expectations. Her patient-first approach defines our care philosophy."
    }
  ];
const founderBenefits = [
    {
      icon: Crown,
      title: "Legacy Leadership",
      description: "Be recognized as a founding architect of a transformative healthcare movement, your name will be etched into the DNA of the organization and its future impact.",
      highlight: "Historical Recognition"
    },
    {
      icon: Users,
      title: "Strategic Decision-Making Power",
      description: "Founders will actively shape the organization's policies, service models, and expansion strategy through direct consultation and execution roles.",
      highlight: "Leadership Authority"
    },
    {
      icon: TrendingUp,
      title: "Priority Investment Returns",
      description: "Initial investors will receive privileged access to financial returns, equity options, and reinvestment opportunities as the organization scales.",
      highlight: "Financial Benefits"
    },
    {
      icon: Heart,
      title: "Vision & Mission Ownership",
      description: "Founders co-create and champion the core values, vision, and mission—ensuring the organization remains purpose-driven and socially impactful.",
      highlight: "Purpose-Driven Impact"
    },
    {
      icon: Network,
      title: "Access to Expert Networks",
      description: "Gain exclusive access to national and international advisors, medical experts, and strategic partners curated for long-term growth and innovation.",
      highlight: "Global Connections"
    },
    {
      icon: Award,
      title: "Customized Role & Recognition",
      description: "Each founder's expertise will be honored through tailored roles, whether in branding, legal oversight, medical strategy, or operational leadership.",
      highlight: "Personalized Leadership"
    },
    {
      icon: Globe,
      title: "Influence in Scaling & Replication",
      description: "Founders will guide regional expansion, franchise models, and cross-border collaborations, especially in labor-exporting and diaspora communities.",
      highlight: "Global Expansion"
    },
    {
      icon: HandHeart,
      title: "Social Impact & Community Trust",
      description: "Be part of a movement that restores dignity, care, and protection for the elderly—earning trust from families, communities, and policymakers.",
      highlight: "Community Impact"
    },
    {
      icon: Star,
      title: "Emotional & Cultural Legacy",
      description: "Founders will help embed cultural authenticity, spiritual values, and emotional resonance into every layer of service—making it truly Bangladeshi in soul.",
      highlight: "Cultural Heritage"
    }
  ];
  return (
   <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Current Leadership */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl">🇧🇩</span>
            <h2 className="text-4xl font-bold text-gray-900">Life Log Care Initiative</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our founding team to build Bangladesh's most comprehensive elder care ecosystem. 
            Together, we're creating a legacy of dignity, compassion, and cultural authenticity.
          </p>
        </div>

        {/* Current Founders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {founders.map((founder, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 ${founder.isOpen ? 'border-green-200 border-dashed' : 'border-gray-100'}`}>
              <div className="relative">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className={`w-full h-64 object-cover ${founder.isOpen ? 'opacity-60' : ''}`}
                />
                {founder.isOpen && (
                  <div className="absolute inset-0 bg-green-600/20 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-green-600 font-bold text-lg text-center">Join Our Team</div>
                    </div>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{founder.name}</h3>
                  <p className="text-green-200">{founder.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">{founder.bio}</p>
                
                {founder.isOpen && (
                  <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors duration-200">
                    Apply for This Position
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Founder Benefits Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-2xl mr-2">🌟</span>
              9 Reasons to Become a Founder Member
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join the Life Log Care Initiative and shape the future of elder care in Bangladesh. 
              Here's what founding membership offers:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {founderBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                      <benefit.icon className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900">{benefit.title}</h4>
                      <span className="text-2xl font-bold text-green-600 opacity-70">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-2">
                      {benefit.highlight}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="text-center">
          <div className="bg-green-50 rounded-2xl p-8 max-w-4xl mx-auto border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Founding Vision</h3>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                "We envision a healthcare environment where elderly individuals receive not only medical attention, 
                but also genuine compassion, dignity, and respect. Every family deserves peace of mind—knowing 
                their loved ones are safe, cared for, and in trusted hands."
              </p>
              <p>
                "Our mission is to build a lifelong care institution rooted in the values, culture, and humanity 
                of Bangladesh. We believe elder care is not just a responsibility—it is a privilege and a moral 
                duty to honor those who shaped our society."
              </p>
            </div>
            <div className="mt-6 flex items-center justify-center space-x-2">
              <span className="text-green-600 font-semibold">- Life Log Care Initiative Founders</span>
              <span className="text-2xl">🇧🇩</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center space-x-2">
              <Crown className="w-5 h-5" />
              <span>Become a Founding Member</span>
            </button>
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Schedule Founder Meeting</span>
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-600 max-w-2xl mx-auto">
            Limited founding positions available. Join us in creating Bangladesh's premier elder care institution 
            that honors our cultural values while setting international standards.
          </p>
        </div>
      </div>
    </section>
  );
}