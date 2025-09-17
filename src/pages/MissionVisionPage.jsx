import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';
import { ImageWithFallback } from '../components/figma/ImageWithFallback.jsx';
import { Heart, Target, Users, Award, Shield, Globe } from 'lucide-react';

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

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
                <p>
                  <strong className="text-emerald-600">To provide exceptional, compassionate healthcare services</strong> that 
                  enable seniors to live with dignity, independence, and joy in the comfort of their own homes.
                </p>
                <p>
                  We are committed to delivering personalized care solutions that address the unique needs 
                  of each individual while supporting their families through every step of the journey. 
                  Our comprehensive approach combines medical expertise with genuine human connection to 
                  create meaningful improvements in quality of life.
                </p>
                <p>
                  Through innovative care practices, continuous education, and unwavering dedication to 
                  excellence, we strive to set the standard for home-based senior care services.
                </p>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1632556719027-a2e7fa84d587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXNzaW9uJTIwdmlzaW9uJTIwaGVhbHRoY2FyZSUyMGdvYWxzfGVufDF8fHx8MTc1ODA5Mjc3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthcare team mission and vision"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
                <p>
                  <strong className="text-emerald-600">To be the leading provider of home-based senior care services</strong>, 
                  recognized for our innovation, compassion, and unwavering commitment to improving lives.
                </p>
                <p>
                  We envision a future where aging in place is not just possible, but preferred—where 
                  seniors can maintain their independence, dignity, and connection to their communities 
                  while receiving the highest quality of care.
                </p>
                <p>
                  Our vision extends beyond individual care to creating a healthier, more supportive 
                  society where aging is celebrated, families are empowered, and every senior has 
                  access to the resources they need to thrive.
                </p>
              </div>
            </div>
            <div className="lg:order-1 relative">
              <div className="bg-emerald-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Vision Goals for 2030</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Target className="w-6 h-6 text-emerald-200 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block">Expand Nationwide</strong>
                      <span className="text-emerald-100">Serve communities in all 50 states</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Heart className="w-6 h-6 text-emerald-200 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block">100,000 Families</strong>
                      <span className="text-emerald-100">Impact 100,000+ families with our services</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-emerald-200 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block">Industry Leadership</strong>
                      <span className="text-emerald-100">Set new standards for quality and innovation</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Globe className="w-6 h-6 text-emerald-200 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block">Technology Integration</strong>
                      <span className="text-emerald-100">Pioneer AI and telehealth solutions</span>
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