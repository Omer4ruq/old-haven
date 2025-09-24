import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback.jsx';
import { JoinOurTeamModal } from './JoinOurTeamModal.jsx';
import { X, Heart, Shield, Users, Award, TrendingUp, Globe, BookOpen, FileText, Star, Phone } from 'lucide-react';

export function TeamMembersSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const teamMembers = [
    {
      name: "Dr. Rashid Ahmed",
      role: "Senior Physician",
      image: "https://www.bas.org.bd/storage/app/uploads/public/613/ab6/d64/613ab6d64bd02774374015.jpg"
    },
    {
      name: "Fateh Ullah",
      role: "Head Nurse",
      image: "https://ssl.du.ac.bd/fontView/images/leader/1724760836Prof_Niaz_Ahmed_Khan.jpg"
    },
    {
      name: "Mohammad Karim",
      role: "Physical Therapist",
      image: "https://dailyasianage.com/library/1580753494_6.jpg"
    },
    {
      name: "Nasrir Uddin",
      role: "Mental Health Counselor",
      image: "https://pu.edu.bd/dba/wp-content/uploads/sites/7/2025/04/Prof.-Abul-Kalam-1-549x550.jpg"
    },
    {
      name: "Abdul Rahman",
      role: "Nutritionist",
      image: "https://bjfsbd.net/assets/uploads/2021/01/Prof-Maruf-Siddiqui-580.jpg"
    },
    {
      name: "Salman Hossain",
      role: "Emergency Response Specialist",
      image: "https://lutfor-pulmonorespiratory.com/wp-content/uploads/2022/06/Profile-Photo-1-729x1024.jpg"
    },
    {
      name: "Mizanur Rahman",
      role: "Social Worker",
      image: "https://hr.bup.edu.bd/upload/picture/9084.JPG"
    },
    {
      name: "Rumman Akbar",
      role: "Care Coordinator",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEDYQghIxjuCw/profile-displayphoto-shrink_400_400/B56ZRzwoUMHoAk-/0/1737108916579?e=2147483647&v=beta&t=gvdbjlMjGz2xAmQaQ41jUp2PLbrbllDPKZPaaNsxx7E"
    }
  ];

  const donationBenefits = [
    {
      icon: Heart,
      title: "Honor Our Elders",
      description: "Support a cause that uplifts those who shaped our families, communities, and nation—giving back with dignity and gratitude.",
      emoji: "🕊️"
    },
    {
      icon: Shield,
      title: "Ensure Quality Care",
      description: "Your donation helps provide professional medical services, nutritious meals, and safe living conditions for vulnerable seniors.",
      emoji: "🏥"
    },
    {
      icon: Users,
      title: "Be Part of a National Movement",
      description: "Join a growing network of changemakers committed to transforming elder care across Bangladesh.",
      emoji: "🤝"
    },
    {
      icon: Award,
      title: "Leave a Legacy",
      description: "Donors are recognized as lifelong contributors to a socially impactful institution—your name becomes part of a meaningful legacy.",
      emoji: "📜"
    },
    {
      icon: Heart,
      title: "Support Culturally Rooted Care",
      description: "Help us deliver care that respects Bangladeshi values, traditions, and emotional needs—beyond just clinical treatment.",
      emoji: "🧓"
    },
    {
      icon: TrendingUp,
      title: "Corporate Social Responsibility",
      description: "Businesses can fulfill CSR goals by supporting a transparent, high-impact initiative with measurable social outcomes.",
      emoji: "💼"
    },
    {
      icon: Globe,
      title: "Empower Innovation",
      description: "Your contribution fuels research, training, and technology that improve elder care systems nationwide.",
      emoji: "🧠"
    },
    {
      icon: Users,
      title: "Build Community Trust",
      description: "Donors become ambassadors of compassion, earning respect and trust from families, neighbors, and local leaders.",
      emoji: "🫱🏽‍🫲🏽"
    },
    {
      icon: FileText,
      title: "Transparent Impact Reporting",
      description: "Receive regular updates on how your donation is used—through stories, data, and direct feedback from beneficiaries.",
      emoji: "📈"
    },
    {
      icon: Heart,
      title: "Faith-Based Giving",
      description: "Support aligns with Islamic values of khidmat, sadqah, and amanah—caring for elders is a spiritual duty.",
      emoji: "🕌"
    },
    {
      icon: BookOpen,
      title: "Educate & Inspire Youth",
      description: "Your support helps us run intergenerational programs that teach empathy, responsibility, and cultural heritage.",
      emoji: "🎓"
    },
    {
      icon: Star,
      title: "Contribute to Global Standards",
      description: "Help position Bangladesh as a model for elder care in South Asia—combining local wisdom with international best practices.",
      emoji: "🌍"
    }
  ];

  return (
    <>
    <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .team-slider:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
   
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Dedicated Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the compassionate professionals who make exceptional care possible every day
          </p>
        </div>

        {/* Auto-scrolling container */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-6 animate-scroll">
            {/* First set of team members */}
            {teamMembers.map((member, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-top"
                />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-4">{member.role}</p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-emerald-100 rounded-full">
                        <div className="h-2 bg-emerald-600 rounded-full w-4/5"></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Expertise Level</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless scrolling */}
            {teamMembers.map((member, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-4">{member.role}</p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-emerald-100 rounded-full">
                        <div className="h-2 bg-emerald-600 rounded-full w-4/5"></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Expertise Level</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
 <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Why Become a Donating Member
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Life Log Care – Bangladesh offers meaningful ways to support elder care 
                while creating lasting impact in your community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {donationBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                        <benefit.icon className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-gray-900">{benefit.title}</h4>
                        <span className="text-xl opacity-70">{benefit.emoji}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        {/* <div className="text-center mt-12">
          <div className="bg-emerald-600 text-white rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="text-lg text-emerald-100 mb-6">
              We're always looking for passionate healthcare professionals to join our mission 
              of providing exceptional care to seniors and their families.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              Join Our Team
            </button>
          </div>
        </div> */}
      </div>
   {/* Join Our Team CTA */}
          <div className="text-center">
            <div className="bg-green-600 text-white rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
              <p className="text-lg text-green-100 mb-6">
                Whether as a team member or donating supporter, be part of transforming 
                elder care in Bangladesh with dignity, compassion, and cultural authenticity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Become a Donating Member
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                  View Open Positions
                </button>
              </div>
            </div>
          </div>
      {/* Join Our Team Modal */}
      <JoinOurTeamModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
     </>
  );
}