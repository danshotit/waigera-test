
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CarCard, { CarProps } from '@/components/CarCard';

// Showroom cars data with matching details
const showroomCars: CarProps[] = [
  {
    id: 5,
    title: "2024 Mercedes-AMG GLE 53",
    image: "/lovable-uploads/4dbfb66c-2542-4bd2-b11d-68ff6c51b196.png",
    price: "KES 12,500,000",
    year: 2024,
    mileage: "0 km",
    location: "Nairobi",
    condition: "Showroom",
    transmission: "Automatic",
    engine: "3.0L V6 Turbo"
  },
  {
    id: 6,
    title: "2024 Range Rover Sport",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
    price: "KES 15,200,000",
    year: 2024,
    mileage: "0 km",
    location: "Nairobi",
    condition: "Showroom",
    transmission: "Automatic",
    engine: "3.0L V6"
  },
  {
    id: 7,
    title: "2024 BMW X7",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop",
    price: "KES 13,800,000",
    year: 2024,
    mileage: "0 km",
    location: "Mombasa",
    condition: "Showroom",
    transmission: "Automatic",
    engine: "3.0L TwinPower"
  },
  {
    id: 8,
    title: "2024 Audi Q8",
    image: "https://images.unsplash.com/photo-1612057248888-acb0bcbe2dba?q=80&w=2069&auto=format&fit=crop",
    price: "KES 11,700,000",
    year: 2024,
    mileage: "0 km",
    location: "Nairobi",
    condition: "Showroom",
    transmission: "Automatic",
    engine: "3.0L TFSI"
  },
  {
    id: 13,
    title: "2024 Porsche Cayenne",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=2074&auto=format&fit=crop",
    price: "KES 18,900,000",
    year: 2024,
    mileage: "0 km",
    location: "Nairobi",
    condition: "Showroom",
    transmission: "Automatic",
    engine: "3.0L Turbo"
  },
  {
    id: 14,
    title: "2024 Volvo XC90",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
    price: "KES 11,200,000",
    year: 2024,
    mileage: "0 km",
    location: "Nairobi",
    condition: "Showroom",
    transmission: "Automatic",
    engine: "2.0L T8 Hybrid"
  },
  {
    id: 15,
    title: "2024 Jaguar F-Pace",
    image: "https://images.unsplash.com/photo-1563720223523-499384a901af?q=80&w=2070&auto=format&fit=crop",
    price: "KES 11,800,000",
    year: 2024,
    mileage: "0 km",
    location: "Mombasa",
    condition: "Showroom",
    transmission: "Automatic",
    engine: "2.0L Ingenium"
  },
  {
    id: 16,
    title: "2024 Lexus RX 350",
    image: "https://images.unsplash.com/photo-1546522072-4d03bcbeb394?q=80&w=1978&auto=format&fit=crop",
    price: "KES 9,500,000",
    year: 2024,
    mileage: "0 km",
    location: "Nairobi",
    condition: "Showroom",
    transmission: "Automatic",
    engine: "3.5L V6"
  }
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
      <section className="py-16 bg-black">
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
