// import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import { ImageWithFallback } from '../components/figma/ImageWithFallback.jsx';
import { Users, Heart, Home, UserCheck, Shield, Clock, Microscope, Building, BookOpen, HandHeart, Megaphone, Globe } from 'lucide-react';

export function OurTargetPage() {
const strategicObjectives = [
    {
      title: "Evidence-Based Research & Sustainable Solutions",
      description: "Conduct in-depth research on the socio-economic and health conditions of the elderly, including disease prevalence, underlying causes, and the effectiveness of existing healthcare systems—leading to actionable, long-term solutions.",
      icon: Microscope,
      number: "01"
    },
    {
      title: "Establishment of a Geriatrics Institute",
      description: "Launch and operate a dedicated institute to deliver specialized medical services, facilitate expert referrals, and offer academic programs in aging, gerontology, and elder care.",
      icon: Building,
      number: "02"
    },
    {
      title: "Residential & Home-Based Elder Care",
      description: "Develop comprehensive residential facilities for senior citizens and implement tailored home care programs that ensure comfort, safety, and personalized support.",
      icon: Home,
      number: "03"
    },
    {
      title: "Training & Digital Outreach",
      description: "Utilize social media and online platforms to organize diverse training initiatives on aging and elder care, while strengthening family- and community-based service systems that promote holistic well-being.",
      icon: BookOpen,
      number: "04"
    },
    {
      title: "Collaborative Partnerships",
      description: "Build strategic alliances with national and international government and non-government organizations actively engaged in elder welfare, fostering joint efforts to address challenges and deliver impactful services.",
      icon: HandHeart,
      number: "05"
    },
    {
      title: "Awareness & Advocacy",
      description: "Promote awareness and engagement among policymakers, planners, healthcare professionals, community leaders, and the public regarding the evolving needs and rights of senior citizens.",
      icon: Megaphone,
      number: "06"
    }
  ];

  const impactAreas = [
    {
      title: "Dignity & Health",
      description: "Advancing the fundamental right to dignified healthcare and quality of life for all senior citizens",
      icon: Heart,
      stats: "100% Focus"
    },
    {
      title: "Social Inclusion",
      description: "Ensuring elderly individuals remain integral, valued members of their communities and society",
      icon: Users,
      stats: "Community-Wide"
    },
    {
      title: "Evidence-Based Care",
      description: "Research-driven approaches that address root causes and deliver measurable outcomes",
      icon: Shield,
      stats: "Data-Driven"
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
  const partnerships = [
    {
      category: "Government Organizations",
      description: "Strategic alliances with national health departments and aging services",
      coverage: "National Level"
    },
    {
      category: "International NGOs",
      description: "Collaborative partnerships with global organizations focused on elder welfare",
      coverage: "Global Reach"
    },
    {
      category: "Academic Institutions",
      description: "Research partnerships with universities and medical schools for gerontology programs",
      coverage: "Educational Network"
    },
    {
      category: "Healthcare Systems",
      description: "Integration with existing healthcare providers and specialized geriatric services",
      coverage: "Healthcare Network"
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
              <h1 className="text-5xl font-bold mb-6">Our Strategic Objectives</h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Our initiative is committed to advancing the dignity, health, and social inclusion 
                of senior citizens through comprehensive, evidence-based approaches that create 
                sustainable solutions for elder care challenges.
              </p>
              <div className="bg-green-500 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Our Core Mission</h3>
                <p className="text-green-100">
                  Transform elder care through research, innovation, and collaborative partnerships 
                  that ensure every senior citizen lives with dignity and purpose.
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
      {/* <section className="py-20 bg-gray-50">
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
      </section> */}
       {/* Impact Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Impact Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic objectives focus on three fundamental areas that drive meaningful 
              change in the lives of senior citizens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>
                  <div className="text-green-600 font-semibold">{area.stats}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Research-Driven Approach</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Microscope className="w-8 h-8 text-green-200 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Evidence-Based Solutions</h3>
                    <p className="text-green-100">
                      In-depth research on socio-economic and health conditions of the elderly, 
                      including disease prevalence and healthcare system effectiveness.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Building className="w-8 h-8 text-green-200 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Geriatrics Institute</h3>
                    <p className="text-green-100">
                      Dedicated institute delivering specialized medical services, expert referrals, 
                      and academic programs in aging and gerontology.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <BookOpen className="w-8 h-8 text-green-200 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Digital Training Programs</h3>
                    <p className="text-green-100">
                      Online platforms and social media initiatives for comprehensive 
                      training on aging and elder care best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Service Delivery</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Home className="w-6 h-6 text-green-200 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block">Residential Facilities</strong>
                    <span className="text-green-100">Comprehensive residential facilities designed for senior citizen comfort and safety</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-green-200 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block">Home-Based Care</strong>
                    <span className="text-green-100">Tailored home care programs ensuring personalized support and comfort</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-green-200 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block">Community Systems</strong>
                    <span className="text-green-100">Family and community-based service systems promoting holistic well-being</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="w-6 h-6 text-green-200 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block">Global Standards</strong>
                    <span className="text-green-100">International best practices adapted for local community needs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Strategic Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building alliances with national and international organizations to create 
              comprehensive support networks for elder welfare initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partnership, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{partnership.category}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{partnership.description}</p>
                <div className="text-green-600 font-semibold text-sm">{partnership.coverage}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awareness & Advocacy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Awareness & Advocacy</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Promoting awareness and engagement among policymakers, planners, healthcare professionals, 
              community leaders, and the public regarding the evolving needs and rights of senior citizens.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Megaphone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Policymakers</h3>
                <p className="text-gray-600 text-sm">Influencing policy development for senior rights and welfare</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Healthcare Professionals</h3>
                <p className="text-gray-600 text-sm">Training and education on geriatric care best practices</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Community Leaders</h3>
                <p className="text-gray-600 text-sm">Building community support networks and resources</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">General Public</h3>
                <p className="text-gray-600 text-sm">Raising awareness about senior citizen needs and rights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Be part of a comprehensive initiative that's transforming elder care through research, 
            innovation, and collaborative partnerships. Together, we can ensure every senior citizen 
            lives with the dignity and support they deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Partner With Us
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Learn More About Our Research
            </button>
          </div>
        </div>
      </section>
        {/* Strategic Objectives */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Six Strategic Objectives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach addresses every aspect of senior care through targeted 
              objectives that create lasting impact and sustainable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {strategicObjectives.map((objective, index) => {
              const IconComponent = objective.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start mb-6">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                          <IconComponent className="w-8 h-8 text-green-600" />
                        </div>
                        <div className="text-2xl font-bold text-green-600 text-center">{objective.number}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{objective.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{objective.description}</p>
                      </div>
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