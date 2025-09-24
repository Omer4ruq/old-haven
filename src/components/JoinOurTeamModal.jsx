import { useState } from 'react';
import { X, Users, Heart, Phone, Send } from 'lucide-react';
import { Button } from './ui/button.jsx';
import { Input } from './ui/input.jsx';

export function JoinOurTeamModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    wifeName: '',
    numberOfKids: '',
    countryOfOrigin: '',
    currentlyLivingPlace: '',
    email: '',
    donationAmount: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest in joining our team! We will contact you soon.');
    onClose();
    // Reset form
    setFormData({
      name: '',
      wifeName: '',
      numberOfKids: '',
      countryOfOrigin: '',
      currentlyLivingPlace: '',
      email: '',
      donationAmount: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-emerald-600 text-white p-6 rounded-t-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Join Our Team</h2>
                <p className="text-emerald-100">Become part of our healthcare family</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center hover:bg-emerald-400 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-5 h-5 text-emerald-600" />
              <p className="text-gray-700">
                We're excited to learn more about you and welcome you to our healthcare community.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Wife's Name
                </label>
                <Input
                  type="text"
                  value={formData.wifeName}
                  onChange={(e) => handleInputChange('wifeName', e.target.value)}
                  placeholder="Enter your wife's name"
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  How Many Kids
                </label>
                <Input
                  type="number"
                  value={formData.numberOfKids}
                  onChange={(e) => handleInputChange('numberOfKids', e.target.value)}
                  placeholder="Number of children"
                  className="w-full"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Country of Origin
                </label>
                <Input
                  type="text"
                  value={formData.countryOfOrigin}
                  onChange={(e) => handleInputChange('countryOfOrigin', e.target.value)}
                  placeholder="Enter your country of origin"
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Currently Living Place
              </label>
              <Input
                type="text"
                value={formData.currentlyLivingPlace}
                onChange={(e) => handleInputChange('currentlyLivingPlace', e.target.value)}
                placeholder="Enter your current address/city"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Enter your email address"
                className="w-full"
                required
              />
            </div>

            {/* Donation Section */}
            <div className="bg-emerald-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Support Our Mission</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Please Donate the Amount (Optional)
                  </label>
                  <Input
                    type="number"
                    value={formData.donationAmount}
                    onChange={(e) => handleInputChange('donationAmount', e.target.value)}
                    placeholder="Enter donation amount in BDT"
                    className="w-full"
                    min="0"
                    step="0.01"
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Your donation helps us continue providing exceptional healthcare services.
                  </p>
                </div>

                {/* bKash Information */}
                <div className="bg-white rounded-lg p-4 border border-emerald-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <Phone className="w-5 h-5 text-emerald-600" />
                    <h4 className="font-bold text-gray-900">bKash Donation Number</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-700">bKash Number:</span>
                      <span className="font-bold text-emerald-600 text-lg">+880 1XXX-XXXXXX</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>• Send your donation to this bKash number</p>
                      <p>• Please mention your name in the transaction note</p>
                      <p>• Send us the transaction ID after completing the donation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Submit Application</span>
              </Button>
              <Button
                type="button"
                onClick={onClose}
                className="flex-1 border-2 border-gray-300 text-gray-700 py-3 bg-white hover:bg-gray-50"
              >
                Cancel
              </Button>
            </div>
          </form>

          {/* Additional Information */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-2">What Happens Next?</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Our HR team will review your application within 2-3 business days</li>
              <li>• You'll receive an email confirmation with next steps</li>
              <li>• Qualified candidates will be contacted for an initial interview</li>
              <li>• We value diversity and welcome applications from all backgrounds</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}