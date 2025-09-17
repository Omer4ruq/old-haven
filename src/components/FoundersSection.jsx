import { ImageWithFallback } from './figma/ImageWithFallback.jsx';

export function FoundersSection() {
  const founders = [
    {
      name: "Dr. SaLeh Faruq",
      role: "Chief Executive Officer & Co-Founder",
      image: "https://www.the100indianmuslims.com/upld/blog/92/abdul-kader-fazlani.jpg",
      bio: "With over 20 years of experience in geriatric medicine, Dr. Mitchell founded HealthCare with a vision to revolutionize senior care. Her dedication to compassionate healthcare has transformed thousands of lives."
    },
    {
      name: "Michael Thompson",
      role: "Chief Operations Officer & Co-Founder",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMG1hbGV8ZW58MXx8fHwxNzU3ODQwNTMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Michael brings extensive healthcare administration expertise, ensuring our operations run seamlessly. His strategic leadership has expanded our services to reach more families in need."
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Chief Medical Officer & Co-Founder",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc1Nzg0MDUzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Specializing in preventive care and family medicine, Dr. Rodriguez ensures our medical standards exceed industry expectations. Her patient-first approach defines our care philosophy."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Meet Our Founders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The visionary leaders who established HealthCare with a mission to provide 
            exceptional senior care services to families across the nation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div className="relative">
                <ImageWithFallback
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{founder.name}</h3>
                  <p className="text-emerald-200">{founder.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">{founder.bio}</p>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-bold text-lg">
                        {founder.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{founder.name}</p>
                      <p className="text-sm text-emerald-600">{founder.role.split(' & ')[0]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-emerald-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Founding Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              "To create a healthcare environment where seniors receive not just medical care, 
              but genuine compassion, dignity, and respect. Every family deserves peace of mind 
              knowing their loved ones are in the best possible hands."
            </p>
            <div className="mt-4 text-emerald-600 font-semibold">- HealthCare Founders</div>
          </div>
        </div>
      </div>
    </section>
  );
}