import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/life-cercle-bangladesh.png'
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              {/* <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">H</span>
              </div>
              <span className="text-xl font-semibold">HealthCare</span> */}
               <img src={logo} alt="Life Circle Bangladesh" className=' w-40 h-16 object-contain p-0'/>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Providing compassionate, professional healthcare services for seniors and their families 
              with over 15 years of trusted experience.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Our Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Care Plans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Home Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Medical Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Assisted Living</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Emergency Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Family Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
                <div>
                  <p className="text-gray-300">123 Healthcare Ave</p>
                  <p className="text-gray-300">Medical District, MD 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <p className="text-gray-300">info@healthcarecenter.com</p>
              </div>
              <div className="bg-emerald-600 text-white p-4 rounded-lg">
                <p className="font-semibold">24/7 Emergency Line</p>
                <p className="text-emerald-100">+1 (555) 911-HELP</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">© 2025 HealthCare Center. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}