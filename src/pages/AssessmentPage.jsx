// import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import { ImageWithFallback } from '../components/figma/ImageWithFallback.jsx';
import { CheckCircle, Home, Users, Shield, Clock, FileText, BarChart, Database, Target, Brain, Activity, BarChart2 } from 'lucide-react';


export function AssessmentPage() {
  const assessmentTypes = [
    {
      title: "CCRS Assessment",
      description: "Chronic Care Reporting System for RUG-III calculations, 35 Quality Indicators (QIs), and 18 Resident Assessment Protocols (RAPs).",
      icon: BarChart2
    },
    {
      title: "Community Health Assessment (CHA)",
      description: "Industry-leading interRAI CHA solution with user-friendly electronic interfaces and integrated business intelligence.",
      icon: Users
    },
    {
      title: "Integrated Assessment Record (IAR)",
      description: "Allows authorized staff to view consenting resident's assessment information for effective care planning and service delivery.",
      icon: FileText
    },
    {
      title: "Ontario Mental Health Reporting System (OMHRS)",
      description: "Psychiatric nurse-designed interface incorporating RAI-MH for effective mandated data submission to CIHI.",
      icon: Brain
    }
  ];

  const keyFeatures = [
    "Electronic Assessment Forms Library",
    "Standardized Assessment Protocols",
    "MDS Software Integration",
    "Real-Time Reporting Capabilities",
    "Care Plan Auto-Population", 
    "Quality Indicators Tracking",
    "National Rehabilitation System Integration",
    "Funding Optimization Tools"
  ];

  const assessmentSolutions = [
    {
      title: "eAssessment Module",
      description: "Easy-to-use module with instant access to focused senior living assessments and custom forms library.",
      features: ["CCRS", "CHA", "IAR", "OMHRS", "NRS"]
    },
    {
      title: "MDS Software Partnership",
      description: "Partner with one of the largest MDS software providers in the senior living sector for confident funding optimization.",
      features: ["RUG-III Calculation", "35 Quality Indicators", "18 RAPs", "Automatic Updates"]
    },
    {
      title: "Real-Time Integration",
      description: "Seamless data collection, submission, and reporting across your entire clinical software suite.",
      features: ["NRS Integration", "RPG Grouper", "National Benchmarks", "Resource Optimization"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      {/* <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-700  text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Assessment of the Residence</h1>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                Our comprehensive residential assessment ensures your loved one's home environment 
                is safe, accessible, and perfectly suited for their care needs. We evaluate every 
                aspect of the living space to create a secure and comfortable environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
                  Schedule Assessment
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
                  Download Checklist
                </button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1640537702474-3e503c21eefc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYXNzZXNzbWVudCUyMGhvbWUlMjBpbnNwZWN0aW9ufGVufDF8fHx8MTc1ODA5Mjc3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthcare professional conducting home assessment"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section> */}
<section className="relative py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Senior Living Assessment Management</h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Whether you provide retirement, mental health, rehabilitation, or long-term services, 
                effective assessment management is critical to providing the right care. Our comprehensive 
                eAssessment solutions give you the tools needed for optimal resident care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  Explore Solutions
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                  Request Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1640537702474-3e503c21eefc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYXNzZXNzbWVudCUyMGhvbWUlMjBpbnNwZWN0aW9ufGVufDF8fHx8MTc1ODA5Mjc3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Senior living assessment management"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

       {/* Assessment Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Standardized Assessment Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite includes CCRS, CHA, IAR, OMHRS, and NRS assessments 
              for all major senior living sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {assessmentTypes.map((assessment, index) => {
              const IconComponent = assessment.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{assessment.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{assessment.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Assessment Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From funding optimization to care planning, our integrated solutions streamline 
              your entire assessment workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {assessmentSolutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Why Choose Our Assessment Solutions?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-200 flex-shrink-0" />
                    <span className="text-green-100">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-green-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-green-200 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block">Optimize Funding</strong>
                    <span className="text-green-100">Maximize reimbursements with accurate MDS reporting and RUG-III calculations</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Database className="w-6 h-6 text-green-200 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block">Simplify Caregiving</strong>
                    <span className="text-green-100">Seamless information flow between providers with IAR integration</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Activity className="w-6 h-6 text-green-200 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block">Real-Time Reporting</strong>
                    <span className="text-green-100">Instant data collection and reporting across your clinical software suite</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-green-200 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block">Industry Expertise</strong>
                    <span className="text-green-100">Designed by psychiatric nurses and healthcare professionals</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Electronic Assessments</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Take advantage of our industry-leading solution to track and complete assessments. 
                Our user-friendly electronic interfaces combined with powerful integrated business 
                intelligence automatically push information from assessments into care plans.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Assessment Features:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Wide range of focused senior living assessments</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Custom forms library integration</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Automatic care plan population</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Better resident experiences and outcomes</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Funding Optimization</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Partner with one of the largest MDS software providers in senior living. 
                Our CCRS calculates RUG-III, 35 Quality Indicators, and 18 Resident Assessment 
                Protocols, then automatically updates the RAP tool for easier data entry.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">MDS Integration:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">RUG-III calculations for accurate billing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">35 Quality Indicators tracking</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">18 Resident Assessment Protocols</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Automatic RAP tool updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Assessment Process?</h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Transform your senior living facility with our comprehensive assessment management 
            solutions. Improve care quality, optimize funding, and streamline operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Schedule a Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Contact Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}