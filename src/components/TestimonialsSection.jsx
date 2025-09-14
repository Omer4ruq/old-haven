import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback.jsx';

export function TestimonialsSection() {
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
}