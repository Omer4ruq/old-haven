import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from './ui/button.jsx';
import { ImageWithFallback } from './figma/ImageWithFallback.jsx';

export function ProductsSection() {
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
}