import React from 'react';
import { Heart, Users, Leaf, Building2, Stethoscope, Ambulance, UserCheck, Target, DollarSign, Globe, Lightbulb, Home, TreePine, Fish, Wheat } from 'lucide-react';
import bannerImg from '../assets/old/banner.jpg';
import facilites1 from '../assets/old/facilites1.jpg';
import facilities2 from '../assets/old/facilities2.jpg';
import room from '../assets/old/room.png';
import managment from '../assets/old/work managment.png';
import dairy from '../assets/old/dairy.png';
import firming from '../assets/old/firming.png';
import transport from '../assets/old/transport.jpg';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
export function ProjectDetailsBudgetPage  ()  {
  const objectives = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Deliver Comprehensive Elder Care",
      description: "Provide integrated medical, residential, and emotional support services tailored to the physical and psychological needs of senior citizens. This includes 24/7 healthcare, personalized care plans, mental health support, and end-of-life dignity."
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Build a Self-Sustaining Ecosystem Through Agriculture & Aquaculture",
      description: "Develop a vibrant farming and aquaculture environment where elders actively participate in cultivating vegetables, fruits, dairy, poultry, and fish. This not only promotes physical activity and mental wellbeing but also generates fresh produce for internal consumption and external market sales, creating a revenue stream to sustain operations."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Empower Elders Through Purposeful Engagement",
      description: "Enable capable elders to take part in farming, gardening, food processing, and product packaging. Their involvement fosters a sense of purpose, reduces isolation, and promotes active aging. Elders will be recognized as contributors, not dependents."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Establish a Geriatrics Institute",
      description: "Create a center for research, training, and policy advocacy focused on elder health, aging science, and community-based care models. The institute will collaborate with universities, NGOs, and government bodies to elevate national standards."
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Promote Gender-Sensitive Care",
      description: "Design specialized programs for elderly women, especially widows and those without family support. This includes safe housing, emotional counseling, legal protection, and vocational engagement in farming and crafts."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Create Employment for Elders & Local Youth",
      description: "Train and employ elders in farming, aquaculture, and product development while engaging local youth in logistics, digital marketing, and care services. This intergenerational workforce will drive community resilience and economic inclusion."
    }
  ];

  const hospitalInfrastructure = [
    { item: "60-bed geriatric hospital (4 floors)", icon: <Building2 className="w-5 h-5" /> },
    { item: "3 ambulances (2 ICU-equipped)", icon: <Ambulance className="w-5 h-5" /> },
    { item: "Elevator access for patient mobility", icon: <Building2 className="w-5 h-5" /> },
    { item: "100 kVA generator backup power", icon: <Lightbulb className="w-5 h-5" /> },
    { item: "3 full-capacity ICU units", icon: <Heart className="w-5 h-5" /> },
    { item: "6 post-operative recovery rooms", icon: <Home className="w-5 h-5" /> },
    { item: "10 physiotherapy centers across campus", icon: <Users className="w-5 h-5" /> },
    { item: "2 garbage trucks for waste management", icon: <Leaf className="w-5 h-5" /> },
    { item: "3 employee buses for staff transport", icon: <Users className="w-5 h-5" /> },
    { item: "10 executive vehicles for doctors/admin", icon: <UserCheck className="w-5 h-5" /> }
  ];

  const medicalServices = [
    { category: "Outpatient Services", services: ["Geriatrics & General Medicine", "Ophthalmology", "Dentistry", "ENT (Ear, Nose & Throat)", "Cardiology", "Dermatology & Venereology", "Physiotherapy", "Ayurvedic Medicine", "General & Specialized Surgery"] },
    { category: "Advanced Diagnostics", services: ["Ultrasound & 4D Color Ultrasound", "ECG & Holter ECG (24-hour)", "Echocardiography & Color Doppler", "CR X-ray & Digital Radiology", "Full-spectrum pathology lab (8 AM-8 PM)", "Blood transfusion services"] },
    { category: "Evening Services", services: ["General Medicine", "Surgery", "Gynecology & Obstetrics", "ENT", "Orthopedics", "Dermatology & Venereology", "Physiotherapy", "Pathology"] }
  ];

  const staffing = [
    { role: "Experienced Doctors", count: "20", specialty: "Across all medical specialties" },
    { role: "Nurses & Caregivers", count: "70", specialty: "24/7 patient care and support" },
    { role: "Pharmacy Staff", count: "3", specialty: "Medication management & dispensing" },
    { role: "Sanitation Staff", count: "25", specialty: "Facility maintenance & hygiene" },
    { role: "Administrative Officers", count: "10", specialty: "Operations, compliance & coordination" }
  ];

  const agriculturePrograms = [
    { 
      title: "Crop Cultivation", 
      description: "Vegetables: Spinach, okra, pumpkin, tomato, eggplant. Fruits: Banana, papaya, mango, guava. Herbs & Medicinals: Tulsi, neem, aloe vera, ayurvedic plants. Grains: Pilot plots for rice, maize, and lentils.",
      icon: <Wheat className="w-8 h-8" />
    },
    { 
      title: "Livestock & Dairy", 
      description: "Dairy Farm: Cow and goat milk for internal use and commercial sale. Poultry & Duck Farm: Egg and meat production. Goat Rearing: For meat, milk, and organic fertilizer. Bee Farming: Honey production with elder-friendly harvesting.",
      icon: <Heart className="w-8 h-8" />
    },
    { 
      title: "Aquaculture & Irrigation", 
      description: "6 ponds + 1 lake for fish farming (carp, catla, ruie and different types of local fish). Integrated water management system. Elders assist in feeding, netting, and pond-side activities.",
      icon: <Fish className="w-8 h-8" />
    },
    { 
      title: "Vertical Farming Innovation", 
      description: "Multi-tiered hydroponic and soil-based vertical farming units. Space-efficient cultivation of leafy greens, herbs, and microgreens. Climate-controlled zones for year-round production. Solar-powered lighting and irrigation systems.",
      icon: <TreePine className="w-8 h-8" />
    }
  ];

  const pricingStructure = [
    { category: "Elderly Patients", price: "৳100", description: "Special consultation rate for senior citizens" },
    { category: "Members", price: "৳60", description: "Discounted rate for registered members" },
    { category: "General Patients", price: "৳150", description: "Standard consultation fee with specialist prescriptions" }
  ];

  const fundingSources = [
    { source: "Multilateral & Bilateral Donors", examples: "UNFPA, WHO, World Bank, ADB, EU Delegation" },
    { source: "Philanthropic Foundations", examples: "Gates Foundation, Ford Foundation, Wellcome Trust, MacArthur Foundation" },
    { source: "Impact Investors & ESG Funds", examples: "Social impact bonds, blended finance, green infrastructure funds" },
    { source: "Diaspora & Legacy Giving", examples: "Bangladeshi diaspora in UK, US, Canada, Middle East" },
    { source: "Zakat & Faith-Based Financing", examples: "Islamic Relief, Human Appeal, International Zakat institutions" },
    { source: "CSR Partnerships", examples: "National and multinational corporations (banks, telecom, FMCG)" },
    { source: "NGO & INGO Grants", examples: "HelpAge International, BRAC, Red Cross, Save the Children" }
  ];

  return (
    <div className="min-h-screen bg-white">
        <Header />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="text-3xl">🇧🇩</span>
            <h1 className="text-5xl font-bold">Life Cycle Bangladesh</h1>
          </div>
          <h2 className="text-2xl font-semibold mb-6 text-green-100">Elder Wellness Village, Bangladesh</h2>
         
        
           <p className="mx-auto max-w-4xl text-xl text-green-100 leading-relaxed pt-4">
            Our initiative is designed to redefine elder care in Bangladesh by blending compassion, innovation, 
            and sustainability. The following objectives reflect our commitment to holistic wellbeing, economic 
            empowerment, and cultural authenticity.
          </p>
        </div>
        
      </section>
<section>
      <div className="max-w-7xl mx-auto px-4 mt-20 mb-16">
            <img src={bannerImg} alt="Elder Care Village" className="w-full h-full rounded-sm shadow-lg" />
          </div>
</section>
      {/* Project Objectives */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
              <Target className="w-5 h-5" />
              <span className="font-semibold">Project Objectives</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Elder Care Initiative</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {objectives.map((objective, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                    {objective.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{objective.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{objective.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Objectives */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Develop "Fresh from Wisdom" Brand</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Launch a branded line of organic produce, dairy, honey, and herbal products grown and packaged by elders. 
                    This brand will be marketed as ethically sourced, elder-empowered, and community-driven—appealing 
                    to conscious consumers locally and abroad.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Integrate Renewable Energy & Green Infrastructure</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Install solar panels, biogas units, and rainwater harvesting systems to reduce environmental impact 
                    and operational costs. This aligns with global sustainability goals and enhances donor appeal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Infrastructure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
              <Building2 className="w-5 h-5" />
              <span className="font-semibold">Hospital Infrastructure</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Bangladesh's First Dedicated Geriatric Hospital</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Life Cycle Bangladesh proudly introduces Bangladesh's first dedicated four-story, 60-bed geriatric hospital, 
              designed to deliver compassionate, round-the-clock medical care to elderly patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {hospitalInfrastructure.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                <div className="text-green-600">{item.icon}</div>
                <span className="text-gray-700">{item.item}</span>
              </div>
            ))}
          </div>

          {/* Compassionate Care Initiative */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-16">
            <div className="text-center">
              <Heart className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compassionate Care Initiative</h3>
              <p className="text-lg text-gray-700 mb-8">
                As part of our commitment to serving all members of society, the hospital offers 
                <strong className="text-green-700"> 2 free beds and 1 cabin</strong> for underprivileged elderly patients.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <span className="block text-2xl mb-2">🎖️</span>
                  <span className="text-gray-700 font-semibold">Free care for freedom fighters</span>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <span className="block text-2xl mb-2">👥</span>
                  <span className="text-gray-700 font-semibold">50% discount for senior members</span>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <span className="block text-2xl mb-2">📦</span>
                  <span className="text-gray-700 font-semibold">Weekly & biweekly medical packages</span>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <span className="block text-2xl mb-2">🏥</span>
                  <span className="text-gray-700 font-semibold">Year-round medical camps</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hospital Facilities Images */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Facilities Showcase</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* <img src={facilites1} alt="Medical Instruments" className="rounded-xl shadow-lg h-[40vh]" /> */}
              <img src={facilities2} alt="Building Facilities" className="rounded-xl shadow-lg w-full h-[40vh]" />
              <img src={room} alt="Room Facilities" className="rounded-xl shadow-lg w-full h-[40vh]" />
              {/* <img src={ambulance} alt="Transport Facilities" className="rounded-xl shadow-lg" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Medical Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full mb-6">
              <Stethoscope className="w-5 h-5" />
              <span className="font-semibold">Medical Services</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Healthcare Services</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {medicalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.category}</h3>
                <ul className="space-y-2">
                  {service.services.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Pricing Structure */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Registration & Consultation Fees</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingStructure.map((price, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">{price.price}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{price.category}</h4>
                  <p className="text-gray-600">{price.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Staffing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-6">
              <Users className="w-5 h-5" />
              <span className="font-semibold">Hospital Staffing</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Healthcare Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffing.map((staff, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-700">{staff.count}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{staff.role}</h3>
                <p className="text-gray-600">{staff.specialty}</p>
              </div>
            ))}
          </div>

          {/* Workforce Image */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Workforce and Management</h3>
            <img src={managment} alt="Workforce and Management" className="mx-auto rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Agriculture & Sustainability */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
              <Leaf className="w-5 h-5" />
              <span className="font-semibold">Agriculture & Sustainability</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Self-Sustaining Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Agriculture and livestock form the backbone of our self-sustaining ecosystem, offering fresh food, 
              therapeutic engagement, and economic resilience through elder-led agricultural entrepreneurship.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {agriculturePrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                    {program.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{program.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Elder Engagement */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-green-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Elder Engagement & Empowerment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <p className="text-gray-700">Seed sorting & nursery care</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🐄</span>
                  </div>
                  <p className="text-gray-700">Livestock feeding & care</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🥬</span>
                  </div>
                  <p className="text-gray-700">Light harvesting activities</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📦</span>
                  </div>
                  <p className="text-gray-700">Product packaging & branding</p>
                </div>
              </div>
            </div>
          </div>

          {/* Agriculture Images */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Agriculture Showcase</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <img src={dairy} alt="Dairy Units" className="rounded-xl w-[30vh] shadow-lg mx-auto" />
              <img src={firming} alt="Farming Innovation" className="rounded-xl w-[30vh] shadow-lg mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Staff Housing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
              <Home className="w-5 h-5" />
              <span className="font-semibold">Staff Housing</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Dedicated Staff Housing Complex</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Housing for 200 staff members with furnished living spaces, common facilities, and comprehensive amenities 
              to ensure a stable, motivated, and community-oriented workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Infrastructure & Capacity</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Housing for 200 staff members</li>
                <li>• Multi-story residential blocks</li>
                <li>• Single rooms for doctors & executives</li>
                <li>• Shared rooms for nurses & caregivers</li>
                <li>• Family units for long-term employees</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Amenities & Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Furnished living spaces</li>
                <li>• Common dining hall & kitchen</li>
                <li>• Recreation lounge with TV</li>
                <li>• Prayer room & meditation space</li>
                <li>• Laundry & sanitation facilities</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Staff Wellbeing</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Proximity to hospital facilities</li>
                <li>• Safe & secure environment</li>
                <li>• On-site childcare support</li>
                <li>• Regular training programs</li>
                <li>• Subsidized meals & healthcare</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financing & Funding */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-6">
              <DollarSign className="w-5 h-5" />
              <span className="font-semibold">Financing Requirements</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Investment & Funding Strategy</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We are seeking <strong className="text-yellow-700">$12-15 million USD</strong> in phased funding over 5 years 
              to establish a comprehensive elder care ecosystem in Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Funding Allocation</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <Building2 className="w-5 h-5 text-blue-500" />
                  <span>Capital infrastructure (hospital, housing, farming zones)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Stethoscope className="w-5 h-5 text-red-500" />
                  <span>Medical equipment and diagnostic tools</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-green-500" />
                  <span>Staff training and recruitment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-purple-500" />
                  <span>Technology for assessment and care planning</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-pink-500" />
                  <span>Community outreach and awareness campaigns</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-yellow-500" />
                  <span>Research and policy development</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sustainability Model</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <DollarSign className="w-5 h-5 text-green-500" />
                  <span>Revenue from outpatient services and diagnostics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Leaf className="w-5 h-5 text-green-500" />
                  <span>Sale of surplus farm produce (vegetables, dairy, honey, poultry)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span>Annual membership and donor-supported slots</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span>Volunteer-led service programs to reduce operational costs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-purple-500" />
                  <span>Digital outreach and training monetization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Funding Sources */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Funding Channels & Opportunities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fundingSources.map((source, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{source.source}</h4>
                  <p className="text-gray-600 text-sm">{source.examples}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring & Partnership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Monitoring & Evaluation</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li>• Real-time reporting via integrated assessment software (CHA, CCRS, IAR)</li>
                <li>• Impact metrics: health outcomes, elder satisfaction, cost-efficiency</li>
                <li>• External audits and donor dashboards for transparency</li>
                <li>• Regular impact reports with stories and data from beneficiaries</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-8 border border-green-200">
              <div className="flex items-center space-x-3 mb-6">
                <Globe className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Partnership Invitation</h3>
              </div>
              <p className="text-gray-700 mb-4">We invite international partners to:</p>
              <ul className="space-y-3 text-gray-700">
                <li>• Co-finance infrastructure and operations</li>
                <li>• Sponsor research and training programs</li>
                <li>• Support policy advocacy and awareness campaigns</li>
                <li>• Join our advisory board for strategic guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Next Steps */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Contact & Next Steps</h2>
          <div className="bg-green-700 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Life Log Care Bangladesh – Elder Wellness Village</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-green-100">
              <div>
                <p className="mb-2"><strong>Location:</strong> Dhaka, Bangladesh</p>
                <p className="mb-2"><strong>Email:</strong> outreach@lifecyclebangladesh.com</p>
              </div>
              <div>
                <p className="mb-2"><strong>Donations:</strong> donate@lifecyclebangladesh.com</p>
                <p className="mb-2"><strong>Phone:</strong> +880-1707-072345</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Request Funding Proposal
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Schedule Partnership Meeting
            </button>
          </div>
          <p className="mt-6 text-green-100 text-sm">
            Available formats: Formal proposal document, pitch deck, grant application template, 
            or translated versions in Bangla for local stakeholders
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};