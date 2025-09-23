
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Car, Calculator, TrendingUp, CheckCircle, Phone, Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const TradeIn = () => {
  const { toast } = useToast();
  const [estimatedValue, setEstimatedValue] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate trade-in evaluation
    const baseValue = Math.floor(Math.random() * 2000000) + 500000;
    const bonusValue = Math.floor(baseValue * 0.2); // 20% bonus
    setEstimatedValue(baseValue + bonusValue);
    
    toast({
      title: "Trade-in Evaluation Complete!",
      description: "Your estimated trade-in value includes our 20% bonus offer.",
      duration: 5000,
    });
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Trade-In Bonus Program</h1>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Get up to 20% extra value when you trade in your current vehicle
            </p>
            <div className="flex justify-center items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-yellow-400" />
                <span>20% Bonus Value</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Instant Evaluation</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-5 h-5 text-blue-300" />
                <span>All Makes & Models</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade-In Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-blue-600" />
                  Get Your Trade-In Value
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select make" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="toyota">Toyota</SelectItem>
                          <SelectItem value="honda">Honda</SelectItem>
                          <SelectItem value="mazda">Mazda</SelectItem>
                          <SelectItem value="nissan">Nissan</SelectItem>
                          <SelectItem value="subaru">Subaru</SelectItem>
                          <SelectItem value="bmw">BMW</SelectItem>
                          <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                          <SelectItem value="audi">Audi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
                      <Input placeholder="e.g. Camry" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 25 }, (_, i) => 2024 - i).map(year => (
                            <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mileage (km)</label>
                      <Input type="number" placeholder="e.g. 50000" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                        <SelectItem value="poor">Poor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                    <Textarea 
                      placeholder="Tell us about any modifications, service history, or issues..."
                      rows={3}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                      <Input placeholder="Full name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input type="tel" placeholder="+254..." required />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white">
                    Get My Trade-In Value + 20% Bonus
                  </Button>
                </form>
                
                {estimatedValue && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Estimated Trade-In Value</h3>
                    <div className="text-2xl font-bold text-green-600">
                      KES {estimatedValue.toLocaleString()}
                    </div>
                    <p className="text-sm text-green-700 mt-1">
                      *Includes 20% bonus offer. Final value subject to vehicle inspection.
                    </p>
                  </div>
                )}
              </div>
              
              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Why Trade With Us?</h2>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">20% Bonus Value</h3>
                        <p className="text-gray-600">Get up to 20% more than market value for your trade-in vehicle.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Instant Process</h3>
                        <p className="text-gray-600">Get your evaluation in minutes and complete the trade-in process quickly.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Car className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">All Vehicles Accepted</h3>
                        <p className="text-gray-600">We accept all makes and models, regardless of age or condition.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span>+254795838290</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span>tradein@waigera.co</span>
                    </div>
                  </div>
                  <Button className="mt-4 w-full" variant="outline">
                    Schedule In-Person Evaluation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default TradeIn;
