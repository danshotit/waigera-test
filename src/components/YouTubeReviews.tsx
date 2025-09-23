import React from 'react';
import { Play } from 'lucide-react';

const YouTubeReviews = () => {
  const reviews = [
    {
      id: 1,
      title: "Toyota Camry 2023 - Complete Review & Test Drive",
      videoId: "_KcJYCVRP7c",
      thumbnail: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2069&auto=format&fit=crop",
      customerName: "Expert Review",
      rating: 5
    },
    {
      id: 2,
      title: "Why Choose Waigera - Customer Success Stories",
      videoId: "xXEOVxQd8S8",
      thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
      customerName: "Customer Stories",
      rating: 5
    },
    {
      id: 3,
      title: "Flexible Car Financing Options in Kenya",
      videoId: "6JhNg0AsEOI",
      thumbnail: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop",
      customerName: "Finance Guide",
      rating: 5
    },
    {
      id: 4,
      title: "Hassle-Free Car Trade-In Program",
      videoId: "khmmXxcFBWI",
      thumbnail: "https://images.unsplash.com/photo-1612057248888-acb0bcbe2dba?q=80&w=2069&auto=format&fit=crop",
      customerName: "Trade-In Guide",
      rating: 5
    }
  ];

  const handleVideoClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-white mb-4">Video Reviews</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear directly from our satisfied customers about their experience with Waigera
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={review.id}
              className="opacity-0 animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              onClick={() => handleVideoClick(review.videoId)}
            >
              <div className="bg-black border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img 
                    src={review.thumbnail}
                    alt={review.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                    <div className="w-16 h-16 bg-[#33e9f2] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2 line-clamp-2">{review.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{review.customerName}</span>
                    <div className="flex text-[#33e9f2]">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeReviews;