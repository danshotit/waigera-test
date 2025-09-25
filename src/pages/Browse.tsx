import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchFilters from '@/components/SearchFilters';
import CarCard, { CarProps } from '@/components/CarCard';
import { Button } from "@/components/ui/button";

// All cars data including second-hand cars
const allCars: CarProps[] = [
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
  
  },
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
  ];
   {/*

    {
    id: 21,
    title: "2017 Mercedes Benz GLE 350D ",
    image: "",
    price: "KES 5,800,000",
    year: 2017,
    mileage: "",
    location: "Nairobi",
    condition: "Second Hand",
    transmission: "9-speed Automatic Transmission ( 9G-Tronic )",
    engine: "3.0L V6 Turbocharged Diesel"
  },

  {
    id: 19,
    title: "2023 Mitsubishi Lancer Evolution",
    image: "/lovable-uploads/108be3f1-8bfd-4a23-811e-cb43f4125453.png",
    price: "KES 5,200,000",
    year: 2023,
    mileage: "15,000 km",
    location: "Nakuru",
    condition: "Slightly Used",
    transmission: "Manual",
    engine: "2.0L Turbo"
  },
  {
    id: 20,
    title: "2023 Nissan Navara",
    image: "/lovable-uploads/e78c8b7b-64de-46d7-8b78-9f04d55a3b23.png",
    price: "KES 4,800,000",
    year: 2023,
    mileage: "12,000 km",
    location: "Eldoret",
    condition: "Slightly Used",
    transmission: "Automatic",
    engine: "2.3L Turbo Diesel"
  },
  {
    id: 21,
    title: "2024 Mercedes-AMG GLE 63",
    image: "/lovable-uploads/5ea193cb-db63-4fb8-abe1-b194620f17a4.png",
    price: "KES 18,500,000",
    year: 2024,
    mileage: "0 km",
    location: "Nairobi",
    condition: "Showroom",
    transmission: "Automatic",
    engine: "4.0L V8 Biturbo"
  },
  // Second-hand cars
  {
    id: 22,
    title: "2011 Toyota Mark X",
    image: "/lovable-uploads/fab55516-2a0f-484c-9703-a710a0ed28ec.png",
    price: "KES 610,000",
    year: 2011,
    mileage: "180,000 km",
    location: "Chavakali",
    condition: "Second Hand",
    transmission: "Automatic",
    engine: "3.5L V6"
  },
  {
    id: 23,
    title: "2019 Toyota Corolla",
    image: "https://images.unsplash.com/photo-1549399723-3edf5179d6c4?q=80&w=2070&auto=format&fit=crop",
    price: "KES 2,800,000",
    year: 2019,
    mileage: "45,000 km",
    location: "Nairobi",
    condition: "Second Hand",
    transmission: "Manual",
    engine: "1.8L"
  },
  {
    id: 24,
    title: "2018 Honda Fit",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2070&auto=format&fit=crop",
    price: "KES 1,900,000",
    year: 2018,
    mileage: "60,000 km",
    location: "Mombasa",
    condition: "Second Hand",
    transmission: "CVT",
    engine: "1.3L"
  },
  {
    id: 25,
    title: "2020 Mazda Demio",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop",
    price: "KES 2,200,000",
    year: 2020,
    mileage: "35,000 km",
    location: "Kisumu",
    condition: "Second Hand",
    transmission: "Automatic",
    engine: "1.5L"
  },
  {
    id: 26,
    title: "2017 Subaru Impreza",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop",
    price: "KES 2,700,000",
    year: 2017,
    mileage: "75,000 km",
    location: "Nakuru",
    condition: "Second Hand",
    transmission: "Manual",
    engine: "2.0L"
  }*/}


// Advertisement data
const advertisements = [
  {
    id: 1,
    title: "Partner Showroom - Premium Motors",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
    description: "Luxury cars at unbeatable prices",
    link: "/contact"
  },
  {
    id: 2,
    title: "Special Offer - Trade-in Bonus",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
    description: "Get up to 20% extra on your trade-in",
    link: "/contact"
  }
];

interface FilterState {
  searchTerm: string;
  condition: string;
  make: string;
  bodyType: string;
  yearFrom: string;
  yearTo: string;
  transmission: string;
  priceRange: [number, number];
}

