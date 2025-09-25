
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CarCard, { CarProps } from '@/components/CarCard';

// Showroom cars data with matching details
const showroomCars: CarProps[] = [
  {
    
    id: 5,
    title: "2018 Audi q5",
    image: "/lovable-uploads/e.jpg",
    price: "KES 5,990,000",
    year: 2018,
    mileage: "0 km",
    location: "Nairobi",
    condition: "Showroom",
    transmission: "7-speed Automatic Dual-clutch",
    engine: "2.0L Turbocharged inline-4 Engine"
  },
  {
    id: 6,
    title: "2022 Land Rover Defender 110",
    image: "/lovable-uploads/c.jpg",
    price: "KES 18,900,000",
    year: 2022,
    mileage: "0 km",
    location: "Nairobi",
    condition: "Showroom",
    transmission: "8-speed Automatic",
    engine: "3.0L Inline 6 Twin-Turbocharged Diesel"
  },
  {
    id: 7,
    title: "2017 Peugeot 308 Diesel Variant",
    image: "/lovable-uploads/a.jpg",
    price: "KES 2,200,000",
    year: 2017,
    mileage: "0 km",
    location: "Nairobi",
    condition: "Showroom",
    transmission: "6-speed Automatic",
    engine: "1.6L BlueHDi Diesel Engine"
  },
  {
    id: 8,
    title: "2018 Ford Ranger Thunder",
    image: "/lovable-uploads/m.jpg",
    price: "KES 6,900,000",
    year: 2018,
    mileage: "0 km",
    location: "Nairobi",
    condition: "Showroom",
    transmission: "10-speed Automatic",
    engine: "2.0L Bi-Turbo Diesel"
  },
  {
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
    title: "2018 Mercedes Benz E350e AMG LINE",
    image: "/lovable-uploads/k.jpg",
    price: "Upon request",
    year: 2018,
    mileage: "",
    location: "Mombasa",
    condition: "Showroom",
    transmission: "Automatic transmission",
    engine: "2.0L  Petrol Engine + Electric Motor"
  },
  
];

const Showroom = () => {
  return (
    <>
      <Header />
      
      {/* Page Header */}
      <div className="pt-28 pb-16 bg-gradient-to-r from-blue-600 via-gray-900 to-purple-600">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-6">Showroom Collection</h1>
          <p className="text-white/80 max-w-2xl">
            Explore our premium selection of brand new, showroom-condition vehicles. 
            Each car comes with manufacturer warranty and exclusive financing options.
          </p>
        </div>
      </div>
      
      {/* Showroom Cars Section */}
      <section className="py-16 bg-black border border-white rounded-xl">

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {showroomCars.map((car, index) => (
              <div 
                key={car.id} 
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <CarCard car={car} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Showroom Benefits */}
      <section className="py-16 bg-black border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12 text-white">Showroom Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black border border-border rounded-2xl p-8 shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Full Manufacturer Warranty</h3>
              <p className="text-muted-foreground">All our showroom vehicles come with the complete manufacturer warranty package for your peace of mind.</p>
            </div>
            
            <div className="bg-black border border-border rounded-2xl p-8 shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Flexible Financing Options</h3>
              <p className="text-muted-foreground">Take advantage of our competitive financing packages with low interest rates and customized payment plans.</p>
            </div>
            
            <div className="bg-black border border-border rounded-2xl p-8 shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Complimentary Service Package</h3>
              <p className="text-muted-foreground">Enjoy free maintenance services for the first year or 20,000 kilometers, whichever comes first.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Showroom;
