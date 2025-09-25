
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedSlider from '@/components/FeaturedSlider';
import CarCard, { CarProps } from '@/components/CarCard';
import Banner from '@/components/Banner';
import Reviews from '@/components/Reviews';
import YouTubeReviews from '@/components/YouTubeReviews';
import AnimatedCar from '@/components/AnimatedCar';
import SEOHead from '@/components/SEOHead';
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Shield, DollarSign, Users, Search } from "lucide-react";
import { Link } from 'react-router-dom';
import heroCarImage from '@/assets/hero-car.jpg';

// Updated car data with new images
const newArrivals: CarProps[] = [
  {
    id: 1,
    title: "2018 Porsche Cayenne ",
    image: "/lovable-uploads/3.jpg",
    price: "KES 11,000,000",
    year: 2018,
    mileage: "",
    location: "Nairobi",
    condition: "Slightly Used",
    transmission: "8-speed Tiptronic S Automatic",
    engine: "3.0L V6"
  },
  {
    id: 2,
    title: "2018 Volkswagen Golf R ",
    image: "/lovable-uploads/g.jpg",
    price: "KES 4,390,000",
    year: 2018,
    mileage: "",
    location: "Nairobi",
    condition: "Slightly Used",
    transmission: "8-speed Tiptronic S Automatic ",
    engine: "2.0L Turbocharged inline-4 Petrol"
  },
  {
    id: 3,
    title: "2017 Mercedes Benz GLE 350D ",
    image: "/lovable-uploads/f.jpg",
    price: "KES 5,800,000",
    year: 2017,
    mileage: "",
    location: "Nairobi",
    condition: "Slightly Used",
    transmission: "9-speed Automatic Transmission ( 9G-Tronic )",
    engine: "3.0L V6 Turbocharged Diesel"
  },
  {
    id: 4,
    title: "2017 Peugeot 308 Petrol Variant ",
    image: "/lovable-uploads/d.jpg",
    price: "KES 2,300,000",
    year: 2017,
    mileage: "",
    location: "Nairobi",
    condition: "Slightly Used",
    transmission: "6-speed Automatic",
    engine: "1.6L Turbocharged inline-4"
  }
];

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
  }
];

const secondHandCars: CarProps[] = [
  {
    id: 22,
    title: "2014 BMW 116i",
    image: "/lovable-uploads/r.jpg",
    price: "KES 1,500,000",
    year: 2014,
    mileage: "",
    location: "Nairobi",
    condition: "Second Hand",
    transmission: "Automatic",
    engine: " 1600cc petrol engine"
  },
  {
    id: 23,
    title: "2011 Volkswagen Touareg TDI",
    image: "/lovable-uploads/s.jpg",
    price: "KES 2,750,000",
    year: 2011,
    mileage: "",
    location: "Nairobi",
    condition: "Second Hand",
    transmission: "Automatic transmission",
    engine: "3000cc TDI"
  },

  {
    id: 24,
    title: "2013 Mercedes Benz C200",
    image: "/lovable-uploads/t.jpg",
    price: "KES 1,900,000",
    year: 2013,
    mileage: "60,000 km",
    location: "Nairobi",
    condition: "Second Hand",
    transmission: "Automatic transmission",
    engine: "1.8L, four-cylinder, petrol engine"
  },
  {
    id: 25,
    title: "2016 Ford Mustang EcoBoost",
    image: "/lovable-uploads/u.jpg",
    price: "KES 5,990,000",
    year: 2016,
    mileage: "60,000 km",
    location: "Nairobi",
    condition: "Slightly Used",
    transmission: "6-speed Automatic transmission",
    engine: "12.3L Eco Boost Turbo I4 petrol"
  }

   ];


