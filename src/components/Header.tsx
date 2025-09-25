
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Car, ChevronDown, LogOut, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from '@/components/auth/AuthContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const location = useLocation();
  const { user, isAdmin, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-lg shadow-lg py-3' : 'bg-background/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Car className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link to="/" className={`nav-link ${isActive('/') ? 'text-primary bg-accent' : ''}`}>Home</Link>
            <Link to="/browse" className={`nav-link ${isActive('/browse') ? 'text-primary bg-accent' : ''}`}>Collection</Link>
            <Link to="/showroom" className={`nav-link ${isActive('/showroom') ? 'text-primary bg-accent' : ''}`}>Showroom</Link>
            <Link to="/reviews" className={`nav-link ${isActive('/reviews') ? 'text-primary bg-accent' : ''}`}>Reviews</Link>
            <div className="relative">
              <button 
                className="nav-link flex items-center gap-1"
                onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              {isDesktopDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-popover rounded-lg shadow-lg border border-border py-2 z-50">
                  <Link to="/contact" className="block px-4 py-2 text-popover-foreground hover:bg-accent">Contact</Link>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <>
                {isAdmin && (
                  <Link to="/sell">
                    <Button className="bg-foreground hover:bg-foreground/80 text-background px-4 py-2 rounded-lg font-medium">
                      Add listing
                    </Button>
                  </Link>
                )}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-lg">
                      <User className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {user.email}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut()} className="flex items-center gap-2 text-destructive">
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Link to="/auth">
                <Button className="bg-[#33e9f2] hover:bg-[#2bd4df] text-black px-4 py-2 rounded-lg font-medium">
                  Sign In
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Dropdown Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-lg bg-accent hover:bg-accent/80"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-56 bg-popover border border-border shadow-lg z-50"
              >
                <DropdownMenuItem asChild>
                  <Link 
                    to="/" 
                    className={`w-full text-left px-4 py-2 ${isActive('/') ? 'text-primary bg-accent' : 'text-popover-foreground'}`}
                  >
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to="/browse" 
                    className={`w-full text-left px-4 py-2 ${isActive('/browse') ? 'text-primary bg-accent' : 'text-popover-foreground'}`}
                  >
                    Collection
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to="/showroom" 
                    className={`w-full text-left px-4 py-2 ${isActive('/showroom') ? 'text-primary bg-accent' : 'text-popover-foreground'}`}
                  >
                    Showroom
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link 
                    to="/reviews" 
                     className={`w-full text-left px-4 py-2 ${isActive('/reviews') ? 'text-primary bg-accent' : 'text-popover-foreground'}`}
                  >
                    Reviews
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link 
                    to="/contact" 
                    className={`w-full text-left px-4 py-2 ${isActive('/contact') ? 'text-primary bg-accent' : 'text-popover-foreground'}`}
                  >
                    Contact
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {user ? (
                  <>
                    {isAdmin && (
                      <DropdownMenuItem asChild>
                        <Link 
                          to="/sell" 
                          className="w-full text-left px-4 py-2 text-background bg-foreground hover:bg-foreground/80 rounded-md mx-2 my-1"
                        >
                          Add listing
                        </Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem className="flex items-center gap-2 mx-2">
                      <User className="h-4 w-4" />
                      {user.email}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => signOut()} className="flex items-center gap-2 text-destructive mx-2">
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </>
                ) : (
                  <DropdownMenuItem asChild>
                    <Link 
                      to="/auth" 
                      className="w-full text-left px-4 py-2 text-black bg-[#33e9f2] hover:bg-[#2bd4df] rounded-md mx-2 my-1"
                    >
                      Sign In
                    </Link>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
