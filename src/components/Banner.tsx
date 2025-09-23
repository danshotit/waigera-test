import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#33e9f2]/10 to-[#33e9f2]/5 border-t border-[#33e9f2]/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#33e9f2]/20 rounded-full">
              <Award className="w-4 h-4 text-[#33e9f2]" />
              <span className="text-sm font-medium text-[#33e9f2]">Kenya's Trusted Car Dealer</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Over <span className="text-[#33e9f2]">1,000+</span> Customers Choose Waigera
            </h2>
            
            <p className="text-lg text-gray-300">
              From budget-friendly second-hand vehicles to luxury showroom cars, we offer the largest selection 
              of quality vehicles in Kenya with unmatched customer service and transparent pricing.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-black/40 rounded-lg border border-[#33e9f2]/20">
                <div className="w-12 h-12 bg-[#33e9f2]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-[#33e9f2]" />
                </div>
                <h4 className="font-semibold text-white mb-1">150-Point Check</h4>
                <p className="text-sm text-gray-400">Quality guaranteed</p>
              </div>
              
              <div className="text-center p-4 bg-black/40 rounded-lg border border-[#33e9f2]/20">
                <div className="w-12 h-12 bg-[#33e9f2]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-[#33e9f2]" />
                </div>
                <h4 className="font-semibold text-white mb-1">Expert Team</h4>
                <p className="text-sm text-gray-400">Professional service</p>
              </div>
              
              <div className="text-center p-4 bg-black/40 rounded-lg border border-[#33e9f2]/20">
                <div className="w-12 h-12 bg-[#33e9f2]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-[#33e9f2]" />
                </div>
                <h4 className="font-semibold text-white mb-1">5-Star Rated</h4>
                <p className="text-sm text-gray-400">Customer satisfaction</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/browse">
                <Button className="bg-[#33e9f2] hover:bg-[#2bd4df] text-black font-semibold px-6 py-3 w-full sm:w-auto">
                  Browse Our Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-[#33e9f2] text-[#33e9f2] hover:bg-[#33e9f2]/10 px-6 py-3 w-full sm:w-auto">
                  Get Expert Advice
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Content - Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-black/60 rounded-2xl border border-[#33e9f2]/30">
                <div className="text-3xl font-bold text-[#33e9f2] mb-2">100+</div>
                <div className="text-gray-300">Cars Sold</div>
              </div>
              
              <div className="text-center p-6 bg-black/60 rounded-2xl border border-[#33e9f2]/30">
                <div className="text-3xl font-bold text-[#33e9f2] mb-2">5</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              
              <div className="text-center p-6 bg-black/60 rounded-2xl border border-[#33e9f2]/30">
                <div className="text-3xl font-bold text-[#33e9f2] mb-2">98%</div>
                <div className="text-gray-300">Customer Satisfaction</div>
              </div>
              
              <div className="text-center p-6 bg-black/60 rounded-2xl border border-[#33e9f2]/30">
                <div className="text-3xl font-bold text-[#33e9f2] mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
            
            {/* Customer Logos */}
            <div className="p-6 bg-black/40 rounded-xl border border-[#33e9f2]/20">
              <p className="text-center text-sm text-gray-400 mb-4">Trusted by leading companies</p>
              <div className="flex items-center justify-center gap-8 opacity-60">
                <div className="w-16 h-8 bg-gray-600 rounded"></div>
                <div className="w-16 h-8 bg-gray-600 rounded"></div>
                <div className="w-16 h-8 bg-gray-600 rounded"></div>
                <div className="w-16 h-8 bg-gray-600 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;