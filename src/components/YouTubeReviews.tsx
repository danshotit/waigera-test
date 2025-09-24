import React, { useState } from 'react';
import { Play } from 'lucide-react';

const YouTubeReviews = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const reviews = [
    {
      id: 1,
      title: "Meet This Crazy SUBARU Swapped 1968 VOLKSWAGEN KOMBI",
      embedUrl: "https://www.youtube.com/embed/_KcJYCVRP7c?autoplay=1",
      thumbnail: "https://img.youtube.com/vi/_KcJYCVRP7c/hqdefault.jpg",
      customerName: "Expert Review",
      rating: 5
    },
    {
      id: 2,
      title: "This Is Why President WILLIAM RUTO Only Uses The LEXUS LX 600",
      embedUrl: "https://www.youtube.com/embed/xXEOVxQd8S8?autoplay=1",
      thumbnail: "https://img.youtube.com/vi/xXEOVxQd8S8/hqdefault.jpg",
      customerName: "Customer Stories",
      rating: 5
    },
    {
      id: 3,
      title: "This Is The Only 6.7M KSH WALD KIT 2021 HILUX In Kenya",
      embedUrl: "https://www.youtube.com/embed/u39kNeqOv1Y?autoplay=1",
      thumbnail: "https://img.youtube.com/vi/u39kNeqOv1Y/hqdefault.jpg",
      customerName: "Finance Guide",
      rating: 5
    },
    {
      id: 4,
      title: "Is This Kenya’s Cleanest And Best Looking Toyota Corolla 100?",
      embedUrl: "https://www.youtube.com/embed/6JhNg0AsEOI?autoplay=1",
      thumbnail: "https://img.youtube.com/vi/6JhNg0AsEOI/hqdefault.jpg",
      customerName: "Trade-In Guide",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-white mb-4">Video Reviews</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear directly from our satisfied customers about their experience with <span className="text-primary">Waigera</span>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={review.id}
              className="opacity-0 animate-fade-in group"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="bg-black border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  {activeVideo === review.embedUrl ? (
                    <iframe
                      width="100%"
                      height="215"
                      src={review.embedUrl}
                      title={review.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img 
                        src={review.thumbnail}
                        alt={review.title}
                        className="w-full h-48 object-cover"
                      />
                      <div 
                        className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors cursor-pointer"
                        onClick={() => setActiveVideo(review.embedUrl)}
                      >
                        <div className="w-16 h-16 bg-[#33e9f2] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </>
                  )}
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
