import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { CarProps } from '@/components/CarCard';

interface AIReview {
  review: string;
  rating: number;
}

export const useAIReview = (car: CarProps) => {
  const [aiReview, setAiReview] = useState<AIReview | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAIReview = async () => {
      if (!car) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const { data, error } = await supabase.functions.invoke('generate-car-review', {
          body: { car }
        });

        if (error) throw error;
        
        setAiReview(data);
      } catch (err) {
        console.error('Error fetching AI review:', err);
        setError(err instanceof Error ? err.message : 'Failed to generate review');
      } finally {
        setLoading(false);
      }
    };

    fetchAIReview();
  }, [car.id]);

  return { aiReview, loading, error };
};