import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';
import { ImageWithFallback } from '../components/figma/ImageWithFallback.jsx';
import { CheckCircle, Home, Users, Shield, Clock } from 'lucide-react';

export function AssessmentPage() {
  const assessmentSteps = [
    {
      title: "Initial Consultation",
      description: "We begin with a comprehensive discussion about your loved one's needs, preferences, and medical requirements.",
      icon: Users
    },
    {
      title: "Home Safety Evaluation",
      description: "Our certified professionals conduct a thorough assessment of the living environment for potential safety hazards.",
      icon: Home
    },
    {
      title: "Care Plan Development",
      description: "Based on our findings, we create a customized care plan that addresses all identified needs and concerns.",
      icon: Shield
    },
    {
      title: "Ongoing Monitoring",
      description: "We provide continuous monitoring and regular reassessments to ensure the care plan remains effective.",
      icon: Clock
    }
  ];

  const features = [
    "Comprehensive home safety inspection",
    "Medical equipment assessment",
    "Mobility and accessibility evaluation",
    "Emergency preparedness planning",
    "Family consultation and education",
    "Detailed written report with recommendations",
    "Follow-up support and guidance",
    "Care plan customization"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
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
      </section>

      {/* Assessment Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Assessment Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures every aspect of the residence is thoroughly evaluated 
              for safety, accessibility, and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assessmentSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <IconComponent className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Assess */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">What We Assess</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-emerald-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment Timeline</h3>
                <p className="text-gray-700 mb-4">
                  Our typical residential assessment takes 2-3 hours and includes a comprehensive 
                  walkthrough of all living areas, followed by a detailed consultation session.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Initial walkthrough:</strong> 90-120 minutes</li>
                  <li>• <strong>Family consultation:</strong> 30-45 minutes</li>
                  <li>• <strong>Report delivery:</strong> 24-48 hours</li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-emerald-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Assessment Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-200 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block">Enhanced Safety</strong>
                      <span className="text-emerald-100">Identify and address potential hazards before they become problems</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-200 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block">Peace of Mind</strong>
                      <span className="text-emerald-100">Know that your loved one's environment is optimized for their needs</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-200 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block">Cost Savings</strong>
                      <span className="text-emerald-100">Prevent expensive emergency situations through proactive planning</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-200 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block">Professional Guidance</strong>
                      <span className="text-emerald-100">Receive expert recommendations from certified healthcare professionals</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Ensure Your Home is Safe?</h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Don't wait for an accident to happen. Schedule your comprehensive residential 
            assessment today and give yourself and your family the peace of mind you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              Schedule Your Assessment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}