
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { MapPin, Car as CarIcon, Fuel, Settings, Eye, Star } from "lucide-react";
import { useAIReview } from '@/hooks/useAIReview';

export interface CarProps {
  id: number;
  title: string;
  image: string;
  price: string;
  year: number;
  mileage: string;
  location: string;
  condition: "Showroom" | "Slightly Used" | "Second Hand";
  transmission: string;
  engine: string;
}

const CarCard = ({ car }: { car: CarProps }) => {
  const { aiReview, loading } = useAIReview(car);
  
  const formatPrice = (price: string) => {
    // Extract price and format it for KES
    const numericPrice = price.replace(/[^\d]/g, '');
    const formattedPrice = new Intl.NumberFormat().format(parseInt(numericPrice));
    return `KES ${formattedPrice}`;
  };

  const getConditionBadge = (condition: string) => {
    const badges = {
      "Showroom": "bg-green-500 text-white",
      "Slightly Used": "bg-blue-500 text-white", 
      "Second Hand": "bg-orange-500 text-white"
    };
    return badges[condition as keyof typeof badges] || "bg-muted text-muted-foreground";
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-3 h-3 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="car-hover-effect bg-card border-border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="relative">
        {/* Car image */}
        <div className="aspect-video overflow-hidden bg-gray-100">
          {car.image ? (
            <img 
              src={car.image} 
              alt={car.title} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <CarIcon className="w-16 h-16 text-gray-400" />
            </div>
          )}
        </div>
        
        {/* Condition badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConditionBadge(car.condition)}`}>
            {car.condition}
          </span>
        </div>
        
        {/* Favorite button */}
        <button className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </button>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-card-foreground mb-2">{car.title}</h3>
        
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{car.location}</span>
        </div>
        
        {/* Car details with icons */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col items-center p-3 bg-muted/50 rounded-lg">
            <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center mb-2">
              <Fuel className="w-4 h-4 text-muted-foreground" />
            </div>
            <span className="text-xs text-muted-foreground text-center">{car.mileage}</span>
          </div>
          
          <div className="flex flex-col items-center p-3 bg-muted/50 rounded-lg">
            <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center mb-2">
              <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"></path>
              </svg>
            </div>
            <span className="text-xs text-muted-foreground text-center">{car.engine.split(' ')[0]}</span>
          </div>
          
          <div className="flex flex-col items-center p-3 bg-muted/50 rounded-lg">
            <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center mb-2">
              <Settings className="w-4 h-4 text-muted-foreground" />
            </div>
            <span className="text-xs text-muted-foreground text-center">{car.transmission}</span>
          </div>
        </div>
        
        {/* AI Review Section */}
        {aiReview && (
          <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                {renderStars(aiReview.rating)}
              </div>
              <span className="text-xs font-medium text-blue-600">AI Review</span>
            </div>
            <p className="text-sm text-card-foreground italic">"{aiReview.review}"</p>
          </div>
        )}
        
        {loading && (
          <div className="mb-4 p-3 bg-muted/50 rounded-lg border border-border">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs text-muted-foreground">Generating AI review...</span>
            </div>
          </div>
        )}
        
        {/* Price and View Details */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <div className="text-xl font-bold text-card-foreground">{formatPrice(car.price)}</div>
          </div>
          
          <Link to={`/car/${car.id}`}>
            <button className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium">
              <Eye className="w-4 h-4" />
              View details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
