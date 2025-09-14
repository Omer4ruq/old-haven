import { Search, Star } from 'lucide-react';
import { Button } from './ui/button.jsx';
import { Input } from './ui/input.jsx';
import { ImageWithFallback } from './figma/ImageWithFallback.jsx';

export function HeroSection() {
  return (
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
}