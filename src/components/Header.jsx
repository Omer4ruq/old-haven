import { Search, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from './ui/button.jsx';
import { useState, useEffect, useRef } from 'react';
import logo from '../assets/life-cercle-bangladesh-logo.png'

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white">
      {/* Top Bar */}
      <div className="bg-emerald-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+8801707072345</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm">info@lifecyclebangladesh.com</span>
            </div>
          </div>
          {/* <div className="text-sm">Mon - Fri: 8:00 AM - 6:00 PM</div> */}
          <div className="text-sm">Proposal Project</div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">H</span>
            </div> */}
            {/* <div className="w-20 h-20  flex items-center justify-center">
  <img src={logo} alt="Life Circle Bangladesh" className='w-full h-full object-contain'/>
            </div> */}
            <img src={logo} alt="Life Circle Bangladesh" className='w-20 h-20 object-contain p-0'/>
            {/* <span className="text-xl font-semibold text-gray-900">HealthCare</span> */}
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 z-50">
                  <div className="py-2">
                    <a 
                      href="#" 
                      className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    >
                      Assessment of the Residence
                    </a>
                    <a 
                      href="#" 
                      className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    >
                      Mission and Vision
                    </a>
                    <a 
                      href="#" 
                      className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    >
                      Our Target
                    </a>
                  </div>
                </div>
              )}
            </div>
            
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