const Browse = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: '',
    condition: 'all',
    make: '',
    bodyType: '',
    yearFrom: '',
    yearTo: '',
    transmission: '',
    priceRange: [0, 20]
  });
  
  const carsPerPage = 8;

  // Filter cars based on current filters
  const filteredCars = useMemo(() => {
    return allCars.filter(car => {
      // Search term filter
      if (filters.searchTerm && !car.title.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
        return false;
      }

      // Condition filter
      if (filters.condition !== 'all' && filters.condition !== car.condition.toLowerCase().replace(' ', '-')) {
        return false;
      }

      // Make filter
      if (filters.make && !car.title.toLowerCase().includes(filters.make.toLowerCase())) {
        return false;
      }

      // Year filter
      if (filters.yearFrom && car.year < parseInt(filters.yearFrom)) {
        return false;
      }
      if (filters.yearTo && car.year > parseInt(filters.yearTo)) {
        return false;
      }

      // Transmission filter
      if (filters.transmission && car.transmission.toLowerCase() !== filters.transmission.toLowerCase()) {
        return false;
      }

      // Price range filter
      const priceValue = parseInt(car.price.replace(/[^\d]/g, '')) / 1000000; // Convert to millions
      if (priceValue < filters.priceRange[0] || priceValue > filters.priceRange[1]) {
        return false;
      }

      return true;
    });
  }, [filters]);
  
  // Get current cars for pagination
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Handle filter changes
  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };
  
  return (
    <>
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
      
      {/* Page Header */}
      <div className="pt-28 pb-16 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-6">Browse Cars</h1>
          <p className="text-white/70 max-w-2xl">
            Explore our extensive collection of premium vehicles. Use the filters below to find your perfect match.
          </p>
        </div>
      </div>
      
      {/* Search Filters */}
      <div className="bg-black py-8">
        <div className="container mx-auto px-4">
          <SearchFilters onFilter={handleFilterChange} />
        </div>
      </div>

      {/* Advertisement Section */}
      <div className="bg-black py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-white mb-6">Featured Partners & Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advertisements.map((ad) => (
              <div key={ad.id} className="bg-black border border-border rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <img src={ad.image} alt={ad.title} className="w-20 h-20 rounded-lg object-cover" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{ad.title}</h3>
                    <p className="text-muted-foreground mb-2">{ad.description}</p>
                    <Button size="sm" className="bg-primary hover:bg-primary/80">Learn More</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Results Section */}
      <div className="bg-black py-12">
        <div className="container mx-auto px-4">
          {/* Results Count & Sort */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">Found <span className="text-primary">{filteredCars.length}</span> cars</h2>
              <p className="text-muted-foreground text-sm">Displaying {indexOfFirstCar + 1}-{Math.min(indexOfLastCar, filteredCars.length)} of {filteredCars.length} results</p>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-white mr-3">Sort by:</span>
              <select className="bg-background border border-border text-foreground rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary">
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Mileage: Low to High</option>
              </select>
            </div>
          </div>
          
          {/* Car Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
            {currentCars.map((car, index) => (
              
              <div 
                key={car.id} 
                className="opacity-0 animate-fade-in border border-white rounded-xl"

                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <CarCard car={car} />
              </div>
            ))}
          </div>
          
          {/* No results message */}
          {filteredCars.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-white mb-2">No cars found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search filters to find more results.</p>
              <Button onClick={() => handleFilterChange({
                searchTerm: '',
                condition: 'all',
                make: '',
                bodyType: '',
                yearFrom: '',
                yearTo: '',
                transmission: '',
                priceRange: [0, 20]
              })}>Reset Filters</Button>
            </div>
          )}
          
          {/* Pagination */}
          {filteredCars.length > carsPerPage && (
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-2">
                <Button 
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="bg-background border-border text-foreground hover:bg-accent"
                >
                  Previous
                </Button>
                
                {[...Array(Math.ceil(filteredCars.length / carsPerPage))].map((_, i) => (
                  <Button
                    key={i}
                    onClick={() => paginate(i + 1)}
                    variant={currentPage === i + 1 ? "default" : "outline"}
                    className={currentPage === i + 1 ? "bg-primary text-primary-foreground" : "bg-background border-border text-foreground hover:bg-accent"}
                  >
                    {i + 1}
                  </Button>
                ))}
                
                <Button 
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredCars.length / carsPerPage)))}
                  disabled={currentPage === Math.ceil(filteredCars.length / carsPerPage)}
                  className="bg-background border-border text-foreground hover:bg-accent"
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Browse;
