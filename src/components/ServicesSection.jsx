import { Heart, Shield, Users, Clock, Stethoscope, Home } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Tailored healthcare plans designed specifically for each individual's unique needs and preferences."
    },
    {
      icon: Shield,
      title: "24/7 Medical Support",
      description: "Round-the-clock medical assistance and emergency response for complete peace of mind."
    },
    {
      icon: Users,
      title: "Family Care Team",
      description: "Dedicated care coordinators who work closely with families to ensure the best outcomes."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Convenient appointment times that work with your schedule and lifestyle requirements."
    },
    {
      icon: Stethoscope,
      title: "Medical Expertise",
      description: "Board-certified physicians and specialists providing comprehensive healthcare services."
    },
    {
      icon: Home,
      title: "Home Care Services",
      description: "Professional in-home care services bringing quality healthcare to your doorstep."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Comprehensive Healthcare Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a full range of healthcare services designed to meet the unique needs 
            of seniors and their families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}