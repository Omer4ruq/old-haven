import { ImageWithFallback } from './figma/ImageWithFallback.jsx';

export function TeamMembersSection() {
  const teamMembers = [
    {
      name: "Dr. James Wilson",
      role: "Senior Physician",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtYWxlJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NTc4NDA1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Lisa Anderson",
      role: "Head Nurse",
      image: "https://img.freepik.com/premium-photo/closeup-portrait-confident-indian-businessman-working-office-interior-looking-camera_116547-72024.jpg"
    },
    {
      name: "David Chen",
      role: "Physical Therapist",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXBpc3QlMjBtYWxlJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NTc4NDA1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    // {
    //   name: "Maria Garcia",
    //   role: "Care Coordinator",
    //   image: "https://images.unsplash.com/photo-1594824388191-d369fcab90e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlJTIwY29vcmRpbmF0b3IlMjBmZW1hbGV8ZW58MXx8fHwxNzU3ODQwNTMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    // },
    {
      name: "Robert Johnson",
      role: "Mental Health Counselor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Vuc2Vsb3IlMjBtYWxlJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NTc4NDA1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Jennifer Kim",
      role: "Nutritionist",
      image: "https://www.the100indianmuslims.com/upld/blog/148/yusuff-ali-musaliam-veettil-abdul-kader.jpg"
    },
    {
      name: "Anthony Davis",
      role: "Emergency Response Specialist",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjByZXNwb25zZSUyMG1hbGV8ZW58MXx8fHwxNzU3ODQwNTMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Amanda White",
      role: "Social Worker",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjB3b3JrZXIlMjBmZW1hbGV8ZW58MXx8fHwxNzU3ODQwNTMyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .team-slider:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Dedicated Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the compassionate professionals who make exceptional care possible every day
          </p>
        </div>

        {/* Auto-scrolling container */}
        <div className="relative overflow-hidden team-slider">
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

        <div className="text-center mt-12">
          <div className="bg-emerald-600 text-white rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="text-lg text-emerald-100 mb-6">
              We're always looking for passionate healthcare professionals to join our mission 
              of providing exceptional care to seniors and their families.
            </p>
            <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}