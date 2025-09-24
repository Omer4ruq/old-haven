import React from 'react';
import { Stethoscope, Home, Users, Clock, Heart, Utensils, FileText, Palette, Cross } from 'lucide-react';

const ElderServicesSection = () => {
  const lifecycleServices = [
    {
      icon: Stethoscope,
      title: "Health Assessment & Profiling",
      description: "Comprehensive medical, psychological, and social evaluation including chronic disease screening, mobility assessment, and cognitive health monitoring.",
      phase: "🧬",
      details: ["Medical evaluations", "Psychological assessments", "Mobility testing", "Cognitive screening"]
    },
    {
      icon: Home,
      title: "Home Environment Optimization",
      description: "Safety audits for fall prevention, accessibility improvements, and emergency readiness with assistive technologies integration.",
      phase: "🏠",
      details: ["Fall prevention audits", "Accessibility modifications", "Emergency systems", "Assistive technology setup"]
    },
    {
      icon: Users,
      title: "Personalized Care Planning",
      description: "Tailored care plans based on health status, family dynamics, and cultural preferences with healthcare provider coordination.",
      phase: "👨‍⚕️",
      details: ["Custom care plans", "Family coordination", "Cultural considerations", "Provider network integration"]
    },
    {
      icon: Clock,
      title: "Flexible Medical & Support Services",
      description: "On-demand doctor visits, telemedicine, nursing care, physiotherapy, mental health counseling, and palliative care services.",
      phase: "🕰️",
      details: ["Telemedicine consultations", "Home nursing", "Physiotherapy", "Mental health support"]
    },
    {
      icon: Heart,
      title: "Family & Community Engagement",
      description: "Caregiver training, family member education, community-based support groups, and intergenerational programs.",
      phase: "👪",
      details: ["Caregiver training", "Family education", "Support groups", "Community programs"]
    },
    {
      icon: Utensils,
      title: "Nutrition & Lifestyle Management",
      description: "Culturally appropriate diet plans with local ingredients and daily routines promoting physical activity, prayer, and social interaction.",
      phase: "🍛",
      details: ["Cultural diet planning", "Local ingredient focus", "Activity programs", "Spiritual wellness"]
    },
    {
      icon: FileText,
      title: "Legal & Financial Safeguards",
      description: "Assistance with wills, guardianship, pension access, property rights, transparent documentation, and elder protection advocacy.",
      phase: "📋",
      details: ["Legal documentation", "Financial planning", "Property rights", "Elder law advocacy"]
    },
    {
      icon: Palette,
      title: "Emotional & Recreational Wellbeing",
      description: "Activities like storytelling, gardening, music, religious gatherings, peer networks, and spiritual counseling support.",
      phase: "🎨",
      details: ["Creative activities", "Spiritual programs", "Social engagement", "Peer support networks"]
    },
    {
      icon: Cross,
      title: "End-of-Life Dignity & Legacy Planning",
      description: "Hospice care, funeral planning, legacy documentation, and respectful closure aligned with religious and cultural values.",
      phase: "⚰️",
      details: ["Hospice care", "Legacy planning", "Cultural ceremonies", "Family support"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl">🇧🇩</span>
            <h2 className="text-4xl font-bold text-gray-900">Elderly Care Lifecycle Framework</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive approach covers every stage of elderly care, from initial health assessment 
            through end-of-life dignity, ensuring culturally sensitive and personalized support throughout 
            the entire care journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lifecycleServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="p-8">
                {/* Phase indicator and icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    {service.phase}
                  </div>
                </div>

                {/* Service title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Service details */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Key Components:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-gray-600 leading-tight">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Additional Information Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Culturally Sensitive Care</h3>
              <p className="text-gray-600">
                All our services are designed with deep respect for Bangladeshi culture, traditions, 
                and religious values, ensuring comfort and familiarity.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Family-Centered Approach</h3>
              <p className="text-gray-600">
                We actively involve family members in care decisions and provide comprehensive 
                support and education to create a strong care network.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Improvement</h3>
              <p className="text-gray-600">
                Our framework evolves based on feedback, research, and changing needs to ensure 
                the highest quality of care throughout the lifecycle.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105">
              Start Your Care Journey
            </button>
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Download Framework Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElderServicesSection;