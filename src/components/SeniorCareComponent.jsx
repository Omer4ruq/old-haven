import React, { useState, useEffect, useRef } from 'react';
import { CalendarSync, Heart, HeartPulse, Stethoscope } from 'lucide-react';
import { CiHeart } from "react-icons/ci";

const SeniorCareComponent = () => {
  const [animatedStats, setAnimatedStats] = useState({
    geriatric: 0,
    senior: 0,
    physicians: 0,
    years: 0
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const statsRef = useRef(null);

  const finalStats = {
    geriatric: 450,
    senior: 150,
    physicians: 250,
    years: 40
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        const progress = currentStep / steps;
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);

        setAnimatedStats({
          geriatric: Math.floor(finalStats.geriatric * easeOutCubic),
          senior: Math.floor(finalStats.senior * easeOutCubic),
          physicians: Math.floor(finalStats.physicians * easeOutCubic),
          years: Math.floor(finalStats.years * easeOutCubic)
        });

        currentStep++;
        if (currentStep > steps) {
          clearInterval(interval);
          setAnimatedStats(finalStats);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-4">
          <p className="text-sm text-gray-600 uppercase tracking-widest mb-2">• HOW WE DO •</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-light text-gray-800 mb-6 leading-tight">
              Special Community Designed To Meet Elders 
              Unique Needs, <span className="text-green-400 italic">With High-Quality Amenities.</span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 font-medium">
              We Give Special Experience At The End of Life & Funeral Services
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">How we can help?</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Leo vel fringilla est ullamcorper eget nulla. Phasellus 
                    egestas tellus rutrum tellus pellentesque eu. Vestibulum 
                    lorem sed risus ultricies tristique nulla aliquet enim tortor.
                  </p>
                  
                  <div className="mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop" 
                      alt="Senior man dining" 
                      className="w-full h-48 object-cover rounded-lg mb-3"
                    />
                    <p className="text-xs text-gray-500">
                      Cras semper auctor neque vitae quam tempus
                    </p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Morbi tristique senectus et netus et malesuada 
                    fames ac. Integer quis auctor elit sed vulputate. 
                    Tincidunt augue interdum velit euismod in. Ac ortor 
                    dignissim convallis aenean et at.
                  </p>
                  
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Nec tincidunt praesent semper feugiat nibh sed 
                    pulvinar proin nonummy nibh euismod tincidunt 
                    ut laoreet dolore volutpat naomi delgado 
                    consectetur quaernis.
                  </p>
                  
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    Bibendum arcu vitae elementum curabitur vitae 
                    nunc sed velit dignissim. Phasellus vestibulum 
                    nulla enim.
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">CEOSOLD HAVEN</p>
                    <div className="text-2xl font-script text-gray-700 italic">
                      Koly Williams
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=400&fit=crop" 
                alt="Senior woman with dog" 
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            
            <div className="bg-green-400 text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Personalized Care Program - For Seniors</h3>
              <p className="text-sm opacity-90">Best Part of Us</p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {/* Geriatric Inmates */}
          <div 
            className="relative text-center group cursor-pointer"
            onMouseEnter={() => setHoveredStat('geriatric')}
            onMouseLeave={() => setHoveredStat(null)}
          >
            {/* Corner borders - top-left and bottom-right */}
            <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-600 transition-all duration-300 ${hoveredStat === 'geriatric' ? 'border-t-4 border-l-4 border-gray-600 w-12 h-12' : ''}`}></div>
            <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-600 transition-all duration-300 ${hoveredStat === 'geriatric' ? 'border-b-4 border-r-4 border-gray-600 w-12 h-12' : ''}`}></div>

            <div className="relative p-8">
              {/* Background icon with low opacity */}
              <div className={`absolute inset-0 flex items-center ml-48 transition-all duration-300 ${hoveredStat === 'geriatric' ? 'transform scale-125' : ''}`}>
                <Stethoscope className="w-16 h-16 text-gray-500 opacity-20"/>
              </div>
              
              <div className={`text-5xl font-light text-gray-800 mb-2 transition-all duration-300 relative z-10`}>
                {animatedStats.geriatric}+
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-widest relative z-10">
                GERIATRIC INMATES
              </div>
            </div>
          </div>

          {/* Senior Citizen's Home */}
          <div 
            className="relative text-center group cursor-pointer"
            onMouseEnter={() => setHoveredStat('senior')}
            onMouseLeave={() => setHoveredStat(null)}
          >
            {/* Corner borders - top-left and bottom-right */}
            <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-600 transition-all duration-300 ${hoveredStat === 'senior' ? 'border-t-4 border-l-4 border-gray-600 w-12 h-12' : ''}`}></div>
            <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-600 transition-all duration-300 ${hoveredStat === 'senior' ? 'border-b-4 border-r-4 border-gray-600 w-12 h-12' : ''}`}></div>

            <div className="relative p-8">
              {/* Background icon with low opacity */}
              <div className={`absolute inset-0 flex items-center ml-48 transition-all duration-300 ${hoveredStat === 'senior' ? 'transform scale-125' : ''}`}>
                <Heart className="w-16 h-16 text-gray-500 opacity-20" />
              </div>
              
              <div className={`text-5xl font-light text-gray-800 mb-2 transition-all duration-300 relative z-10`}>
                {animatedStats.senior}+
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-widest relative z-10">
                SENIOR CITIZEN'S HOME
              </div>
            </div>
          </div>

          {/* Physicians & Nurses */}
          <div 
            className="relative text-center group cursor-pointer"
            onMouseEnter={() => setHoveredStat('physicians')}
            onMouseLeave={() => setHoveredStat(null)}
          >
            {/* Corner borders - top-left and bottom-right */}
            <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-600 transition-all duration-300 ${hoveredStat === 'physicians' ? 'border-t-4 border-l-4 border-gray-600 w-12 h-12' : ''}`}></div>
            <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-600 transition-all duration-300 ${hoveredStat === 'physicians' ? 'border-b-4 border-r-4 border-gray-600 w-12 h-12' : ''}`}></div>

            <div className="relative p-8">
              {/* Background icon with low opacity */}
             <div className={`absolute inset-0 flex items-center ml-48 transition-all duration-300 ${hoveredStat === 'senior' ? 'transform scale-125' : ''}`}>
                <HeartPulse className="w-16 h-16 text-gray-500 opacity-20" />
                
              </div>
              
              <div className={`text-5xl font-light text-gray-800 mb-2 transition-all duration-300 relative z-10`}>
                {animatedStats.physicians}+
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-widest relative z-10">
                PHYSICIANS & NURSES
              </div>
            </div>
          </div>

          {/* Years of Service */}
          <div 
            className="relative text-center group cursor-pointer"
            onMouseEnter={() => setHoveredStat('years')}
            onMouseLeave={() => setHoveredStat(null)}
          >
            {/* Corner borders - top-left and bottom-right */}
            <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-600 transition-all duration-300 ${hoveredStat === 'years' ? 'border-t-4 border-l-4 border-gray-600 w-12 h-12' : ''}`}></div>
            <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-600 transition-all duration-300 ${hoveredStat === 'years' ? 'border-b-4 border-r-4 border-gray-600 w-12 h-12' : ''}`}></div>

            <div className="relative p-8">
              {/* Background icon with low opacity */}
              <div className={`absolute inset-0 flex items-center ml-48 transition-all duration-300 ${hoveredStat === 'years' ? 'transform scale-125' : ''}`}>
                
                <CalendarSync className="w-16 h-16 text-gray-500 opacity-20" />
              </div>
              
              <div className={`text-5xl font-light text-gray-800 mb-2 transition-all duration-300 relative z-10`}>
                {animatedStats.years}+
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-widest relative z-10">
                YEARS OF SERVICE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeniorCareComponent;