
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Most Fuel-Efficient Cars in Kenya for 2024",
    excerpt: "Looking to save on fuel costs? Check out our comprehensive guide to the most economical vehicles available in Kenya this year.",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop",
    author: "David Kamau",
    date: "May 15, 2024",
    category: "Car Reviews"
  },
  {
    id: 2,
    title: "Understanding Import Taxes and Regulations for Cars in Kenya",
    excerpt: "Navigate the complex world of vehicle importation with our simplified guide to taxes, duties, and regulations in Kenya.",
    image: "https://images.unsplash.com/photo-1563720223523-499384a901af?q=80&w=2070&auto=format&fit=crop",
    author: "Sarah Omondi",
    date: "May 10, 2024",
    category: "Car Buying Guide"
  },
  {
    id: 3,
    title: "Essential Maintenance Tips for Kenya's Rough Roads",
    excerpt: "Keep your vehicle in top condition despite challenging road conditions with these professional maintenance recommendations.",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2069&auto=format&fit=crop",
    author: "Michael Ndungu",
    date: "May 5, 2024",
    category: "Maintenance"
  },
  {
    id: 4,
    title: "Electric Vehicles in Kenya: The Future of Transportation?",
    excerpt: "Explore the growing trend of electric vehicles in Kenya and whether the infrastructure is ready for this sustainable shift.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
    author: "Amina Hassan",
    date: "April 28, 2024",
    category: "Industry Trends"
  },
  {
    id: 5,
    title: "Best Family SUVs for Kenyan Roads in 2024",
    excerpt: "Discover the top family-friendly SUVs that combine comfort, safety, and performance for Kenya's diverse terrain.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop",
    author: "James Mwangi",
    date: "April 20, 2024",
    category: "Car Reviews"
  },
  {
    id: 6,
    title: "Car Financing Options in Kenya: What You Need to Know",
    excerpt: "Compare the various financing solutions available to car buyers in Kenya and find the best option for your budget.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    author: "Lucy Wanjiku",
    date: "April 15, 2024",
    category: "Finance"
  }
];

const categories = [
  "Car Reviews",
  "Maintenance",
  "Industry Trends",
  "Car Buying Guide",
  "Finance",
  "Technology",
  "Lifestyle"
];

const Blog = () => {
  return (
    <>
      <Header />
      
      {/* Page Header */}
      <div className="pt-28 pb-16 bg-gradient-to-r from-kenya-purple via-black to-kenya-blue">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-6">Blog</h1>
          <p className="text-white/70 max-w-2xl">
            Stay updated with the latest automotive news, reviews, and tips from our team of experts.
          </p>
        </div>
      </div>
      
      {/* Blog Search & Filter */}
      <section className="py-8 bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10 bg-white/10 border-white/10 text-white rounded-full"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto py-2 w-full md:w-auto">
              {categories.map((category, index) => (
                <Button 
                  key={index}
                  variant="outline"
                  size="sm"
                  className="whitespace-nowrap bg-white/10 border-white/10 text-white hover:bg-white/20"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Post */}
      <section className="py-12 bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-auto md:aspect-auto h-64 md:h-full">
                <img 
                  src="https://images.unsplash.com/photo-1543465077-db45d34b88a5?q=80&w=2070&auto=format&fit=crop" 
                  alt="Why SUVs Are Dominating the Kenyan Market" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="bg-kenya-purple/20 text-kenya-purple text-xs font-medium py-1 px-3 rounded-full w-fit mb-4">
                  Featured Post
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Why SUVs Are Dominating the Kenyan Market
                </h2>
                <p className="text-white/70 mb-6">
                  SUVs have taken over Kenyan roads in recent years. We explore the factors behind this trend, from road conditions to status symbols, and what it means for the automotive industry in Kenya.
                </p>
                <div className="flex items-center gap-4 text-white/60 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">May 18, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="text-sm">John Kimani</span>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-kenya-blue to-kenya-purple w-fit group">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-16 bg-dark-bg">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="glass-card border-white/10 rounded-xl overflow-hidden opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="bg-white/10 text-white/80 text-xs font-medium py-1 px-3 rounded-full w-fit mb-4">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    <Link to={`/blog/${post.id}`} className="hover:text-kenya-purple transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-white/70 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-white/60">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span className="text-sm">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{post.date}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button 
                variant="outline"
                className="bg-white/10 border-white/10 text-white hover:bg-white/20"
              >
                Previous
              </Button>
              
              <Button
                variant="default"
                className="bg-gradient-to-r from-kenya-blue to-kenya-purple"
              >
                1
              </Button>
              
              <Button 
                variant="outline"
                className="bg-white/10 border-white/10 text-white hover:bg-white/20"
              >
                2
              </Button>
              
              <Button 
                variant="outline"
                className="bg-white/10 border-white/10 text-white hover:bg-white/20"
              >
                3
              </Button>
              
              <Button 
                variant="outline"
                className="bg-white/10 border-white/10 text-white hover:bg-white/20"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-kenya-blue to-kenya-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Get the latest automotive news, reviews, and offers delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white/20 border-white/10 text-white placeholder:text-white/60"
            />
            <Button className="bg-white text-kenya-purple hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Blog;
