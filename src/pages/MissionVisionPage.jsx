// import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';
import { ImageWithFallback } from '../components/figma/ImageWithFallback.jsx';
import { Heart, Target, Users, Award, Shield, Globe } from 'lucide-react';
import img1 from '../assets/mission.jpg';
import Header from '../components/Header.jsx';
export function MissionVisionPage() {
  const values = [
    {
      title: "Compassion",
      description: "Every interaction is guided by genuine care and understanding for our clients and their families.",
      icon: Heart
    },
    {
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, continuously improving our services.",
      icon: Award
    },
    {
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices in all our relationships.",
      icon: Shield
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and methods to enhance the quality of care we provide.",
      icon: Target
    },
    {
      title: "Community",
      description: "We believe in building strong relationships within the communities we serve.",
      icon: Users
    },
    {
      title: "Accessibility",
      description: "Quality healthcare should be available to everyone, regardless of their circumstances.",
      icon: Globe
    }
  ];

  const achievements = [
    { number: "15+", label: "Years of Service" },
    { number: "10,000+", label: "Families Served" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Mission & Vision</h1>
            <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
              Driven by purpose and guided by compassion, we're dedicated to transforming 
              healthcare delivery for seniors and their families across the nation.
            </p>
          </div>
        </div>
      </section>

      
      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">🌟</span>
                <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
                <p>
                  <strong className="text-green-600">To ensure the holistic, rights-based well-being of senior citizens</strong>—empowering them to remain physically healthy, mentally refreshed, emotionally joyful, and free from anxiety and distress.
                </p>
                <p>
                  Through this comprehensive support, they can continuously contribute to the progress of society and the nation with the richness of their lifelong experience. We believe that seniors are not just recipients of care, but valuable contributors whose wisdom and expertise should be honored and utilized.
                </p>
                <p>
                  Our vision encompasses creating an inclusive, age-friendly society where every senior citizen can live with dignity, purpose, and joy while maintaining their independence and connection to their communities.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={img1} 
                alt="Senior citizen with grey hair enjoying life"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">🎯</span>
                <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
                <p>
                  <strong className="text-green-600">To ensure comprehensive care and dignity for senior citizens</strong> by providing essential protection, housing, nutrition, clothing, comfort, entertainment, medical services, and rehabilitation.
                </p>
                <p>
                  We are committed to creating employment opportunities for physically capable yet economically disadvantaged elders, recognizing that meaningful work contributes to their sense of purpose and well-being.
                </p>
                <p>
                  Our mission extends beyond individual care to building a society and nation that is inclusive, age-friendly, and respectful of the wisdom and contributions of all generations. We strive to create an environment where aging is celebrated and seniors are valued as integral members of our communities.
                </p>
              </div>
            </div>
            <div className="lg:order-1 relative">
              <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Core Services</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Heart className="w-6 h-6 text-green-200 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block">Essential Care</strong>
                      <span className="text-green-100">Housing, nutrition, clothing & comfort</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-green-200 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block">Medical Services</strong>
                      <span className="text-green-100">Healthcare & rehabilitation support</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-green-200 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block">Employment Opportunities</strong>
                      <span className="text-green-100">Meaningful work for capable elders</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Globe className="w-6 h-6 text-green-200 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block">Community Building</strong>
                      <span className="text-green-100">Creating inclusive, age-friendly society</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and the trust placed in us by families.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-emerald-200 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Us in Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Whether you're seeking care for a loved one or interested in joining our team, 
            we invite you to be part of our vision for better senior healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
              Learn About Our Services
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors">
              Career Opportunities
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}