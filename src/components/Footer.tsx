
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Mail, Phone, MapPin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-sm text-white/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Car className="w-8 h-8 text-kenya-purple" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-kenya-blue to-kenya-purple">Waigera</span>
            </Link>
            <p className="text-sm max-w-xs">
              The premier destination for buying and selling quality used and showroom cars in Nairobi, Kenya.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="https://www.instagram.com/_waigera/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@waigera" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/browse" className="hover:text-kenya-purple transition-colors">Car Collection</Link></li>
              <li><Link to="/showroom" className="hover:text-kenya-purple transition-colors">Showroom</Link></li>
              <li><Link to="/sell" className="hover:text-kenya-purple transition-colors">Sell Your Car</Link></li>
              <li><Link to="/about" className="hover:text-kenya-purple transition-colors">About Us</Link></li>
              <li><a href="https://youtube.com/@waigera" target="_blank" rel="noopener noreferrer" className="hover:text-kenya-purple transition-colors flex items-center gap-2">
                <Youtube className="w-4 h-4" />
                Vlog
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Car Categories</h3>
            <ul className="space-y-3">
              <li><Link to="/browse?type=suv" className="hover:text-kenya-purple transition-colors">SUVs</Link></li>
              <li><Link to="/browse?type=sedan" className="hover:text-kenya-purple transition-colors">Sedans</Link></li>
              <li><Link to="/browse?type=truck" className="hover:text-kenya-purple transition-colors">Trucks</Link></li>
              <li><Link to="/browse?type=luxury" className="hover:text-kenya-purple transition-colors">Luxury Cars</Link></li>
              <li><Link to="/browse?condition=new" className="hover:text-kenya-purple transition-colors">Brand New</Link></li>
              <li><Link to="/browse?condition=used" className="hover:text-kenya-purple transition-colors">Slightly Used</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-kenya-purple" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-kenya-purple" />
                <span>+254795838290</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-kenya-purple" />
                <span>info@waigera.co</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-white font-medium mb-3">Follow Waigera</h4>
              <div className="flex space-x-3">
                <a href="https://youtube.com/@waigera" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg transition-colors">
                  <Youtube className="w-4 h-4" />
                  YouTube
                </a>
                <a href="https://www.instagram.com/_waigera/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm bg-pink-600 hover:bg-pink-700 px-3 py-2 rounded-lg transition-colors">
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              © {new Date().getFullYear()} Waigera. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <Link to="/terms" className="hover:text-kenya-purple transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="hover:text-kenya-purple transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
