import React, { useState, useEffect, useRef } from 'react';
import { Search, Phone, Mail, ChevronDown, Menu, X } from 'lucide-react';
import { useRouter } from './Router';
import logo from '../assets/life-cercle-bangladesh.png'

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
   const { navigate } = useRouter();

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

//   const navigate = (page) => {
//     console.log(`Navigating to ${page}`);
//     setIsServicesOpen(false);
//     setIsMobileMenuOpen(false);
//     setIsMobileServicesOpen(false);
//   };

  return (
    <>
      {/* Custom Font Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
        
        .nav-font {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 500;
          letter-spacing: -0.01em;
        }
        
        .logo-font {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
        }
        
        .dropdown-enter {
          opacity: 0;
          transform: translateY(-10px) scale(0.95);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .dropdown-enter-active {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        .mobile-menu-enter {
          opacity: 0;
          transform: translateX(-100%);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .mobile-menu-enter-active {
          opacity: 1;
          transform: translateX(0);
        }
        
        .smooth-dropdown {
          transform-origin: top center;
          animation: dropdownSlide 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes dropdownSlide {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .mobile-slide-down {
          animation: mobileSlideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes mobileSlideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 200px;
            transform: translateY(0);
          }
        }
        
        .backdrop-blur-custom {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
      `}</style>

      <header className="bg-white shadow-sm relative z-50">
        {/* Top Bar */}
        <div className="bg-green-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center text-sm">
              <div className="hidden sm:flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+8801707072345</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span className="hidden md:inline">info@lifecyclebangladesh.com</span>
                  <span className="md:hidden">Contact Us</span>
                </div>
              </div>
              
              {/* Mobile contact info */}
              <div className="sm:hidden flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+8801707072345</span>
              </div>
              
              <div>Proposed Project</div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              {/* <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-lg">
                   <img src={logo} alt="Life Circle Bangladesh" className=' w-40 h-16 object-contain p-0'/>
              </div> */}
                 <img src={logo} alt="Life Circle Bangladesh" className=' w-40 h-16 object-contain p-0'/>
              <div className="ml-3">
                {/* <div className="logo-font text-xl font-bold text-gray-900">Life Circle</div>
                <div className="text-xs text-gray-500 -mt-1">Bangladesh</div> */}
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="/" className="nav-font text-gray-700 hover:text-green-600 transition-all duration-200  relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              
              <a href="#" className="nav-font text-gray-700 hover:text-green-600 transition-all duration-200  relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              
              {/* Desktop Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="nav-font flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-all duration-200  relative group"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-all duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-3 w-72 bg-white rounded-xl shadow-xl border border-gray-100 smooth-dropdown overflow-hidden">
                    <div className="py-3">
                      <button 
                        onClick={() => navigate('assessment')}
                        className="nav-font block w-full text-left px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-150 hover:translate-x-2 hover:font-medium"
                      >
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 transition-opacity duration-150 hover:opacity-100"></div>
                          Assessment of the Residence
                        </div>
                      </button>
                      <button 
                        onClick={() => navigate('mission-vision')}
                        className="nav-font block w-full text-left px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-150 hover:translate-x-2 hover:font-medium"
                      >
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 transition-opacity duration-150 hover:opacity-100"></div>
                          Mission and Vision
                        </div>
                      </button>
                      <button 
                        onClick={() => navigate('our-target')}
                        className="nav-font block w-full text-left px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-150 hover:translate-x-2 hover:font-medium"
                      >
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 transition-opacity duration-150 hover:opacity-100"></div>
                          Our Target
                        </div>
                      </button>
                         <button 
                        onClick={() => navigate('admission-elders')}
                        className="nav-font block w-full text-left px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-150 hover:translate-x-2 hover:font-medium"
                      >
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 transition-opacity duration-150 hover:opacity-100"></div>
                          Admission of Elders
                        </div>
                      </button>
                         <button 
                        onClick={() => navigate('donate-us')}
                        className="nav-font block w-full text-left px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-150 hover:translate-x-2 hover:font-medium"
                      >
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 transition-opacity duration-150 hover:opacity-100"></div>
                          Donate Us
                        </div>
                      </button>
                         <button 
                        onClick={() => navigate('hospital-facilities')}
                        className="nav-font block w-full text-left px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-150 hover:translate-x-2 hover:font-medium"
                      >
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 transition-opacity duration-150 hover:opacity-100"></div>
                          Hospital Facilities
                        </div>
                      </button>
                         <button 
                        onClick={() => navigate('room-details')}
                        className="nav-font block w-full text-left px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-150 hover:translate-x-2 hover:font-medium"
                      >
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 transition-opacity duration-150 hover:opacity-100"></div>
                          Room Details
                        </div>
                      </button>
                 
              

                    </div>
                  </div>
                )}
              </div>

              <button onClick={() => navigate('project-details')} className="nav-font text-gray-700 hover:text-green-600 transition-all duration-200  relative group">
                Project details and Budget
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
              </button>
              <a href="#" className="nav-font text-gray-700 hover:text-green-600 transition-all duration-200  relative group">
               Donate Us 
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <button onClick={() => navigate('contact-us')} className="nav-font text-gray-700 hover:text-green-600 transition-all duration-200  relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
              </button>
            </nav>

            {/* Desktop CTA Button */}
            <button className="hidden lg:block nav-font bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95">
              Book Appointment
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg backdrop-blur-custom z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              <a href="/" className="nav-font block py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all duration-200 font-medium">
                Home
              </a>
              
              <a href="#" className="nav-font block py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all duration-200 font-medium">
                About
              </a>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="nav-font w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all duration-200 font-medium"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-all duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileServicesOpen && (
                  <div className="ml-4 mt-2 space-y-1 mobile-slide-down">
                    <button 
                      onClick={() => navigate('assessment')}
                      className="nav-font block w-full text-left py-2 px-4 text-gray-600 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all duration-200 text-sm"
                    >
                      Assessment of the Residence
                    </button>
                    <button 
                      onClick={() => navigate('mission-vision')}
                      className="nav-font block w-full text-left py-2 px-4 text-gray-600 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all duration-200 text-sm"
                    >
                      Mission and Vision
                    </button>
                    <button 
                      onClick={() => navigate('our-target')}
                      className="nav-font block w-full text-left py-2 px-4 text-gray-600 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all duration-200 text-sm"
                    >
                      Our Target
                    </button>
                  </div>
                )}
              </div>
              
              <a href="#" className="nav-font block py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all duration-200 font-medium">
                Project details and Budget
              </a>
              <a href="#" className="nav-font block py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all duration-200 font-medium">
                Donate Us 
              </a>
              <a href="#" className="nav-font block py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all duration-200 font-medium">
                Contact
              </a>
              
              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-gray-200">
                <button className="nav-font w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;