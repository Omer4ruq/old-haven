import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/button.jsx';
import { ImageWithFallback } from './figma/ImageWithFallback.jsx';

export function NewsSection() {
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
}