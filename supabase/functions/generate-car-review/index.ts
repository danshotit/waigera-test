import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { car } = await req.json();

    if (!car) {
      return new Response(
        JSON.stringify({ error: 'Car data is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const prompt = `Write a professional and engaging car review for the following vehicle. Focus on its key features, performance, and value proposition. Keep it concise but informative (2-3 sentences max):

Car: ${car.title}
Year: ${car.year}
Condition: ${car.condition}
Mileage: ${car.mileage}
Engine: ${car.engine}
Transmission: ${car.transmission}
Price: KES ${car.price}
Location: ${car.location}

Write as if you're a car expert reviewing this specific vehicle.`;

    console.log('Generating AI review for car:', car.title);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { 
            role: 'system', 
            content: 'You are an expert automotive reviewer. Write concise, professional car reviews that highlight key selling points and provide valuable insights to potential buyers.' 
          },
          { role: 'user', content: prompt }
        ],
        max_tokens: 150,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('OpenAI API error:', error);
      throw new Error(error.error?.message || 'Failed to generate review');
    }

    const data = await response.json();
    const aiReview = data.choices[0].message.content.trim();

    console.log('Generated AI review:', aiReview);

    return new Response(
      JSON.stringify({ 
        review: aiReview,
        rating: Math.floor(Math.random() * 2) + 4 // Random rating between 4-5 stars
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in generate-car-review function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});