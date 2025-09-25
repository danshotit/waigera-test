import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CarProps } from '@/components/CarCard';
import { ChevronRight, Navigation, Phone, Mail, ArrowRight, Car as CarIcon } from "lucide-react";

// Comprehensive car data including all cars
const carData: { [key: number]: CarProps & { description: string, features: string[], gallery: string[] } } = {
  1: {
    id: 1,
    title: "2018 Porsche Cayenne ",
    image: "/lovable-uploads/3.jpg",
    price: "KES 11,000,000",
    year: 2018,
    mileage: "",
    location: "Nairobi",
    condition: "Slightly Used",
    transmission: "8-speed Tiptronic S Automatic",
    engine: "3.0L V6",
    description: "The 2018 Porsche Cayenne with the 3.0 L V6 is a well-rounded luxury SUV that blends Porsche’s sports-car DNA with the everyday functionality of an SUV. Expect responsive turbocharged power, refined handling thanks to high-tech chassis aids, and a polished, feature-rich interior that elevates the driving experience.",
    features: [
      "3.0l V6 Turbocharged Petrol Engine",
     "⁠AWD system",
     "⁠8-speed Tiptronic S Automatic Transmission",
     "⁠Bose Sound system", 
"⁠Sport chrono package ",
"⁠Adaptive air suspension ",
"⁠Front seats heated and ventilated", 
"⁠Panaromic Sunroof",
"⁠Dual-zone climate control", 
"⁠360 surround view camera"
    ],
    gallery: [
      "/lovable-uploads/3a.jpg",
      "/lovable-uploads/3b.jpg",
      "/lovable-uploads/3c.jpg",
      "/lovable-uploads/3d.jpg"
    ]
  },
  2: {
    id: 2,
    title: "2018 Volkswagen Golf R ",
    image: "/lovable-uploads/g.jpg",
    price: "KES 4,390,000",
    year: 2018,
    mileage: "",
    location: "Nairobi",
    condition: "Slightly Used",
    transmission: "8-speed Tiptronic S Automatic ",
    engine: "2.0L Turbocharged inline-4 Petrol",
    description: "The 2018 Golf R is a refined hot hatch—combining stealthy styling with sharp performance, all-wheel grip, and generous tech features. Whether tackling twisty roads or commuting, it delivers sports-car thrills in a sensible, luxurious package.",
    features: [
      "2.0L Turbocharged inline-4 Petrol Engine",
      "⁠AWD system",
      "⁠7-speed DSG Dual-clutch Automatic Transmission",
      "⁠Apple Carplay & Android Auto",
      "⁠Adaptive Cruise Control",
      "⁠Front seats heated and ventilated",
      "⁠Electric Stability Control",
      "⁠Dual-zone climate control",
      "⁠360 surround view camera",
      "C⁠Anti-lock Braking system"

    ],
    gallery: [
      "/lovable-uploads/g1.jpg",
      "/lovable-uploads/g2.jpg",
      "/lovable-uploads/g3.jpg",
      "/lovable-uploads/g4.jpg"
    ]
  },
  3: {
    id: 3,
    title: "2017 Mercedes Benz GLE 350D ",
    image: "/lovable-uploads/f.jpg",
    price: "KES 5,800,000",
    year: 2017,
    mileage: "",
    location: "Nairobi",
    condition: "Slightly Used",
    transmission: "9-speed Automatic Transmission ( 9G-Tronic )",
    engine: "3.0L V6 Turbocharged Diesel",
    description: "The Mercedes-Benz GLE 350d blends diesel refinement with luxury and functionality. Ideal for buyers who want relaxed highway cruising, premium comfort, and tech-forward safety—yet still desire an SUV capable of handling varied terrain and practical family duties.",
    features: [
      "3.0L V6 Turbocharged Diesel Engine",
      "⁠AWD system",
      "⁠9-speed Automatic Transmission ( 9G-Tronic )",
      "⁠Apple Carplay & Android Auto",
      "⁠Adaptive Cruise Control",
      "⁠Front seats heated and ventilated",
      "⁠Harman Kardon Sound system",
      "⁠Dual-zone climate control",
      "⁠360 surround view camera",
      "⁠Anti-lock Braking system",
      "⁠Panaromic Sunroof"

       
    ],
    gallery: [
      "/lovable-uploads/f1.jpg",
      "/lovable-uploads/f2.jpg",
      "/lovable-uploads/f3.jpg",
      "/lovable-uploads/f4.jpg"
    ]
  },
  4: {
    id: 4,
    title: "2017 Peugeot 308 Petrol Variant ",
    image: "/lovable-uploads/d.jpg",
    price: "KES 2,300,000",
    year: 2017,
    mileage: "",
    location: "Nairobi",
    condition: "Slightly Used",
    transmission: "6-speed Automatic",
    engine: "1.6L Turbocharged inline-4",
    description: "The 2017 Peugeot 308 1.6 THP (205 hp) is a compelling choice for drivers seeking style, performance, and everyday flexibility. Its turbocharged powertrain delivers energetic acceleration, its efficient fuel use and moderate CO₂ output align with modern expectations, and its practicality ensures family-friendly usability—especially in estate configurations.",
    features: [
      "1.6L Turbocharged inline-4 Engine",
      "⁠Front-wheel drive system",
      "⁠6-speed Automatic Transmission",
      "⁠Multi-function steering wheel",
      "⁠Adaptive Cruise Control",
      "⁠Front seats heated and ventilated",
      "⁠start / stop technology ",
      "⁠Dual-zone climate control",
      "⁠ISOFIX Mounts",
      "⁠Touchscreen Infotainment system",
      "⁠Rear Parking sensors"


    
    ],
    gallery: [
      "/lovable-uploads/d1.jpg",
      "/lovable-uploads/d2.jpg",
      "/lovable-uploads/d3.jpg",
      "/lovable-uploads/d4.jpg"
    ]
  },
  5: {
    id: 5,
    title: "2018 Audi q5",
    image: "/lovable-uploads/e.jpg",
    price: "KES 5,990,000",
    year: 2018,
    mileage: "0 km",
    location: "Nairobi",
    condition: "Showroom",
    transmission: "7-speed Automatic Dual-clutch",
    engine: "2.0L Turbocharged inline-4 Engine",
    description: "In essence, the 2018 Audi Q5 is a beautifully balanced luxury compact SUV—combining brisk performance, a refined interior, and intelligent tech. It rides with poise, drives with agility, and offers a package that feels both upscale and practical.",
    features: [
      "2.0L Turbocharged inline-4 Engine",
      "⁠All-wheel drive system",
      "⁠7-speed Automatic Dual-clutch Transmission",
      "⁠Multi-function steering wheel",
      "⁠Leather Upholstery",
      "⁠Adaptive Cruise Control ",
      "Apple car play and Android Auto",
      "⁠Dual-zone climate control",
      "Panoramic Sunroof",
      "⁠ISOFIX Mounts",
      "⁠7-inch MMI infotainment display"


    ],
    gallery: [
      "/lovable-uploads/e1.jpg",
      "/lovable-uploads/e2.jpg",
      "/lovable-uploads/e3.jpg",
      "/lovable-uploads/e4.jpg"
    ]
  },
  6: {
    id: 6,
    title: "2022 Land Rover Defender 110",
    image: "/lovable-uploads/c.jpg",
    price: "KES 18,900,000",
    year: 2022,
    mileage: "0 km",
    location: "Nairobi",
    condition: "Showroom",
    transmission: "8-speed Automatic",
    engine: "3.0L Inline 6 Twin-Turbocharged Diesel",
    description: "The 2022 Defender 110 is a modern reinterpretation of an iconic 4×4—combining luxury, tech, and everyday usability with unmatched off-road ability. Whether you opt for the efficient turbo-4, torquey mild-hybrid I6, or thrilling V8, there’s a Defender 110 to satisfy both your wilderness ambitions and your highway comfort.",
    features: [
      "3.0L Inline 6 Twin-Turbocharged Diesel",
      "⁠All-wheel drive system",
      "⁠8-speed Automatic",
      "⁠Multi-function steering wheel",
      "⁠Adaptive Cruise Control",
      "⁠Meridian Sound System",
      "Apple car play and Android Auto",
      "⁠Dual-zone climate control",
      "⁠Electronic Air Suspension",
      "⁠All-Terrain Progress Control",
      "⁠Panaromic Sunroof",
      "⁠Heated Front Seats",
      "⁠X-Dynamic exterior styling",
      "⁠20-inch alloy wheels"


    ],
    gallery: [
      "/lovable-uploads/c1.jpg",
      "/lovable-uploads/c2.jpg",
      "/lovable-uploads/c3.jpg",
      "/lovable-uploads/c4.jpg"
    ]
  },
  7: {
    id: 7,
    title: "2017 Peugeot 308 Diesel Variant",
    image: "/lovable-uploads/a.jpg",
    price: "KES 2,200,000",
    year: 2017,
    mileage: "0 km",
    location: "Nairobi",
    condition: "Showroom",
    transmission: "6-speed Automatic",
    engine: "1.6L BlueHDi Diesel Engine",
    description: "The 2017 Peugeot 308 1.6 is a compelling choice for drivers seeking style, performance, and everyday flexibility. Its turbocharged powertrain delivers energetic acceleration, its efficient fuel use and moderate CO₂ output align with modern expectations, and its practicality ensures family-friendly usability—especially in estate configurations.",
    features: [
      "1.6L BlueHDi Diesel",
      "⁠Front-wheel drive system",
      "⁠6-speed Automatic Transmission",
      "⁠Multi-function steering wheel",
      "⁠Adaptive Cruise Control",
      "⁠Moonroof",
      "⁠start / stop technology",
      "⁠Dual-zone climate control",
      "⁠ISOFIX Mounts",
      "⁠Touchscreen Infotainment",
      "⁠Rear Parking sensors"

    ],
    gallery: [
      "/lovable-uploads/a1.jpg",
      "/lovable-uploads/a2.jpg",
      "/lovable-uploads/a3.jpg",
      "/lovable-uploads/a4.jpg"
    ]
  },
  8: {
    id: 8,
    title: "2018 Ford Ranger Thunder",
    image: "/lovable-uploads/m.jpg",
    price: "KES 6,900,000",
    year: 2018,
    mileage: "0 km",
    location: "Nairobi",
    condition: "Showroom",
    transmission: "10-speed Automatic",
    engine: "2.0L Bi-Turbo Diesel",
    description: "In brief, the 2018 Ford Ranger Thunder is a bold, premium variant of the Ranger lineup—fusing Wildtrak refinement with sporty design cues, enhanced interior, advanced safety, and rugged utility that makes it both visually arresting and highly capable.",
    features: [
      "2.0L Bi-Turbo Diesel Engine",
      "⁠10-speed Automatic transmission",
      "⁠4WD Capability ",
      "⁠Adaptive Cruise Control",
      "⁠Payload capacity over one tonne",
      "Apple car play and Android Auto",
      "⁠Dual-zone climate control",
      "⁠18-inch alloy wheels",
      "⁠Ford SYNC 3 infotainment system"


    ],
    gallery: [
      "/lovable-uploads/m1.jpg",
      "/lovable-uploads/m2.jpg",
      "/lovable-uploads/m3.jpg",
      "/lovable-uploads/m.jpg"
    ]
  },
  9: {
    id: 9,
    title: "2020 Lamborghini Urus Giallo Auge",
    image: "/lovable-uploads/n.jpg",
    price: "Upon request",
    year: 2020,
    mileage: "",
    location: "Mombasa",
    condition: "Showroom",
    transmission: "Automatic transmission",
    engine: "4.0L Twin-Turbo V8",
    description: "The 2020 Lamborghini Urus Giallo Auge is the ultimate modern super-SUV: visually striking, ferociously fast, and surprisingly practical. It marries Lamborghini’s signature drama and performance with SUV versatility, all wrapped in a deeply personal—and unforgettable—shade of yellow. ",
    features: [
      "4.0L Twin-Turbo V8 Engine",
      "⁠Automatic transmission",
      "⁠Power - 641HP",
      "⁠Carbon Accents",
      "L⁠Bang & Olufsen sound",
      "⁠Adaptive air suspension",
      "⁠Adaptive Cruise Control",
      "Apple car play and Android Auto",
      "⁠Dual-zone climate control",
      "Panoramic Sunroof",
      "⁠Emergency Braking Assist",
      "⁠ABS & Traction Control"


    ],
    gallery: [
      "/lovable-uploads/n1.jpg",
      "/lovable-uploads/n2.jpg",
      "/lovable-uploads/n3.jpg",
      "/lovable-uploads/n4.jpg"
    ]
  },
  10: {
    id: 10,
    title: "2018 Lexus RX300",
    image: "/lovable-uploads/o.jpg",
    price: "Upon request",
    year: 2018,
    mileage: "",
    location: "Mombasa",
    condition: "Showroom",
    transmission: "Automatic transmission",
    engine: "2.0L Turbocharged Petrol",
    description: "The 2018 Lexus RX 300 strikes a refined balance between luxury and daily functionality. It offers a smooth, efficient turbo engine, elegant comfort, and a host of advanced safety tech. Though not the fastest in its class, it caters well to those seeking a quiet, well-appointed ride—making it a compelling option in the midsize luxury SUV market. ",
    features: [
      "2.0L Turbocharged Petrol",
      "⁠Automatic transmission",
      "⁠2WD Drive Train",
      "⁠Leon Hardiritt Alloy Wheels",
      "⁠Leather seats",
      "⁠Mark Levinson Sound System",
      "⁠Adaptive Cruise Control",
      "Apple car play and Android Auto",
      "⁠Dual-zone climate control",
      "Panoramic Sunroof",
      "⁠Heated front seats",
      "⁠ABS & Traction Control"

    ],
    gallery: [
      "/lovable-uploads/o1.jpg",
      "/lovable-uploads/o2.jpg",
      "/lovable-uploads/o3.jpg",
      "/lovable-uploads/o4.jpg"
    ]
  },
  11: {
    id: 11,
    title: "2022 Lexus LX600 VIP Elegance",
    image: "/lovable-uploads/l.jpg",
    price: "Upon request",
    year: 2022,
    mileage: "5000 km",
    location: "Mombasa",
    condition: "Showroom",
    transmission: "Automatic transmission",
    engine: "3.5L Twin-Turbo Petrol",
    description: "The 2022 Lexus LX 600 VIP Elegance is the pinnacle of luxury SUVs—delivering supreme comfort, state-of-the-art tech, and refined power. Whether dominating rugged terrain or offering plush cabin serenity for executive passengers, this SUV exudes Lexus’s celebrated craftsmanship and hospitality. ",
    features: [
      "3.5L Twin-Turbo Petrol Engine",
      "⁠Automatic transmission",
      "⁠Mileage 5,000 km",
      "⁠4-seat exclusivity",
      "⁠Tan brown interior",
      "⁠Adaptive air suspension",
      "⁠Adaptive Cruise Control",
      "Apple car play and Android Auto",
      "⁠Dual-zone climate control",
      "Sunroof",
      "⁠Emergency Braking Assist",
      "⁠ABS & Traction Control"

    ],
    gallery: [
      "/lovable-uploads/l1.jpg",
      "/lovable-uploads/l2.jpg",
      "/lovable-uploads/l3.jpg",
      "/lovable-uploads/l4.jpg"
    ]
  },
  12: {
    id: 12,
    title: "2018 Mercedes Benz E350e AMG LINE",
    image: "/lovable-uploads/k.jpg",
    price: "Upon request",
    year: 2018,
    mileage: "",
    location: "Mombasa",
    condition: "Showroom",
    transmission: "Automatic transmission",
    engine: "2.0L  Petrol Engine + Electric Motor",
    description: "The 2018 Mercedes-Benz E350e AMG Line offers a compelling blend of electrified efficiency, luxury, and performance. It gives drivers the refined comfort and technology of the E-Class with the added benefit of plug-in hybrid efficiency—all wrapped in sporty AMG styling. It stands out as a sophisticated, eco-conscious executive sedan without sacrificing prestige or driving enjoyment. ",
    features: [
      "2.0L  Petrol Engine + Electric Motor",
      "⁠Automatic transmission",
      "⁠Mileage 32,011 km",
      "⁠Full leather Seats",
      "⁠Ambient Lighting",
      "Burmeister sound system",
      "⁠Adaptive Cruise Control",
      "Apple car play and Android Auto",
      "⁠Dual-zone climate control",
      "Panoramic Sunroof",
      "⁠Emergency Braking Assist",
      "⁠ABS & Traction Control"

    ],
    gallery: [
      "/lovable-uploads/k1.jpg",
      "/lovable-uploads/k2.jpg",
      "/lovable-uploads/k3.jpg",
      "/lovable-uploads/k4.jpg"
    ]
  },
  17: {
    id: 17,
    title: "2021 BMW X3",
    image: "//lovable-uploads/r.jpg",
    price: "KES 6,800,000",
    year: 2021,
    mileage: "28,000 km",
    location: "Nairobi",
    condition: "Slightly Used",
    transmission: "Automatic",
    engine: "2.0L TwinPower",
    description: "This well-maintained 2021 BMW X3 offers the perfect balance of luxury and performance. With its distinctive kidney grille and athletic stance, this compact luxury SUV delivers BMW's signature driving dynamics with excellent fuel efficiency and advanced safety features.",
    features: [
      "2.0L TwinPower Turbo Engine",
      "xDrive All-Wheel Drive",
      "BMW iDrive 7.0",
      "LED Headlights with DRL",
      "Panoramic Sunroof",
      "Leather Interior",
      "Heated Front Seats",
      "Apple CarPlay & Android Auto",
      "BMW Driver Assistance Package",
      "18-inch Alloy Wheels"
    ],
    gallery: [
      "/lovable-uploads/8ae49a93-e1e2-4bd5-bbb6-2f93f7c9f72c.png",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2060&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612057248888-acb0bcbe2dba?q=80&w=2069&auto=format&fit=crop"
    ]
  },
  18: {
    id: 18,
    title: "2022 Volkswagen Golf R",
    image: "//lovable-uploads/s.jpg",
    price: "KES 4,900,000",
    year: 2022,
    mileage: "25,000 km",
    location: "Mombasa",
    condition: "Slightly Used",
    transmission: "DSG",
    engine: "2.0L TSI",
    description: "The 2022 Volkswagen Golf R is the ultimate performance hatchback, combining everyday practicality with track-ready performance. This hot hatch features all-wheel drive, a turbocharged engine, and sport-tuned suspension for an exhilarating driving experience.",
    features: [
      "2.0L TSI Turbocharged Engine",
      "4MOTION All-Wheel Drive",
      "7-Speed DSG Transmission",
      "Adaptive Sport Suspension",
      "Sport Exhaust System",
      "R Performance Package",
      "Digital Cockpit Pro",
      "LED Matrix Headlights",
      "Sport Seats with R Logo",
      "Performance Braking System"
    ],
    gallery: [
      "/lovable-uploads/db7f70cc-93dc-4ac2-8106-94e3f20766b1.png",
      "https://images.unsplash.com/photo-1617654112368-307921291f42?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609344215928-e57554ffa2a6?q=80&w=1972&auto=format&fit=crop"
    ]
  },
  19: {
    id: 19,
    title: "2023 Mitsubishi Lancer Evolution",
    image: "/lovable-uploads/108be3f1-8bfd-4a23-811e-cb43f4125453.png",
    price: "KES 5,200,000",
    year: 2023,
    mileage: "15,000 km",
    location: "Nakuru",
    condition: "Slightly Used",
    transmission: "Manual",
    engine: "2.0L Turbo",
    description: "The legendary 2023 Mitsubishi Lancer Evolution returns with modern styling and enhanced performance. This rally-bred sedan offers exceptional handling, turbocharged power, and the purist driving experience with its 6-speed manual transmission.",
    features: [
      "2.0L MIVEC Turbo Engine",
      "S-AWC All-Wheel Control",
      "6-Speed Manual Transmission",
      "Brembo Performance Brakes",
      "Bilstein Dampers",
      "Recaro Sport Seats",
      "Carbon Fiber Accents",
      "Sport-Tuned Exhaust",
      "Launch Control System",
      "Evolution Badge Package"
    ],
    gallery: [
      "/lovable-uploads/108be3f1-8bfd-4a23-811e-cb43f4125453.png",
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612911912304-5c8532fb94fb?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  20: {
    id: 20,
    title: "2023 Nissan Navara",
    image: "/lovable-uploads/e78c8b7b-64de-46d7-8b78-9f04d55a3b23.png",
    price: "KES 4,800,000",
    year: 2023,
    mileage: "12,000 km",
    location: "Eldoret",
    condition: "Slightly Used",
    transmission: "Automatic",
    engine: "2.3L Turbo Diesel",
    description: "The 2023 Nissan Navara is a versatile pickup truck that excels both as a work vehicle and family transport. With its robust diesel engine and advanced 4WD system, it's perfect for both urban commuting and off-road adventures.",
    features: [
      "2.3L Twin-Turbo Diesel Engine",
      "Intelligent 4WD System",
      "7-Speed Automatic Transmission",
      "Hill Descent Control",
      "Rear Differential Lock",
      "NissanConnect Infotainment",
      "360-Degree Around View Monitor",
      "Intelligent Emergency Braking",
      "Load Bed Liner",
      "Tow Bar Package"
    ],
    gallery: [
      "/lovable-uploads/e78c8b7b-64de-46d7-8b78-9f04d55a3b23.png",
      "https://images.unsplash.com/photo-1551830820-330a71b99659?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609344215928-e57554ffa2a6?q=80&w=1972&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626443274909-358db57edaf1?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  21: {
    id: 21,
    title: "2024 Mercedes-AMG GLE 63",
    image: "/lovable-uploads/5ea193cb-db63-4fb8-abe1-b194620f17a4.png",
    price: "KES 18,500,000",
    year: 2024,
    mileage: "0 km",
    location: "Nairobi",
    condition: "Showroom",
    transmission: "Automatic",
    engine: "4.0L V8 Biturbo",
    description: "The ultimate performance SUV, the 2024 Mercedes-AMG GLE 63 combines luxury with mind-bending performance. This flagship AMG model features a handcrafted 4.0L V8 Biturbo engine and the most advanced AMG technologies for an unparalleled driving experience.",
    features: [
      "Handcrafted 4.0L V8 Biturbo Engine",
      "AMG Performance 4MATIC+",
      "AMG SPEEDSHIFT TCT 9G",
      "AMG DYNAMIC SELECT",
      "AMG Ride Control+ Suspension",
      "AMG Performance Exhaust",
      "Burmester 3D Surround Sound",
      "AMG Track Pace",
      "Nappa Leather AMG Seats",
      "AMG Night Package"
    ],
    gallery: [
      "/lovable-uploads/5ea193cb-db63-4fb8-abe1-b194620f17a4.png",
      "/lovable-uploads/4dbfb66c-2542-4bd2-b11d-68ff6c51b196.png",
      "https://images.unsplash.com/photo-1583267746897-2cf415887172?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2060&auto=format&fit=crop"
    ]
  },
  22: {
    
    id: 22,
    title: "2014 BMW 116i",
    image: "/lovable-uploads/r.jpg",
    price: "KES 1,500,000",
    year: 2014,
    mileage: "",
    location: "Nairobi",
    condition: "Second Hand",
    transmission: "Automatic",
    engine: " 1600cc petrol engine",
    description: "This 2011 Toyota Mark X offers reliable performance and luxury features at an affordable price. Despite its mileage, this V6-powered sedan has been well-maintained and provides excellent value for money with Toyota's renowned reliability.",
    features: [
      "Engine 1600cc petrol engine",
      "Automatic Transmission",
      "⁠Drive Type 2wd",
      "⁠Entertainment display",
      "⁠Black & Beige leather seats",
      "⁠Black Paint code",
      " Seaters 5"
      
    ],
    gallery: [
      "/lovable-uploads/r1.jpg",
      "/lovable-uploads/r2.jpg",
      "/lovable-uploads/r3.jpg",
      "/lovable-uploads/r6.jpg"
    ]
  },
//second hand cars
  23: {
    id: 23,
    title: "2011 Volkswagen Touareg TDI",
    image: "/lovable-uploads/s.jpg",
    price: "KES 2,750,000",
    year: 2011,
    mileage: "125,000kms",
    location: "Nairobi",
    condition: "Second Hand",
    transmission: "Automatic transmission",
    engine: "3000cc TDI",
    description: "The 2011 Touareg TDI is a solid pick if you want a large SUV that combines strong diesel torque, real towing capability, off-road readiness, and a refined driving experience. Just be prepared for potential maintenance costs down the line—especially with older models or higher mileage.",
    features: [
      "Engine size 3000cc TDI",
      "Automatic Transmission",
      "⁠Drive type : 4WD optional",
      "⁠Matte Black original color",
      "⁠Fog lights",
      "⁠Full leather seats",
      " ⁠Stock alloy wheels",
      " ⁠Premium Audio system",
      " ⁠Bluetooth connectivity",
      " ⁠Dual zone climate control",
      " ⁠ABS Brakes",
      " ⁠Mileage 125,000kms",
      " ⁠Premium Audio system",


      
    ],
    gallery: [
      "/lovable-uploads/s1.jpg",
      "/lovable-uploads/s2.jpg",
      "/lovable-uploads/s3.jpg",
      "/lovable-uploads/s4.jpg"
    ]
  },


  24: {
    id: 24,
    title: "2018 Honda Fit",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2070&auto=format&fit=crop",
    price: "KES 1,900,000",
    year: 2018,
    mileage: "60,000 km",
    location: "Mombasa",
    condition: "Second Hand",
    transmission: "CVT",
    engine: "1.3L",
    description: "The 2018 Honda Fit is an economical and practical subcompact car ideal for city driving. With its spacious interior, excellent fuel economy, and Honda's reliability, it's perfect for first-time buyers or anyone looking for efficient urban transportation.",
    features: [
      "1.3L i-VTEC Engine",
      "CVT Transmission",
      "Magic Seats Configuration",
      "Honda LaneWatch",
      "Multi-Angle Rearview Camera",
      "Honda Link Infotainment",
      "Eco Assist System",
      "Hill Start Assist",
      "Vehicle Stability Assist",
      "Bluetooth Hands-Free"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549399723-3edf5179d6c4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2069&auto=format&fit=crop"
    ]
  },
  25: {
    id: 25,
    title: "2020 Mazda Demio",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop",
    price: "KES 2,200,000",
    year: 2020,
    mileage: "35,000 km",
    location: "Kisumu",
    condition: "Second Hand",
    transmission: "Automatic",
    engine: "1.5L",
    description: "The 2020 Mazda Demio combines Mazda's SKYACTIV technology with stylish design and excellent fuel efficiency. This compact car offers a premium feel with advanced safety features and responsive handling perfect for city and highway driving.",
    features: [
      "1.5L SKYACTIV-G Engine",
      "SKYACTIV-Drive Automatic",
      "MZD Connect Infotainment",
      "i-ACTIVSENSE Safety",
      "LED Headlights",
      "Push Button Start",
      "Automatic Climate Control",
      "Reverse Camera",
      "Blind Spot Monitoring",
      "Lane Departure Warning"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549399723-3edf5179d6c4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2069&auto=format&fit=crop"
    ]
  },
  26: {
    id: 26,
    title: "2017 Subaru Impreza",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop",
    price: "KES 2,700,000",
    year: 2017,
    mileage: "75,000 km",
    location: "Nakuru",
    condition: "Second Hand",
    transmission: "Manual",
    engine: "2.0L",
    description: "The 2017 Subaru Impreza offers Subaru's legendary all-wheel drive system and boxer engine configuration. This reliable sedan provides excellent traction in all weather conditions and features Subaru's EyeSight safety technology.",
    features: [
      "2.0L BOXER Engine",
      "Symmetrical All-Wheel Drive",
      "Manual Transmission",
      "EyeSight Driver Assist",
      "STARLINK Infotainment",
      "Reverse Camera",
      "Blind Spot Detection",
      "Rear Cross Traffic Alert",
      "LED Headlights",
      "All-Weather Package"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626443274909-358db57edaf1?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612911912304-5c8532fb94fb?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549399723-3edf5179d6c4?q=80&w=2070&auto=format&fit=crop"
    ]
  }
};

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<(CarProps & { description: string, features: string[], gallery: string[] }) | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string>("");
  
  useEffect(() => {
    // Simulate API fetch
    const fetchCar = () => {
      setIsLoading(true);
      setTimeout(() => {
        if (id && carData[parseInt(id)]) {
          const fetchedCar = carData[parseInt(id)];
          setCar(fetchedCar);
          setSelectedImage(fetchedCar.image);
        }
        setIsLoading(false);
      }, 800);
    };
    
    fetchCar();
  }, [id]);
  
  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen pt-32 pb-20 bg-gray-50 flex justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Loading car details...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  if (!car) {
    return (
      <>
        <Header />
        <div className="min-h-screen pt-32 pb-20 bg-gray-50 flex flex-col items-center justify-center">
          <CarIcon className="w-16 h-16 text-gray-400 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Car Not Found</h1>
          <p className="text-gray-600 mb-8">The car you're looking for doesn't exist or has been removed.</p>
          <Link to="/browse">
            <Button className="bg-[#33e9f2] hover:bg-[#2bd4df] text-black">
              Browse Other Cars
            </Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-black pt-28 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-muted-foreground text-sm">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/browse" className="hover:text-primary transition-colors">Collection</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-foreground">{car?.title}</span>
          </div>
        </div>
      </div>
      
      {/* Car Details */}
      <div className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Car Images */}
            <div className="lg:col-span-2">
              <div className="bg-black rounded-xl overflow-hidden shadow-lg border border-border">
                <div className="aspect-video w-full">
                  <img 
                    src={selectedImage} 
                    alt={car?.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                <div className="p-4 grid grid-cols-4 gap-3">
                  {car?.gallery.map((img, index) => (
                    <div 
                      key={index}
                      className={`aspect-video rounded-md overflow-hidden cursor-pointer border-2 ${
                        selectedImage === img ? 'border-blue-600' : 'border-white'
                      }`}
                      onClick={() => setSelectedImage(img)}
                    >
                      <img 
                        src={img} 
                        alt={`${car.title} - view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Car Info and CTA */}
            <div className="lg:col-span-1">
              <div className="bg-black rounded-xl p-6 mb-6 shadow-lg border border-border">
                <h1 className="text-2xl font-bold text-foreground mb-2">{car?.title}</h1>
                
                <div className="flex items-center mb-6">
                  <span className="text-[#33e9f2] font-semibold mr-3">{car?.condition}</span>
                  <div className="flex items-center text-gray-600 dark:text-white">
                    <Navigation className="w-4 h-4 mr-1" />
                    <span>{car?.location}</span>
                  </div>
                </div>
                
                <div className="text-3xl font-bold text-[#33e9f2] mb-6">{car?.price}</div>
                
                <div className="grid grid-cols-2 gap-4 text-sm mb-8">
                  <div className="flex flex-col">
                    <span className="text-gray-500 dark:text-white mb-1">Year</span>
                    <span className="text-gray-900 dark:text-white">{car?.year}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 dark:text-white mb-1">Mileage</span>
                    <span className="text-gray-900 dark:text-white">{car?.mileage}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 dark:text-white mb-1">Engine</span>
                    <span className="text-gray-900 dark:text-white">{car?.engine}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 dark:text-white mb-1">Transmission</span>
                    <span className="text-gray-900 dark:text-white">{car?.transmission}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Link to="/contact">
                    <Button className="bg-[#33e9f2] hover:bg-[#2bd4df] text-black w-full">Contact Seller</Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">Book Test Drive</Button>
                  </Link>
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">Apply for Financing</Button>
                </div>
              </div>
              
              <div className="bg-black rounded-xl p-6 shadow-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                      <Phone className="w-5 h-5 text-[#33e9f2]" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Phone</p>
                      <p className="text-gray-900">+254795838290</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                      <Mail className="w-5 h-5 text-[#33e9f2]" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Email</p>
                      <p className="text-gray-900">info@waigera.co</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs with details */}
          <div className="mt-10">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="bg-black grid grid-cols-3 h-auto mb-8">
                <TabsTrigger value="description" className="py-3 data-[state=active]:text-primary">Description</TabsTrigger>
                <TabsTrigger value="equipment" className="py-3 data-[state=active]:text-primary">Equipment</TabsTrigger>
                <TabsTrigger value="flaws" className="py-3 data-[state=active]:text-primary">Known Flaws</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="bg-black rounded-xl p-6 shadow-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Car Description</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {car.description}
                </p>
                <div className="mt-6 p-4 bg-card rounded-lg border border-border">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Waigera's Take</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Our expert team has thoroughly inspected this vehicle and can confidently recommend it based on its excellent condition, 
                    maintenance history, and overall value proposition. This car represents a smart investment for buyers seeking quality and reliability.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="equipment" className="bg-black rounded-xl p-6 shadow-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-6">Equipment & Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="flaws" className="bg-black rounded-xl p-6 shadow-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Known Issues & Inspection</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Known Issues</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                      
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">No major mechanical issues identified</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">All safety systems functioning properly</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Inspection Notes</h4>
                    <p className="text-muted-foreground">
                      This vehicle has undergone our comprehensive 120-point inspection. All major components are in excellent working condition. 
                      Regular maintenance records are available and show consistent care by the previous owner.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Similar cars */}
          <div className="mt-16">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Similar Cars</h3>
              <Link to="/browse">
                <Button variant="outline" className="border-[#33e9f2] text-[#33e9f2] hover:bg-[#33e9f2]/10 group">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Object.values(carData).slice(0, 4).map((similarCar, index) => {
                if (similarCar.id === car.id) return null;
                return (
                  <div 
                    key={similarCar.id} 
                    className="opacity-0 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <div className="car-hover-effect">
                      <Link to={`/car/${similarCar.id}`}>
                        <div className="bg-black rounded-xl overflow-hidden h-full shadow-lg border border-border">
                          <div className="relative">
                            <div className="aspect-video overflow-hidden">
                              <img 
                                src={similarCar.image} 
                                alt={similarCar.title} 
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                              />
                            </div>
                            <div className="absolute -bottom-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg shadow-lg">
                              <span className="font-bold">{similarCar.price}</span>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-2">{similarCar.title}</h3>
                            <div className="flex items-center text-gray-600 mb-4">
                              <Navigation className="w-4 h-4 mr-1" />
                              <span className="text-sm">{similarCar.location}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default CarDetails;