const popularBrands = [
  { name: "Toyota", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/1024px-Toyota_carlogo.svg.png" },
  { name: "Mercedes-Benz", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png" },
  { name: "BMW", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png" },
  { name: "Audi", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/1024px-Audi-Logo_2016.svg.png" },
  { name: "Porsche", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Porsche_logo.svg/1024px-Porsche_logo.svg.png" },
  { name: "Honda", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/2560px-Honda.svg.png" },
];

const Index = () => {
  const handleSearch = (searchTerm: string) => {
    window.location.href = `/browse?search=${encodeURIComponent(searchTerm)}`;
  };

  return (
    <>
      <SEOHead 
        title="Waigera - Kenya's Premier Car Marketplace | Quality Used & Showroom Cars"
        description="Find your dream car at Kenya's most trusted car marketplace. Browse quality used cars, showroom vehicles, get financing, and enjoy warranty support in Nairobi."
        keywords="cars for sale Kenya, used cars Nairobi, showroom cars, Toyota Kenya, car dealership Nairobi, vehicle financing Kenya, trade-in cars, car marketplace"
        canonical="https://waigera.com"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AutoDealer",
          "name": "Waigera",
          "description": "Kenya's premier marketplace for buying and selling quality used and showroom cars",
          "url": "https://waigera.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nairobi",
            "addressCountry": "KE"
          },
          "priceRange": "KES 500,000 - KES 20,000,000",
          "openingHours": "Mo-Sa 08:00-18:00"
        }}
      />
      
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-MWJ64ZXEPY"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MWJ64ZXEPY');
          `,
        }}
      />

      <Header />
      
      {/* Hero Section with Background Image */}
      <section 
        className="min-h-screen flex items-center justify-center pt-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('${heroCarImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Mobile background overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/20 lg:bg-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Find your <span className="text-[#33e9f2]">dream car</span>
            </h1>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              At Waigera, we're committed to providing an exceptional car-buying experience in Nairobi, Kenya.
            </p>
            
            {/* Improved Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <form onSubmit={(e) => {
                e.preventDefault();
                const searchTerm = (e.target as HTMLFormElement).search.value;
                handleSearch(searchTerm);
              }}>
                <div className="flex bg-black/95 backdrop-blur-sm rounded-full shadow-lg overflow-hidden">
                  <input 
                    name="search"
                    type="text" 
                    placeholder="Search by make, model, or keyword..."
                    className="flex-1 px-6 py-4 text-gray-700 focus:outline-none bg-transparent"
                  />
                  <Button 
                    type="submit"
                    className="bg-[#33e9f2] hover:bg-[#2bd4df] text-gray-900 font-semibold px-6 py-4 rounded-none h-auto"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Search
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Banner Section */}
      <Banner />
      
      {/* New Arrivals Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="section-title">Latest Arrivals</h2>
            <Link to="/browse">
              <Button variant="outline" className="border-[#33e9f2] text-[#33e9f2] hover:bg-[#33e9f2]/10 group">
                View All
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:overflow-visible">
            {newArrivals.map((car, index) => (
              <div 
                key={car.id} 
                className="opacity-0 animate-fade-in flex-shrink-0 w-80 md:w-auto border border-white rounded-xl"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <CarCard car={car} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="text-gray-400 text-lg">Real reviews from satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-[#33e9f2]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">"Excellent service and great selection of cars. Found my dream car at an unbeatable price. Highly recommended!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Kimani</h4>
                  <p className="text-gray-600 text-sm">Nairobi</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-[#33e9f2]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">"Professional team and transparent pricing. The financing options made it easy to get my first car."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">John Mwangi</h4>
                  <p className="text-gray-600 text-sm">Mombasa</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-[#33e9f2]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">"Top-notch customer service from start to finish. They helped me trade in my old car and find the perfect upgrade."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Grace Wanjiku</h4>
                  <p className="text-gray-600 text-sm">Kisumu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Second-hand Cars Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="section-title">Budget-Friendly Second Hand</h2>
            <Link to="/browse?condition=second-hand">
              <Button variant="outline" className="border-[#33e9f2] text-[#33e9f2] hover:bg-[#33e9f2]/10 group">
                View All
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:overflow-visible">
            {secondHandCars.map((car, index) => (
              <div 
                key={car.id} 
                className="opacity-0 animate-fade-in flex-shrink-0 w-80 md:w-auto border border-white rounded-xl"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <CarCard car={car} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="section-title text-white">Why Choose Waigera</h2>
            <p className="text-gray-400 text-lg">The premier destination for buying and selling quality used and showroom cars in Nairobi, Kenya.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black border border-border rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-[#33e9f2]/20 flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-[#33e9f2]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Quality Assurance</h3>
              <p className="text-gray-400">All our vehicles undergo a rigorous 150-point inspection to ensure they meet our high standards.</p>
            </div>
            
            <div className="bg-black border border-border rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-[#33e9f2]/20 flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-[#33e9f2]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Competitive Pricing</h3>
              <p className="text-gray-400">We offer the best market prices with flexible financing options to suit your budget.</p>
            </div>
            
            <div className="bg-black border border-border rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-[#33e9f2]/20 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-[#33e9f2]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Warranty & Support</h3>
              <p className="text-gray-400">Enjoy peace of mind with our extended warranty and dedicated after-sales support team.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Showroom Cars Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="section-title">Premium Collection</h2>
            <Link to="/showroom">
              <Button variant="outline" className="border-[#33e9f2] text-[#33e9f2] hover:bg-[#33e9f2]/10 group">
                View All
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:overflow-visible">
            {showroomCars.map((car, index) => (
              <div 
                key={car.id} 
                className="opacity-0 animate-fade-in flex-shrink-0 w-80 md:w-auto border border-white rounded-xl"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <CarCard car={car} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Waigera Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-white mb-8">About Waigera</h2>
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-[#33e9f2] to-[#2bd4df] rounded-full flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Founded with the vision to revolutionize the car buying experience in Kenya, Waigera has become the trusted partner for thousands of satisfied customers. We pride ourselves on transparency, quality, and exceptional customer service that goes beyond the sale.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#33e9f2] mb-2">1000+</div>
                  <p className="text-gray-400">Happy Customers</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#33e9f2] mb-2">10+</div>
                  <p className="text-gray-400">Cars Sold Monthly</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#33e9f2] mb-2">5+</div>
                  <p className="text-gray-400">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* YouTube Reviews Section */}
      <YouTubeReviews />
      
      {/* Animated Car Component */}
      <AnimatedCar />
      
      <Footer />
    </>
  );
};

export default Index;
