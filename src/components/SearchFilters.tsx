
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, Filter } from "lucide-react";

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

interface SearchFiltersProps {
  onFilter?: (filters: FilterState) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onFilter }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
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

  const handleInputChange = (field: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onFilter) {
      onFilter(filters);
    }
  };

  const resetFilters = () => {
    const resetState: FilterState = {
      searchTerm: '',
      condition: 'all',
      make: '',
      bodyType: '',
      yearFrom: '',
      yearTo: '',
      transmission: '',
      priceRange: [0, 20]
    };
    setFilters(resetState);
    if (onFilter) {
      onFilter(resetState);
    }
  };

  return (
    <div className="bg-black rounded-xl p-6 mb-8 shadow-lg border border-border">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              placeholder="Search by make, model or keyword..." 
              className="pl-10 bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              value={filters.searchTerm}
              onChange={(e) => handleInputChange('searchTerm', e.target.value)}
            />
          </div>
          <Select value={filters.condition} onValueChange={(value) => handleInputChange('condition', value)}>
            <SelectTrigger className="w-full md:w-40 bg-background border-border text-foreground">
              <SelectValue placeholder="Condition" />
            </SelectTrigger>
            <SelectContent className="bg-background border-border">
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="showroom">Showroom</SelectItem>
              <SelectItem value="slightly-used">Slightly Used</SelectItem>
              <SelectItem value="second-hand">Second Hand</SelectItem>
            </SelectContent>
          </Select>
          <Button 
            type="button" 
            variant="outline" 
            className="flex items-center gap-2 bg-background border-border text-foreground hover:bg-muted"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="w-4 h-4" />
            Advanced Filters
          </Button>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
            Search
          </Button>
          <Button 
            type="button" 
            variant="outline"
            onClick={resetFilters}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700"
          >
            Reset
          </Button>
        </div>
        
        {isFilterOpen && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 mt-4 border-t border-gray-200 animate-fade-in">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Make</label>
              <Select value={filters.make} onValueChange={(value) => handleInputChange('make', value)}>
                <SelectTrigger className="w-full bg-background border-border text-foreground">
                  <SelectValue placeholder="Any Make" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border">
                  <SelectItem value="">Any Make</SelectItem>
                  <SelectItem value="toyota">Toyota</SelectItem>
                  <SelectItem value="mercedes">Mercedes</SelectItem>
                  <SelectItem value="bmw">BMW</SelectItem>
                  <SelectItem value="audi">Audi</SelectItem>
                  <SelectItem value="honda">Honda</SelectItem>
                  <SelectItem value="mazda">Mazda</SelectItem>
                  <SelectItem value="subaru">Subaru</SelectItem>
                  <SelectItem value="volkswagen">Volkswagen</SelectItem>
                  <SelectItem value="nissan">Nissan</SelectItem>
                  <SelectItem value="ford">Ford</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Body Type</label>
              <Select value={filters.bodyType} onValueChange={(value) => handleInputChange('bodyType', value)}>
                <SelectTrigger className="w-full bg-background border-border text-foreground">
                  <SelectValue placeholder="Any Type" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border">
                  <SelectItem value="">Any Type</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="hatchback">Hatchback</SelectItem>
                  <SelectItem value="truck">Truck</SelectItem>
                  <SelectItem value="van">Van</SelectItem>
                  <SelectItem value="pickup">Pickup</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Year</label>
              <div className="grid grid-cols-2 gap-3">
                <Select value={filters.yearFrom} onValueChange={(value) => handleInputChange('yearFrom', value)}>
                  <SelectTrigger className="bg-background border-border text-foreground">
                    <SelectValue placeholder="From" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border">
                    <SelectItem value="">Any</SelectItem>
                    {Array.from({ length: 15 }, (_, i) => new Date().getFullYear() - 14 + i).map(year => (
                      <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={filters.yearTo} onValueChange={(value) => handleInputChange('yearTo', value)}>
                  <SelectTrigger className="bg-background border-border text-foreground">
                    <SelectValue placeholder="To" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border">
                    <SelectItem value="">Any</SelectItem>
                    {Array.from({ length: 15 }, (_, i) => new Date().getFullYear() - 14 + i).map(year => (
                      <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Transmission</label>
              <Select value={filters.transmission} onValueChange={(value) => handleInputChange('transmission', value)}>
                <SelectTrigger className="w-full bg-background border-border text-foreground">
                  <SelectValue placeholder="Any Transmission" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border">
                  <SelectItem value="">Any Transmission</SelectItem>
                  <SelectItem value="automatic">Automatic</SelectItem>
                  <SelectItem value="manual">Manual</SelectItem>
                  <SelectItem value="cvt">CVT</SelectItem>
                  <SelectItem value="dsg">DSG</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-3">Price Range (Million KSh)</label>
              <div className="px-2">
                <Slider 
                  value={filters.priceRange}
                  min={0}
                  max={20}
                  step={0.5}
                  onValueChange={(value) => handleInputChange('priceRange', value as [number, number])}
                  className="my-5"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{filters.priceRange[0]} M</span>
                  <span>{filters.priceRange[1]} M</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchFilters;
