import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const Reviews = () => {
  const youtubeVideos = [
    {
      id: 1,
      embedId: "_KcJYCVRP7c",
      title: "Meet This Crazy SUBARU Swapped 1968 VOLKSWAGEN KOMBI !!!"
    },
    {
      id: 2,
      embedId: "xXEOVxQd8S8",
      title: "This Is Why President WILLIAM RUTO Only Uses The LEXUS LX 600"
    },
    {
      id: 3,
      embedId: "u39kNeqOv1Y",
      title: "This Is The Only 6.7M KSH WALD KIT 2021 HILUX In Kenya"
    },
    {
      id: 4,
      embedId: "6JhNg0AsEOI",
      title: "Is This Kenya’s Cleanest And Best Looking Toyota Corolla 100 ?"
    },
    {
      id: 5,
      embedId: "khmmXxcFBWI",
      title: "Would You Spend 8 Million KSH On A 2019 Audi A7"
    },
    {
      id: 6,
      embedId: "I2hTYWTN-2s",
      title: "This Is What An 8-MILLION KSH Classic Car Looks Like, 1966 MG-B"
    },
    {
      id: 7,
      embedId: "aolzmNE1ZBU",
      title: "Is This The Best Modified Toyota Corolla In Kenya ?"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Video Reviews & Expert Car Content | Waigera"
        description="Watch expert car reviews, buying guides, and customer testimonials. Learn about financing options, trade-in programs, and maintenance tips from Waigera experts."
        keywords="car reviews Kenya, Toyota Camry review, car buying guide Kenya, vehicle inspection, car financing Kenya, trade-in program"
        canonical="https://waigera.com/reviews"
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Video Reviews & <span className="text-primary">Expert Content</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Watch our latest reviews, buying guides, and customer stories. Get expert insights to make informed decisions about your next vehicle.
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Featured <span className="text-primary">Videos</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {youtubeVideos.map((video) => (
              <div 
                key={video.id}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.embedId}?si=e3QhzyhYvXiUdEOb`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Reviews;