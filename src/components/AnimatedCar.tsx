import React from 'react';
import { Car } from 'lucide-react';

const AnimatedCar = () => {
  return (
    <div className="fixed bottom-8 right-8 z-40 pointer-events-none">
      <div className="relative">
        {/* Floating car icon with 3D-like effects */}
        <div className="w-16 h-16 bg-gradient-to-br from-[#33e9f2] to-[#2bd4df] rounded-full flex items-center justify-center shadow-2xl animate-bounce">
          <Car className="w-8 h-8 text-black" />
        </div>
        
        {/* Animated glow effect */}
        <div className="absolute inset-0 w-16 h-16 bg-[#33e9f2] rounded-full animate-ping opacity-20"></div>
        
        {/* Floating particles */}
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#33e9f2] rounded-full animate-pulse opacity-60"></div>
        <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-[#2bd4df] rounded-full animate-pulse opacity-80 animation-delay-500"></div>
        <div className="absolute top-1 -left-3 w-1 h-1 bg-white rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
      </div>
    </div>
  );
};

export default AnimatedCar;