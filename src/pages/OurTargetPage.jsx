import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';
import { ImageWithFallback } from '../components/figma/ImageWithFallback.jsx';
import { Users, Heart, Home, UserCheck, Shield, Clock } from 'lucide-react';

export function OurTargetPage() {
  const targetGroups = [
    {
      title: "Seniors (65+)",
      description: "Independent seniors who prefer to age in place while maintaining their quality of life.",
      icon: Users,
      details: [
        "Ages 65 and older",
        "Living independently or semi-independently",
        "Requiring assistance with daily activities",
        "Managing chronic health conditions",
        "Seeking companionship and social engagement"
      ],
      percentage: "75%"
    },
    {
      title: "Families & Caregivers",
      description: "Adult children and family members seeking quality care solutions for their loved ones.",
      icon: UserCheck,
      details: [
        "Adult children living out of state",
        "Working professionals with caregiving responsibilities",
        "Families seeking respite care",
        "First-time caregivers needing guidance",
        "Families planning for future care needs"
      ],
      percentage: "85%"
    },
    {
      title: "Transitional Care Patients",
      description: "Individuals recovering from hospital stays or medical procedures requiring temporary support.",
      icon: Shield,
      details: [
        "Post-surgery recovery patients",
        "Hospital discharge planning",
        "Rehabilitation support",
        "Medication management assistance",
        "Physical therapy compliance"
      ],
      percentage: "65%"
    },
    {
      title: "Chronic Care Management",
      description: "Individuals with ongoing health conditions requiring consistent monitoring and support.",
      icon: Heart,
      details: [
        "Diabetes management",
        "Heart disease monitoring",
        "Alzheimer's and dementia care",
        "Mobility and fall prevention",
        "Medication adherence support"
      ],
      percentage: "80%"
    }
  ];

  const demographics = [
    { label: "Primary Age Range", value: "65-85 years" },
    { label: "Geographic Coverage", value: "Metropolitan & Suburban Areas" },
    { label: "Income Level", value: "Middle to Upper-Middle Class" },
    { label: "Insurance", value: "Medicare, Private, Long-term Care" },
    { label: "Family Structure", value: "Adult Children as Decision Makers" },
    { label: "Health Status", value: "Mild to Moderate Care Needs" }
  ];

  const serviceAreas = [
    {
      area: "Urban Centers",
      description: "Downtown and city areas with high-rise living and urban amenities",
      coverage: "90%"
    },
    {
      area: "Suburban Communities",
      description: "Residential neighborhoods with single-family homes and established communities",
      coverage: "95%"
    },
    {
      area: "Senior Living Communities",
      description: "Independent living facilities and 55+ communities",
      coverage: "100%"
    },
    {
      area: "Rural Areas",
      description: "Small towns and countryside locations with limited healthcare access",
      coverage: "60%"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Our Target Audience</h1>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                We serve a diverse community of seniors, families, and healthcare partners who 
                share our vision of dignified, compassionate care that enables aging in place 
                with confidence and independence.
              </p>
              <div className="bg-emerald-500 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Who We Serve</h3>
                <p className="text-emerald-100">
                  Over 50,000 seniors and families across 15 states, providing personalized 
                  care solutions that meet unique needs and circumstances.
                </p>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1738454738501-7e6626ccfcd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJnZXQlMjBhdWRpZW5jZSUyMGVsZGVybHklMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc1ODA5Mjc3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our target audience - seniors and families"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Target Groups */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Primary Target Groups</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our services are designed to meet the specific needs of four key demographics, 
              each with unique challenges and care requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {targetGroups.map((group, index) => {
              const IconComponent = group.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                        <IconComponent className="w-8 h-8 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{group.title}</h3>
                        <div className="text-sm text-emerald-600 font-semibold">
                          {group.percentage} of our client base
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{group.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Characteristics:</h4>
                      {group.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demographics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Demographics Overview</h2>
              <div className="space-y-4">
                {demographics.map((demo, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-900">{demo.label}</span>
                    <span className="text-emerald-600 font-medium">{demo.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-emerald-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Client Profile</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our typical client is a 75-year-old senior living independently in a suburban home, 
                  with adult children who live within 50 miles. They value their independence but 
                  recognize the need for support with daily activities and health management.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-emerald-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Home className="w-6 h-6 text-emerald-200 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block">Aging in Place</strong>
                      <span className="text-emerald-100">Enable seniors to remain in familiar surroundings</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart className="w-6 h-6 text-emerald-200 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block">Personalized Care</strong>
                      <span className="text-emerald-100">Tailored services that adapt to changing needs</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-emerald-200 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block">Peace of Mind</strong>
                      <span className="text-emerald-100">Professional oversight and family communication</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-emerald-200 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block">24/7 Support</strong>
                      <span className="text-emerald-100">Round-the-clock availability for emergencies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Geographic Coverage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide services across diverse geographic areas, adapting our approach 
              to meet the unique needs of each community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{area.area}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-emerald-600 h-2 rounded-full" 
                      style={{ width: area.coverage }}
                    ></div>
                  </div>
                  <div className="text-sm text-emerald-600 font-semibold mt-1">{area.coverage} Coverage</div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Are You Our Next Client?</h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            If you're a senior seeking to maintain independence at home, or a family member 
            looking for trusted care solutions, we're here to help you navigate this journey with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Schedule a Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Download Our Guide
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}