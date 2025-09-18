// import { Header } from '../components/Header.jsx';
// import { Footer } from '../components/Footer.jsx';
import { ImageWithFallback } from '../components/figma/ImageWithFallback.jsx';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Calendar, Headphones } from 'lucide-react';
import Header from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';

export function ContactUsPage() {
  const contactMethods = [
    {
      title: "Phone Support",
      description: "Speak directly with our care coordinators",
      info: "(555) 123-4567",
      hours: "24/7 Emergency Line",
      icon: Phone
    },
    {
      title: "Email Support",
      description: "Send us your questions and concerns",
      info: "contact@healthcare.com",
      hours: "Response within 2 hours",
      icon: Mail
    },
    {
      title: "Office Location",
      description: "Visit us at our main headquarters",
      info: "123 Healthcare Ave, Medical District",
      hours: "Mon-Fri: 8AM-6PM",
      icon: MapPin
    },
    {
      title: "Live Chat",
      description: "Instant support through our website",
      info: "Available on all pages",
      hours: "Daily: 6AM-10PM",
      icon: MessageSquare
    }
  ];

  const departments = [
    {
      name: "General Inquiries",
      email: "info@healthcare.com",
      phone: "(555) 123-4567"
    },
    {
      name: "New Patient Services",
      email: "newpatients@healthcare.com",
      phone: "(555) 123-4568"
    },
    {
      name: "Billing & Insurance",
      email: "billing@healthcare.com",
      phone: "(555) 123-4569"
    },
    {
      name: "Emergency Services",
      email: "emergency@healthcare.com",
      phone: "(555) 911-HELP"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 2:00 PM" },
    { day: "Emergency Line", hours: "24/7 Available" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                We're here to help you navigate your healthcare journey. Reach out to us through 
                any of our convenient contact methods and our dedicated team will assist you promptly.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-500 rounded-full p-3">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">24/7 Support Available</p>
                  <p className="text-emerald-100 text-sm">Emergency assistance anytime you need it</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1672985023380-56700b379213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwdXMlMjBvZmZpY2UlMjByZWNlcHRpb258ZW58MXx8fHwxNzU4MTc1NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Contact us office reception"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the contact method that works best for you. We're committed to responding quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <IconComponent className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{method.description}</p>
                  <p className="text-emerald-600 font-semibold mb-2">{method.info}</p>
                  <p className="text-gray-500 text-sm">{method.hours}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Department</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                    <option>General Inquiries</option>
                    <option>New Patient Services</option>
                    <option>Billing & Insurance</option>
                    <option>Technical Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea 
                    rows="5" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Office Hours</h2>
                <div className="bg-emerald-50 rounded-xl p-6">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-emerald-100 last:border-b-0">
                      <span className="font-semibold text-gray-900">{schedule.day}</span>
                      <span className="text-emerald-600 font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Department Contacts</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-3">{dept.name}</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <Mail className="w-4 h-4 text-emerald-600" />
                          <span className="text-gray-600">{dept.email}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-4 h-4 text-emerald-600" />
                          <span className="text-gray-600">{dept.phone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Emergency Contact</h3>
                <p className="text-emerald-100 mb-6">
                  For urgent medical situations or after-hours emergencies, 
                  contact our 24/7 emergency hotline immediately.
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <Phone className="w-6 h-6 text-emerald-200" />
                  <span className="text-2xl font-bold">(555) 911-HELP</span>
                </div>
                <p className="text-emerald-100 text-sm">
                  Available 24 hours a day, 7 days a week
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Location</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're conveniently located in the Medical District with easy access and ample parking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-semibold">Interactive Map</p>
                <p className="text-sm">Map integration would be placed here</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Address</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">HealthCare Center</p>
                      <p className="text-gray-600">123 Healthcare Avenue</p>
                      <p className="text-gray-600">Medical District, MD 20850</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Business Hours</p>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Weekend: Limited Hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-900 mb-4">Getting Here</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Free parking available on-site</li>
                  <li>• Wheelchair accessible entrance</li>
                  <li>• Metro accessible (Green Line - Medical Center)</li>
                  <li>• Complimentary valet parking for seniors</li>
                </ul>
              </div>

              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Schedule a Visit</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}