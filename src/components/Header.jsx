import { Search, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button.jsx';

export function Header() {
  return (
    <header className="bg-white">
      {/* Top Bar */}
      <div className="bg-emerald-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm">info@healthcarecenter.com</span>
            </div>
          </div>
          <div className="text-sm">Mon - Fri: 8:00 AM - 6:00 PM</div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">H</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">HealthCare</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Services</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Products</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">News</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
          </nav>

          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
            Book Appointment
          </Button>
        </div>
      </div>
    </header>
  );
}