
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import Browse from "./pages/Browse";
import CarDetails from "./pages/CarDetails";
import NotFound from "./pages/NotFound";
import Showroom from "./pages/Showroom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Sell from "./pages/Sell";
import Blog from "./pages/Blog";
import BankDetails from "./pages/BankDetails";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import PremiumMotors from "./pages/PremiumMotors";
import TradeIn from "./pages/TradeIn";
import Auth from "./pages/Auth";
import Reviews from "./pages/Reviews";
import WhatsAppChat from "./components/WhatsAppChat";
import ScrollToTop from "./components/ScrollToTop";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { AuthProvider } from "./components/auth/AuthContext";

const queryClient = new QueryClient();

// Replace with your actual Google Analytics Measurement ID
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AuthProvider>
          <BrowserRouter>
            <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/car/:id" element={<CarDetails />} />
              <Route path="/showroom" element={<Showroom />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sell" element={<Sell />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/bank-details" element={<BankDetails />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/premium-motors" element={<PremiumMotors />} />
              <Route path="/trade-in" element={<TradeIn />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/reviews" element={<Reviews />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <WhatsAppChat />
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
