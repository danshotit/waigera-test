
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Car, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-black rounded-2xl p-8 md:p-12 w-full max-w-lg text-center shadow-lg border border-border">
        <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-10 h-10 text-red-600" />
        </div>
        
        <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</p>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/">
            <Button className="bg-blue-600 hover:bg-blue-700 min-w-40">
              Back to Home
            </Button>
          </Link>
          <Link to="/browse">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 min-w-40">
              Browse Cars
            </Button>
          </Link>
        </div>
        
        <div className="mt-10 flex justify-center">
          <Link to="/" className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <Car className="w-4 h-4 text-white" />
            </div>
            <span>KenyaRides</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
