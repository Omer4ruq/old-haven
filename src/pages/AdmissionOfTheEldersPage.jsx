// import { Header } from '../components/Header.jsx';
// import { Footer } from '../components/Footer.jsx';
import { ImageWithFallback } from '../components/figma/ImageWithFallback.jsx';
import { FileText, Calendar, Users, Heart, CheckCircle, Clock, Shield, Phone, User, Clipboard } from 'lucide-react';
import Header from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';

export function AdmissionOfTheEldersPage() {
  const admissionSteps = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "Comprehensive evaluation of health needs and care requirements",
      duration: "60-90 minutes",
      icon: Clipboard
    },
    {
      step: "2", 
      title: "Documentation Review",
      description: "Review of medical records, insurance, and family information",
      duration: "30-45 minutes",
      icon: FileText
    },
    {
      step: "3",
      title: "Care Plan Development",
      description: "Personalized care plan created based on individual needs",
      duration: "45-60 minutes", 
      icon: Heart
    },
    {
      step: "4",
      title: "Family Consultation",
      description: "Discussion with family members about care options and expectations",
      duration: "30-60 minutes",
      icon: Users
    },
    {
      step: "5",
      title: "Admission Finalization",
      description: "Complete paperwork and schedule move-in date",
      duration: "30 minutes",
      icon: Calendar
    }
  ];

  const requiredDocuments = [
    "Government-issued photo ID (driver's license or passport)",
    "Insurance cards (Medicare, Medicaid, private insurance)",
    "Complete medical history and current medication list",
    "Recent physician notes and discharge summaries",
    "Emergency contact information for family members",
    "Power of attorney documents (if applicable)",
    "Advanced directive and healthcare proxy forms",
    "Social Security card and Medicare card",
    "Previous care facility records (if applicable)",
    "Financial information for billing purposes"
  ];

  const eligibilityCriteria = [
    {
      title: "Age Requirement",
      description: "Applicants must be 65 years or older",
      icon: User
    },
    {
      title: "Medical Assessment",
      description: "Comprehensive health evaluation by our medical team",
      icon: Shield
    },
    {
      title: "Care Level Determination",
      description: "Assessment of required level of assistance and medical care",
      icon: Heart
    },
    {
      title: "Financial Verification",
      description: "Review of insurance coverage and payment options",
      icon: FileText
    }
  ];

  const careServices = [
    "24/7 professional nursing care",
    "Medication management and administration",
    "Personal care assistance (bathing, dressing, grooming)",
    "Physical, occupational, and speech therapy",
    "Nutritious meal planning and dietary management",
    "Social activities and recreational programs",
    "Transportation to medical appointments",
    "Housekeeping and laundry services",
    "Emergency medical response system",
    "Family communication and updates"
  ];

  const admissionTimeline = [
    { phase: "Application Submission", timeframe: "Day 1" },
    { phase: "Initial Review", timeframe: "1-2 Business Days" },
    { phase: "Comprehensive Assessment", timeframe: "3-5 Business Days" },
    { phase: "Family Meeting", timeframe: "1 Week" },
    { phase: "Final Approval", timeframe: "1-2 Weeks" },
    { phase: "Move-in Scheduling", timeframe: "2-3 Weeks" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header/>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Admission of The Elders</h1>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                We provide a comprehensive and compassionate admission process designed to 
                make the transition to senior care as smooth and comfortable as possible 
                for both seniors and their families.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-500 rounded-full p-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Personalized Care Planning</p>
                  <p className="text-emerald-100 text-sm">Tailored to each individual's unique needs</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1568337339884-18892057f7cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwYWRtaXNzaW9uJTIwc2VuaW9yJTIwY2FyZXxlbnwxfHx8fDE3NTgxNzU3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Elderly admission senior care"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Admission Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured five-step process ensures thorough evaluation and smooth transition 
              into our care community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {admissionSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{step.description}</p>
                  <div className="flex items-center justify-center space-x-2 text-emerald-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-semibold">{step.duration}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Eligibility Criteria */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Eligibility Criteria</h2>
              <div className="space-y-6">
                {eligibilityCriteria.map((criteria, index) => {
                  const IconComponent = criteria.icon;
                  return (
                    <div key={index} className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{criteria.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{criteria.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Admission Timeline</h2>
              <div className="bg-emerald-50 rounded-xl p-8">
                <p className="text-gray-700 mb-6">
                  Our typical admission process takes 2-3 weeks from initial application to move-in date.
                </p>
                <div className="space-y-4">
                  {admissionTimeline.map((timeline, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-emerald-100 last:border-b-0">
                      <span className="font-semibold text-gray-900">{timeline.phase}</span>
                      <span className="text-emerald-600 font-medium">{timeline.timeframe}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Required Documentation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please prepare these documents before beginning the admission process to ensure 
              a smooth and efficient evaluation.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {requiredDocuments.map((document, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{document}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-emerald-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Document Submission Options</h3>
              <p className="text-gray-700 mb-4">
                You can submit required documents through any of the following methods:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>In-person:</strong> Bring originals during your assessment appointment</li>
                <li>• <strong>Secure email:</strong> Send scanned copies to admissions@healthcare.com</li>
                <li>• <strong>Fax:</strong> (555) 123-4570 (secure medical records fax line)</li>
                <li>• <strong>Mail:</strong> Healthcare Center Admissions, 123 Healthcare Ave, MD 20850</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Care Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Comprehensive Care Services</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Upon admission, residents receive access to our full range of healthcare services 
                and amenities designed to promote independence, dignity, and quality of life.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {careServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-emerald-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">What Makes Us Different</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-emerald-200 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block">Person-Centered Care</strong>
                    <span className="text-emerald-100">Care plans tailored to individual preferences and needs</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-emerald-200 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block">Family Involvement</strong>
                    <span className="text-emerald-100">Regular communication and family participation in care decisions</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-emerald-200 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block">Safety First</strong>
                    <span className="text-emerald-100">Comprehensive safety protocols and 24/7 monitoring</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-emerald-200 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block">Continuous Support</strong>
                    <span className="text-emerald-100">Round-the-clock professional care and assistance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Admission */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin the Admission Process?</h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Our admission coordinators are here to guide you through every step of the process 
            and answer any questions you may have about our care services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Start Application
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Schedule Assessment
            </button>
          </div>
          
          <div className="bg-emerald-500 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Admission Hotline</h3>
            <div className="flex items-center justify-center space-x-3 mb-2">
              <Phone className="w-6 h-6 text-emerald-200" />
              <span className="text-2xl font-bold">(555) 123-CARE</span>
            </div>
            <p className="text-emerald-100">
              Available Monday - Friday: 8:00 AM - 6:00 PM<br />
              Weekend emergency consultations available
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}