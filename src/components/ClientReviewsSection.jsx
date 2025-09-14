import { Star } from 'lucide-react';

export function ClientReviewsSection() {
  return (
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
}