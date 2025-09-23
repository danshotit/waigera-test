import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const About = () => {
  const youtubeVideos = [
    {
      id: "eOtfU5KhPAw",
      title: "Latest Car Reviews & Test Drives",
      description: "Join us as we review the latest arrivals at Waigera"
    },
    {
      id: "CfUEBwTgV3E",
      title: "Car Buying Tips from Experts",
      description: "Essential tips for buying your next car in Kenya"
    },
    {
      id: "FHnvOp8Mwes",
      title: "Behind the Scenes at Waigera",
      description: "See how we inspect and prepare cars for our customers"
    },
    {
      id: "FHnvOp8Mwes",
      title: "Customer Success Stories",
      description: "Hear from satisfied customers about their experience"
    },
    {
      id: "aKhs778kkkE",
      title: "Maintenance & Care Tips",
      description: "Keep your car running smooth with expert advice"
    },
    {
      id: "M2pythVwwyI",
      title: "Market Trends & Insights",
      description: "Stay updated with the latest automotive market trends"
    },
    {
      id: "ZnQVcCHX368",
      title: "Premium Car Features",
      description: "Explore the premium features of our luxury vehicles"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Page Header */}
      <div className="pt-28 pb-16 bg-gradient-to-r from-blue-600 via-gray-900 to-purple-600">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-6">YouTube Vlogs</h1>
          <p className="text-white/80 max-w-2xl text-lg">
            Stay connected with Waigera through our YouTube channel featuring car reviews, tips, and behind-the-scenes content.
          </p>
        </div>
      </div>
      
      {/* YouTube Videos Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Latest Videos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Subscribe to our channel for the latest car reviews, buying tips, and automotive insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {youtubeVideos.map((video, index) => (
              <div 
                key={video.id} 
                className="bg-black border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{video.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Subscribe Section */}
      <section className="py-16 bg-black border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Subscribe to Our Channel</h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto mb-8">
            Don't miss out on our latest content! Subscribe for weekly car reviews, buying guides, and automotive tips.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white min-w-40 font-semibold"
              onClick={() => window.open('https://youtube.com/@waigerarides', '_blank')}
            >
              Subscribe on YouTube
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="min-w-40 font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default About;