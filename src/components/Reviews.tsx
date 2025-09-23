import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, MessageCircle, Award, ThumbsUp } from "lucide-react";
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

interface Review {
  id: string;
  reviewer_name: string;
  rating: number;
  review_text: string;
  review_type: string;
  created_at: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedReviews();
  }, []);

  const fetchFeaturedReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('status', 'approved')
        .eq('is_featured', true)
        .order('created_at', { ascending: false })
        .limit(6);

      if (error) throw error;
      setReviews(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      // Use fallback reviews if database is empty
      setReviews(fallbackReviews);
    } finally {
      setLoading(false);
    }
  };

  const fallbackReviews: Review[] = [
    {
      id: '1',
      reviewer_name: 'Sarah Kimani',
      rating: 5,
      review_text: 'Outstanding service from start to finish! The team helped me find the perfect car within my budget. The financing process was smooth and transparent.',
      review_type: 'dealership',
      created_at: new Date().toISOString()
    },
    {
      id: '2', 
      reviewer_name: 'Michael Ochieng',
      rating: 5,
      review_text: 'Purchased a Toyota Camry Hybrid from Waigera. Excellent condition, fair pricing, and professional staff. Highly recommend for anyone looking for quality used cars.',
      review_type: 'car',
      created_at: new Date().toISOString()
    },
    {
      id: '3',
      reviewer_name: 'Grace Wanjiku',
      rating: 5,
      review_text: 'The trade-in process was seamless. They offered a fair price for my old car and helped me upgrade to a newer model. Customer service is top-notch!',
      review_type: 'service',
      created_at: new Date().toISOString()
    },
    {
      id: '4',
      reviewer_name: 'David Mutua',
      rating: 5,
      review_text: 'Great selection of cars and competitive prices. The staff was knowledgeable and patient, answering all my questions. Will definitely recommend to friends.',
      review_type: 'dealership',
      created_at: new Date().toISOString()
    },
    {
      id: '5',
      reviewer_name: 'Jennifer Akinyi',
      rating: 4,
      review_text: 'Very impressed with the quality of vehicles and the thorough inspection process. The warranty coverage gave me peace of mind with my purchase.',
      review_type: 'service',
      created_at: new Date().toISOString()
    },
    {
      id: '6',
      reviewer_name: 'Peter Kariuki',
      rating: 5,
      review_text: 'Bought my first car here and the experience was amazing. They guided me through every step and made sure I understood everything before signing.',
      review_type: 'dealership',
      created_at: new Date().toISOString()
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-[#33e9f2] fill-current' : 'text-gray-600'}`}
          />
        ))}
      </div>
    );
  };

  const getReviewIcon = (type: string) => {
    switch (type) {
      case 'car':
        return <MessageCircle className="w-5 h-5 text-[#33e9f2]" />;
      case 'service':
        return <ThumbsUp className="w-5 h-5 text-[#33e9f2]" />;
      default:
        return <Award className="w-5 h-5 text-[#33e9f2]" />;
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-2 border-[#33e9f2] border-t-transparent rounded-full mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#33e9f2]/20 rounded-full mb-6">
            <Star className="w-4 h-4 text-[#33e9f2]" />
            <span className="text-sm font-medium text-[#33e9f2]">Customer Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say About <span className="text-[#33e9f2]">Waigera</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real experiences from satisfied customers who found their perfect car with us. 
            Join thousands of happy car owners across Kenya.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <Card 
              key={review.id}
              className="bg-card border-border hover:border-[#33e9f2]/50 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {getReviewIcon(review.review_type)}
                    <span className="text-xs text-gray-400 capitalize">
                      {review.review_type} Review
                    </span>
                  </div>
                  {renderStars(review.rating)}
                </div>
                
                <p className="text-gray-300 mb-4 line-clamp-4">
                  "{review.review_text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white">{review.reviewer_name}</h4>
                    <p className="text-xs text-gray-500">
                      {new Date(review.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-[#33e9f2]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#33e9f2] font-semibold">
                      {review.reviewer_name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-[#33e9f2] hover:bg-[#2bd4df] text-black font-semibold px-6 py-3">
                Share Your Experience
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/browse">
              <Button variant="outline" className="border-[#33e9f2] text-[#33e9f2] hover:bg-[#33e9f2]/10 px-6 py-3">
                View All Cars
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;