import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Car, Upload, DollarSign, MapPin } from "lucide-react";
import { useAuth } from '@/components/auth/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from "@/hooks/use-toast";

const Sell = () => {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    make: '',
    model: '',
    year: new Date().getFullYear(),
    price: '',
    mileage: '',
    location: '',
    condition: 'slightly_used',
    transmission: 'automatic',
    engine: '',
    fuel_type: 'petrol',
    body_type: 'sedan',
    color: '',
    contact_phone: '',
    contact_email: '',
    features: [] as string[],
    images: [] as string[]
  });

  // Redirect if not admin
  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      toast({
        title: "Access Denied",
        description: "Only administrators can add listings.",
        variant: "destructive"
      });
      navigate('/');
    }
  }, [user, isAdmin, loading, navigate, toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setSubmitting(true);

    try {
      const { error } = await supabase
        .from('cars')
        .insert([{
          title: formData.title,
          description: formData.description,
          make: formData.make,
          model: formData.model,
          year: formData.year,
          price: parseFloat(formData.price),
          mileage: formData.mileage,
          location: formData.location,
          condition: formData.condition,
          transmission: formData.transmission,
          engine: formData.engine,
          fuel_type: formData.fuel_type,
          body_type: formData.body_type,
          color: formData.color,
          contact_phone: formData.contact_phone,
          contact_email: formData.contact_email,
          features: formData.features,
          images: formData.images,
          created_by: user.id,
          status: 'active'
        }]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Car listing has been added successfully."
      });

      navigate('/browse');
    } catch (error) {
      console.error('Error adding car:', error);
      toast({
        title: "Error",
        description: "Failed to add car listing. Please try again.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleFeaturesChange = (feature: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, feature]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        features: prev.features.filter(f => f !== feature)
      }));
    }
  };

  const commonFeatures = [
    'Air Conditioning',
    'Power Steering',
    'Electric Windows',
    'ABS Brakes',
    'Airbags',
    'Cruise Control',
    'Sunroof',
    'Leather Seats',
    'Navigation System',
    'Bluetooth',
    'Backup Camera',
    'Parking Sensors',
    'LED Headlights',
    'Alloy Wheels',
    'Keyless Entry'
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-[#33e9f2] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null; // Will redirect in useEffect
  }

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-[#33e9f2]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Car className="w-8 h-8 text-[#33e9f2]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Add New <span className="text-[#33e9f2]">Car Listing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Add a new vehicle to the Waigera collection. Fill in all the details to create an attractive listing.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-foreground">
                  Car Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Basic Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Car className="w-5 h-5" />
                      Basic Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Title *</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                          placeholder="e.g., 2023 Toyota Camry Hybrid"
                          required
                          className="bg-input border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="year">Year *</Label>
                        <Input
                          id="year"
                          type="number"
                          min="1990"
                          max={new Date().getFullYear() + 1}
                          value={formData.year}
                          onChange={(e) => setFormData(prev => ({ ...prev, year: parseInt(e.target.value) }))}
                          required
                          className="bg-input border-border"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="make">Make *</Label>
                        <Input
                          id="make"
                          value={formData.make}
                          onChange={(e) => setFormData(prev => ({ ...prev, make: e.target.value }))}
                          placeholder="Toyota, Mercedes, BMW..."
                          required
                          className="bg-input border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="model">Model *</Label>
                        <Input
                          id="model"
                          value={formData.model}
                          onChange={(e) => setFormData(prev => ({ ...prev, model: e.target.value }))}
                          placeholder="Camry, C-Class, X3..."
                          required
                          className="bg-input border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="color">Color</Label>
                        <Input
                          id="color"
                          value={formData.color}
                          onChange={(e) => setFormData(prev => ({ ...prev, color: e.target.value }))}
                          placeholder="White, Black, Silver..."
                          className="bg-input border-border"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Detailed description of the car's condition, features, and history..."
                        className="bg-input border-border min-h-32"
                      />
                    </div>
                  </div>

                  {/* Pricing and Location */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      Pricing & Location
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="price">Price (KES) *</Label>
                        <Input
                          id="price"
                          type="number"
                          min="0"
                          step="1000"
                          value={formData.price}
                          onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                          placeholder="4200000"
                          required
                          className="bg-input border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location *</Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                          placeholder="Nairobi, Mombasa, Kisumu..."
                          required
                          className="bg-input border-border"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Technical Details */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-foreground">Technical Specifications</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="condition">Condition *</Label>
                        <select
                          id="condition"
                          value={formData.condition}
                          onChange={(e) => setFormData(prev => ({ ...prev, condition: e.target.value }))}
                          className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground"
                          required
                        >
                          <option value="new">New</option>
                          <option value="slightly_used">Slightly Used</option>
                          <option value="second_hand">Second Hand</option>
                          <option value="showroom">Showroom</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="transmission">Transmission *</Label>
                        <select
                          id="transmission"
                          value={formData.transmission}
                          onChange={(e) => setFormData(prev => ({ ...prev, transmission: e.target.value }))}
                          className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground"
                          required
                        >
                          <option value="manual">Manual</option>
                          <option value="automatic">Automatic</option>
                          <option value="cvt">CVT</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="fuel_type">Fuel Type *</Label>
                        <select
                          id="fuel_type"
                          value={formData.fuel_type}
                          onChange={(e) => setFormData(prev => ({ ...prev, fuel_type: e.target.value }))}
                          className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground"
                          required
                        >
                          <option value="petrol">Petrol</option>
                          <option value="diesel">Diesel</option>
                          <option value="hybrid">Hybrid</option>
                          <option value="electric">Electric</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="body_type">Body Type</Label>
                        <select
                          id="body_type"
                          value={formData.body_type}
                          onChange={(e) => setFormData(prev => ({ ...prev, body_type: e.target.value }))}
                          className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground"
                        >
                          <option value="sedan">Sedan</option>
                          <option value="suv">SUV</option>
                          <option value="hatchback">Hatchback</option>
                          <option value="wagon">Wagon</option>
                          <option value="coupe">Coupe</option>
                          <option value="pickup">Pickup</option>
                          <option value="van">Van</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="mileage">Mileage</Label>
                        <Input
                          id="mileage"
                          value={formData.mileage}
                          onChange={(e) => setFormData(prev => ({ ...prev, mileage: e.target.value }))}
                          placeholder="15,000 km"
                          className="bg-input border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="engine">Engine</Label>
                        <Input
                          id="engine"
                          value={formData.engine}
                          onChange={(e) => setFormData(prev => ({ ...prev, engine: e.target.value }))}
                          placeholder="2.5L Hybrid"
                          className="bg-input border-border"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contact_phone">Contact Phone</Label>
                        <Input
                          id="contact_phone"
                          type="tel"
                          value={formData.contact_phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, contact_phone: e.target.value }))}
                          placeholder="+254 700 000 000"
                          className="bg-input border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact_email">Contact Email</Label>
                        <Input
                          id="contact_email"
                          type="email"
                          value={formData.contact_email}
                          onChange={(e) => setFormData(prev => ({ ...prev, contact_email: e.target.value }))}
                          placeholder="contact@waigera.com"
                          className="bg-input border-border"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-foreground">Features</h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {commonFeatures.map((feature) => (
                        <label key={feature} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.features.includes(feature)}
                            onChange={(e) => handleFeaturesChange(feature, e.target.checked)}
                            className="rounded border-border text-[#33e9f2] focus:ring-[#33e9f2]"
                          />
                          <span className="text-sm text-foreground">{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#33e9f2] hover:bg-[#2bd4df] text-black text-lg py-3"
                    disabled={submitting}
                  >
                    {submitting ? 'Adding Car...' : 'Add Car Listing'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Sell;