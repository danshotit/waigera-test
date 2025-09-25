
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CarCard, { CarProps } from '@/components/CarCard';
import { Button } from "@/components/ui/button";
import { Star, Award, Shield, Phone, Mail } from "lucide-react";

const premiumCars: CarProps[] = [
  {
    id: 101,
    title: "2020 Lamborghini Urus Giallo Auge",
    image: "/lovable-uploads/n.jpg",
    price: "Upon request",
    year: 2020,
    mileage: "",
    location: "Mombasa",
    condition: "Showroom",
    transmission: "Automatic transmission",
    engine: "4.0L Twin-Turbo V8"
  },
  {
    id: 101,
    title: "2018 Lexus RX300",
    image: "/lovable-uploads/o.jpg",
    price: "Upon request",
    year: 2018,
    mileage: "",
    location: "Mombasa",
    condition: "Showroom",
    transmission: "Automatic transmission",
    engine: "2.0L Turbocharged Petrol"
  },
  {
    id: 101,
    title: "2022 Lexus LX600 VIP Elegance",
    image: "/lovable-uploads/l.jpg",
    price: "Upon request",
    year: 2022,
    mileage: "",
    location: "Mombasa",
    condition: "Showroom",
    transmission: "Automatic transmission",
    engine: "3.5L Twin-Turbo Petrol"
  },
  {
    id: 101,
    title: "2018 Mercedes Benz E350e AMG LINE",
    image: "/lovable-uploads/k.jpg",
    price: "Upon request",
    year: 2018,
    mileage: "",
    location: "Mombasa",
    condition: "Showroom",
    transmission: "Automatic transmission",
    engine: "2.0L  Petrol Engine + Electric Motor"
  }
];

const PremiumMotors = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Premium Motors</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience luxury at its finest with our exclusive collection of premium vehicles
            </p>
            <div className="flex justify-center items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span>Certified Luxury</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Extended Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-blue-400" />
                <span>VIP Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="py-12 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Exclusive Premium Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-black">
              <h3 className="text-xl font-bold mb-2">0% Financing</h3>
              <p className="text-sm">On select luxury models for qualified buyers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-black">
              <h3 className="text-xl font-bold mb-2">Extended Warranty</h3>
              <p className="text-sm">Up to 5 years comprehensive coverage</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-black">
              <h3 className="text-xl font-bold mb-2">VIP Service</h3>
              <p className="text-sm">Dedicated concierge and priority support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Collection */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Luxury Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Premium Motors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span>+254795838290</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span>premium@waigera.co</span>
                  </div>
                </div>
                <Button className="mt-6 w-full bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900">
                  Schedule VIP Consultation
                </Button>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">Premium Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    White-glove delivery service
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    24/7 concierge support
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    Exclusive access to limited editions
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    Complimentary maintenance packages
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PremiumMotors;
