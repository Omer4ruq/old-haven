// import { Header } from '../components/Header.jsx';
// import { Footer } from '../components/Footer.jsx';
import { ImageWithFallback } from '../components/figma/ImageWithFallback.jsx';
import { Building, Heart, Stethoscope, Car, Utensils, Wifi, Shield, Clock, Users, Activity, Brain, Eye } from 'lucide-react';
import Header from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';

export function HospitalFacilitiesPage() {
  const primaryFacilities = [
    {
      title: "Emergency Department",
      description: "24/7 emergency medical care with state-of-the-art trauma equipment",
      features: ["24/7 availability", "Advanced trauma bay", "Helicopter landing pad", "Specialized emergency staff"],
      icon: Heart
    },
    {
      title: "Intensive Care Unit",
      description: "Critical care facility with advanced monitoring and life support systems",
      features: ["20 private ICU beds", "Advanced ventilators", "Continuous monitoring", "Specialized ICU nursing"],
      icon: Activity
    },
    {
      title: "Surgical Suites",
      description: "Modern operating theaters equipped with the latest surgical technology",
      features: ["12 operating rooms", "Robotic surgery systems", "Digital imaging", "Minimally invasive procedures"],
      icon: Stethoscope
    },
    {
      title: "Cardiology Center",
      description: "Comprehensive heart care facility with cardiac catheterization lab",
      features: ["Cardiac catheterization", "Echocardiography", "Stress testing", "Heart rehabilitation"],
      icon: Heart
    }
  ];

  const specialtyServices = [
    {
      name: "Neurology Department",
      description: "Advanced neurological care and brain imaging",
      icon: Brain
    },
    {
      name: "Ophthalmology Center",
      description: "Complete eye care and surgical services",
      icon: Eye
    },
    {
      name: "Oncology Unit",
      description: "Cancer treatment and chemotherapy services",
      icon: Shield
    },
    {
      name: "Rehabilitation Center",
      description: "Physical and occupational therapy services",
      icon: Users
    },
    {
      name: "Maternity Ward",
      description: "Labor, delivery, and postpartum care",
      icon: Heart
    },
    {
      name: "Pediatric Wing",
      description: "Specialized care for children and adolescents",
      icon: Users
    }
  ];

  const supportFacilities = [
    {
      title: "Diagnostic Imaging",
      description: "Complete imaging services including MRI, CT, X-ray, and ultrasound",
      available: "24/7"
    },
    {
      title: "Laboratory Services",
      description: "Full-service lab with rapid testing capabilities",
      available: "24/7"
    },
    {
      title: "Pharmacy",
      description: "On-site pharmacy with medication counseling services",
      available: "Daily"
    },
    {
      title: "Blood Bank",
      description: "Complete blood banking and transfusion services",
      available: "24/7"
    },
    {
      title: "Respiratory Therapy",
      description: "Pulmonary rehabilitation and breathing treatments",
      available: "Daily"
    },
    {
      title: "Physical Therapy",
      description: "Rehabilitation services for mobility and strength",
      available: "Mon-Sat"
    }
  ];

  const amenities = [
    {
      title: "Patient Parking",
      description: "Free parking with over 500 spaces and valet service",
      icon: Car
    },
    {
      title: "Dining Services",
      description: "Cafeteria, patient dining, and special dietary accommodations",
      icon: Utensils
    },
    {
      title: "WiFi Access",
      description: "Complimentary high-speed internet throughout the facility",
      icon: Wifi
    },
    {
      title: "Security",
      description: "24/7 security monitoring and controlled access systems",
      icon: Shield
    },
    {
      title: "Chapel Services",
      description: "Interfaith chapel with chaplain services available",
      icon: Heart
    },
    {
      title: "Gift Shop",
      description: "Convenience items, flowers, and gifts for patients",
      icon: Building
    }
  ];

  const operatingHours = [
    { service: "Emergency Department", hours: "24/7" },
    { service: "Main Hospital", hours: "24/7" },
    { service: "Outpatient Clinics", hours: "Monday - Friday: 7:00 AM - 7:00 PM" },
    { service: "Diagnostic Imaging", hours: "24/7" },
    { service: "Laboratory", hours: "24/7" },
    { service: "Pharmacy", hours: "Daily: 6:00 AM - 10:00 PM" },
    { service: "Cafeteria", hours: "Daily: 6:00 AM - 9:00 PM" },
    { service: "Visiting Hours", hours: "Daily: 8:00 AM - 8:00 PM" }
  ];

  const facilityStats = [
    { number: "300", label: "Licensed Beds" },
    { number: "50+", label: "Medical Specialties" },
    { number: "800+", label: "Healthcare Professionals" },
    { number: "12", label: "Operating Rooms" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Hospital Facilities</h1>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                Our state-of-the-art medical facility features advanced technology, 
                comprehensive services, and comfortable accommodations designed to 
                provide the highest quality healthcare in a healing environment.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-500 rounded-full p-3">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Award-Winning Facility</p>
                  <p className="text-emerald-100 text-sm">Recognized for excellence in patient care</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1669930605340-801a0be1f5a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGZhY2lsaXRpZXMlMjBtZWRpY2FsJTIwZXF1aXBtZW50fGVufDF8fHx8MTc1ODE3NTczMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hospital facilities medical equipment"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facility Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Facility by the Numbers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive healthcare facility equipped to serve our community's diverse medical needs.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {facilityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Primary Medical Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core medical departments provide comprehensive care with cutting-edge technology 
              and expert medical professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {primaryFacilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{facility.description}</p>
                      <div className="space-y-2">
                        {facility.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialty Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized medical departments offering expert care in focused areas of medicine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialtyServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <IconComponent className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Support Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential support services that complement our medical care and ensure comprehensive treatment.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportFacilities.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-gray-900">{service.title}</h3>
                    <span className="text-emerald-600 font-semibold text-sm">{service.available}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities & Patient Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Amenities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comfort and convenience services designed to enhance the patient and family experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => {
              const IconComponent = amenity.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <IconComponent className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{amenity.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{amenity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Operating Hours</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our facility operates with extended hours to ensure patients receive care when they need it most. 
                Emergency services are available 24/7, every day of the year.
              </p>
              
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">Main Hospital: (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">Emergency: (555) 911-HELP</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">Patient Information: (555) 123-INFO</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Hours</h3>
              <div className="space-y-4">
                {operatingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                    <span className="font-semibold text-gray-900">{schedule.service}</span>
                    <span className="text-emerald-600 font-medium text-sm">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Advanced Medical Technology</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              We invest in the latest medical technology to provide accurate diagnoses 
              and effective treatments with minimal invasiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Activity className="w-12 h-12 text-emerald-200 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Digital Imaging</h3>
              <p className="text-emerald-100 text-sm">3D MRI, CT scans, and advanced ultrasound</p>
            </div>
            <div className="text-center">
              <Stethoscope className="w-12 h-12 text-emerald-200 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Robotic Surgery</h3>
              <p className="text-emerald-100 text-sm">Minimally invasive surgical procedures</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-emerald-200 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Cardiac Monitoring</h3>
              <p className="text-emerald-100 text-sm">Advanced heart monitoring systems</p>
            </div>
            <div className="text-center">
              <Brain className="w-12 h-12 text-emerald-200 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Telemedicine</h3>
              <p className="text-emerald-100 text-sm">Remote consultation capabilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Experience Our Facilities</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Schedule a tour of our facilities or contact us to learn more about our 
            comprehensive medical services and patient amenities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
              Schedule Facility Tour
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors">
              View Virtual Tour
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}