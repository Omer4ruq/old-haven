import React from 'react';
import { Search, Phone, Mail, Heart, Shield, Users, Clock, Stethoscope, Home, Star, Quote, ShoppingCart, ArrowRight, Calendar, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// Design System Tokens
const designTokens = {
  colors: {
    primary: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#10b981', // Main emerald-600
      700: '#059669', // Main emerald-700
      800: '#065f46',
      900: '#064e3b',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    white: '#ffffff',
    yellow: {
      400: '#fbbf24',
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '5rem',
    '5xl': '6rem',
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
  },
  typography: {
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    }
  }
};

// Utility Components
const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors duration-200';
  const variants = {
    primary: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    outline: 'border border-emerald-600 text-emerald-600 hover:bg-emerald-50',
    ghost: 'hover:bg-gray-100 text-gray-700'
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Input = ({ placeholder, className = '', ...props }) => (
  <input 
    className={`px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${className}`}
    placeholder={placeholder}
    {...props}
  />
);

const ImageWithFallback = ({ src, alt, className = '', ...props }) => (
  <img src={src} alt={alt} className={className} {...props} />
);

// Header Component
const Header = () => (
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

// Hero Section Component
const HeroSection = () => (
  <section className="bg-gradient-to-r from-emerald-50 to-white py-20">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Easy Live & Safe
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive healthcare solutions for seniors with professional care, 
              modern facilities, and personalized attention for your loved ones.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-600">4.9/5 Rating from 2,500+ families</span>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Find the Right Care</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input placeholder="Location" className="border-gray-300" />
              <Input placeholder="Service Type" className="border-gray-300" />
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>

        <div className="relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1625712178372-abda9dde79b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwY291cGxlJTIwaGFwcHklMjBzZW5pb3JzfGVufDF8fHx8MTc1NzgzODUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Happy senior couple"
            className="w-full h-96 object-cover rounded-2xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-bold">24/7</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Emergency Care</p>
                <p className="text-sm text-gray-600">Always Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Tailored healthcare plans designed specifically for each individual's unique needs and preferences."
    },
    {
      icon: Shield,
      title: "24/7 Medical Support",
      description: "Round-the-clock medical assistance and emergency response for complete peace of mind."
    },
    {
      icon: Users,
      title: "Family Care Team",
      description: "Dedicated care coordinators who work closely with families to ensure the best outcomes."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Convenient appointment times that work with your schedule and lifestyle requirements."
    },
    {
      icon: Stethoscope,
      title: "Medical Expertise",
      description: "Board-certified physicians and specialists providing comprehensive healthcare services."
    },
    {
      icon: Home,
      title: "Home Care Services",
      description: "Professional in-home care services bringing quality healthcare to your doorstep."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Comprehensive Healthcare Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a full range of healthcare services designed to meet the unique needs 
            of seniors and their families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Margaret Johnson",
      role: "Family Member",
      rating: 5,
      text: "The care team has been absolutely wonderful. My mother receives exceptional attention and I have complete peace of mind knowing she's in such capable hands.",
      image: "https://images.unsplash.com/photo-1738454738501-7e6626ccfcd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwY2FyZSUyMGhlYWx0aGNhcmUlMjBzZW5pb3JzfGVufDF8fHx8MTc1NzgzODUwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Robert Chen",
      role: "Son of Patient",
      rating: 5,
      text: "Professional, compassionate, and reliable. The staff goes above and beyond to ensure my father feels comfortable and well-cared for every single day.",
      image: "https://images.unsplash.com/photo-1757125736482-328a3cdd9743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFscyUyMGRvY3RvciUyMG51cnNlfGVufDF8fHx8MTc1NzgzODUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Linda Davis",
      role: "Daughter of Patient",
      rating: 5,
      text: "I couldn't ask for better care for my mother. The team is incredibly skilled and treats every resident like family. Highly recommend their services.",
      image: "https://images.unsplash.com/photo-1631217872822-1c2546d6b864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uc3VsdGF0aW9uJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NTc3NDg0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">What Families Say About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from the families who trust us with their loved ones' care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="relative">
                <Quote className="w-8 h-8 text-emerald-200 mb-4" />
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white rounded-lg px-8 py-4 shadow-lg">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">4.9 out of 5 stars</p>
              <p className="text-gray-600">From 2,500+ verified reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Products Section Component
const ProductsSection = () => {
  const products = [
    {
      name: "Premium Wheelchair",
      price: "$899",
      category: "Mobility",
      image: "https://images.unsplash.com/photo-1593086586362-d83c6bf009b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwd2hlZWxjaGFpcnxlbnwxfHx8fDE3NTc4Mzg1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Lightweight, comfortable wheelchair with advanced features"
    },
    {
      name: "Adjustable Hospital Bed",
      price: "$1,299",
      category: "Furniture",
      image: "https://images.unsplash.com/photo-1751977979590-3554dd691c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBsaXZpbmclMjBhc3Npc3RlZCUyMGNhcmV8ZW58MXx8fHwxNzU3ODM4NTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Electric adjustable bed with memory foam mattress"
    },
    {
      name: "Bathroom Safety Rails",
      price: "$189",
      category: "Safety",
      image: "https://images.unsplash.com/photo-1738454738501-7e6626ccfcd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwY2FyZSUyMGhlYWx0aGNhcmUlMjBzZW5pb3JzfGVufDF8fHx8MTc1NzgzODUwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Stainless steel safety rails for bathroom assistance"
    },
    {
      name: "Walking Aid",
      price: "$159",
      category: "Mobility",
      image: "https://images.unsplash.com/photo-1757125736482-328a3cdd9743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFscyUyMGRvY3RvciUyMG51cnNlfGVufDF8fHx8MTc1NzgzODUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Lightweight aluminum walker with ergonomic handles"
    },
    {
      name: "Lift Chair",
      price: "$849",
      category: "Furniture",
      image: "https://images.unsplash.com/photo-1625712178372-abda9dde79b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwY291cGxlJTIwaGFwcHklMjBzZW5pb3JzfGVufDF8fHx8MTc1NzgzODUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Power lift recliner with massage and heat functions"
    },
    {
      name: "Medical Alert System",
      price: "$49/month",
      category: "Safety",
      image: "https://images.unsplash.com/photo-1631217872822-1c2546d6b864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uc3VsdGF0aW9uJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NTc3NDg0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "24/7 emergency monitoring and response system"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Assisted Living Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality medical equipment and assistive devices to enhance independence and safety
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div className="relative">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
            View All Products
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

// Client Reviews Section Component
const ClientReviewsSection = () => (
  <section className="py-20 bg-emerald-600">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center text-white space-y-8">
        <h2 className="text-4xl font-bold">Our Client Reviews</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">98%</div>
            <p className="text-emerald-100">Client Satisfaction</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">2,500+</div>
            <p className="text-emerald-100">Families Served</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">15+</div>
            <p className="text-emerald-100">Years Experience</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <span className="text-5xl font-bold mr-2">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-emerald-100">Average Rating</p>
          </div>
        </div>
        
        <div className="bg-white/10 rounded-xl p-8 max-w-4xl mx-auto">
          <p className="text-xl italic mb-4">
            "The most professional and caring healthcare team I've ever worked with. 
            They treat every family member with respect and dignity."
          </p>
          <p className="font-semibold">- Sarah Mitchell, Family Member</p>
        </div>
        
        <div className="text-center">
          <div className="text-6xl font-bold text-white mb-4">$75,892</div>
          <p className="text-emerald-100 text-xl">Total Healthcare Savings for Our Clients This Year</p>
        </div>
      </div>
    </div>
  </section>
);

// News Section Component
const NewsSection = () => {
  const newsItems = [
    {
      title: "Latest Advances in Senior Healthcare Technology",
      excerpt: "Discover how new medical technologies are improving quality of life for seniors across the country.",
      date: "September 12, 2025",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1757125736482-328a3cdd9743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFscyUyMGRvY3RvciUyMG51cnNlfGVufDF8fHx8MTc1NzgzODUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Nutrition Guidelines for Healthy Aging",
      excerpt: "Expert nutritionists share essential dietary recommendations for maintaining health and vitality in later years.",
      date: "September 10, 2025",
      category: "Nutrition",
      image: "https://images.unsplash.com/photo-1631217872822-1c2546d6b864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uc3VsdGF0aW9uJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NTc3NDg0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Creating Safe Living Environments for Seniors",
      excerpt: "Learn about home modifications and safety measures that can prevent accidents and promote independence.",
      date: "September 8, 2025",
      category: "Safety",
      image: "https://images.unsplash.com/photo-1751977979590-3554dd691c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBsaXZpbmclMjBhc3Npc3RlZCUyMGNhcmV8ZW58MXx8fHwxNzU3ODM4NTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Daily News & Updates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest healthcare news, tips, and updates for seniors and their families
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
            View All News & Updates
          </Button>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">H</span>
            </div>
            <span className="text-xl font-semibold">HealthCare</span>
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

// Main App Component
const HealthcareDesignSystem = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <HeroSection />
    <ServicesSection />
    <TestimonialsSection />
    <ProductsSection />
    <ClientReviewsSection />
    <NewsSection />
    <Footer />
  </div>
);

// Export design tokens and components for Figma design system use
export {
  designTokens,
  Button,
  Input,
  ImageWithFallback,
  Header,
  HeroSection,
  ServicesSection,
  TestimonialsSection,
  ProductsSection,
  ClientReviewsSection,
  NewsSection,
  Footer,
  HealthcareDesignSystem as default
};