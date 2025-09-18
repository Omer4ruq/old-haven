// import { Header } from '../components/Header.jsx';
// import { Footer } from '../components/Footer.jsx';
import { ImageWithFallback } from '../components/figma/ImageWithFallback.jsx';
import { Heart, DollarSign, Users, Gift, CheckCircle, CreditCard, Smartphone, Building } from 'lucide-react';
import Header from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';

export function DonateUsPage() {
  const donationOptions = [
    {
      amount: "$25",
      description: "Provides medical supplies for one patient",
      icon: Gift,
      popular: false
    },
    {
      amount: "$50", 
      description: "Covers medication costs for elderly care",
      icon: Heart,
      popular: true
    },
    {
      amount: "$100",
      description: "Funds a complete health assessment",
      icon: Users,
      popular: false
    },
    {
      amount: "$250",
      description: "Sponsors a full day of senior care services",
      icon: Building,
      popular: false
    }
  ];

  const paymentMethods = [
    {
      method: "Credit Card",
      description: "Secure online payment via Visa, Mastercard, or Amex",
      icon: CreditCard
    },
    {
      method: "Mobile Payment",
      description: "Apple Pay, Google Pay, and other mobile wallets",
      icon: Smartphone
    },
    {
      method: "Wire Transfer",
      description: "Direct bank transfer for larger donations",
      icon: Building
    }
  ];

  const impactStats = [
    { number: "2,500+", label: "Seniors Helped This Year" },
    { number: "$150K", label: "Total Donations Received" },
    { number: "95%", label: "Goes Directly to Care" },
    { number: "500+", label: "Active Donors" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Support Our Mission</h1>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                Your generous donation helps us provide exceptional healthcare services to seniors 
                who need it most. Every contribution makes a direct impact on someone's quality of life.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-emerald-500 rounded-full p-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">100% Secure Donations</p>
                  <p className="text-emerald-100 text-sm">Your contribution is protected and goes directly to care</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1710093072228-8c3129f27357?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb25hdGlvbiUyMGhlYWx0aGNhcmUlMjBjaGFyaXR5fGVufDF8fHx8MTc1ODE3NTcwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthcare donation support"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Donation Amount</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select from our suggested amounts or enter a custom donation. Every dollar counts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <div key={index} className={`relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border-2 ${option.popular ? 'border-emerald-500' : 'border-gray-100'}`}>
                  {option.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                    </div>
                  )}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <IconComponent className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{option.amount}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{option.description}</p>
                    <button className="w-full mt-6 bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                      Donate {option.amount}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Custom Amount */}
          <div className="max-w-md mx-auto bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Custom Amount</h3>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="number" 
                    placeholder="Enter amount"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                Donate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Secure Payment Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer multiple secure payment methods to make donating easy and convenient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paymentMethods.map((payment, index) => {
              const IconComponent = payment.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <IconComponent className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{payment.method}</h3>
                  <p className="text-gray-600 leading-relaxed">{payment.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Your Impact in Numbers</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              See how your donations are making a real difference in the lives of seniors.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-emerald-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Complete Transparency</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Direct Care Impact</h3>
                    <p className="text-gray-600">95% of donations go directly to patient care and medical services.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Regular Updates</h3>
                    <p className="text-gray-600">Receive quarterly reports showing exactly how your donation was used.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tax Deductible</h3>
                    <p className="text-gray-600">All donations are tax-deductible and you'll receive a receipt.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Monthly Giving Program</h3>
              <p className="text-gray-600 mb-6">
                Join our monthly giving program and make a sustained impact. Monthly donors receive:
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span>Exclusive donor updates and stories</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span>Annual donor appreciation events</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span>Personalized impact reports</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span>Special recognition on our donor wall</span>
                </li>
              </ul>
              <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                Start Monthly Giving
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Your donation today will directly impact the life of a senior in need. 
            Join hundreds of supporters who believe in our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
              Donate Now
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors">
              Learn More About Our Impact
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}