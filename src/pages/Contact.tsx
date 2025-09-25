
import React, { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) return;

    try {
      const result = await emailjs.sendForm(
        'service_l9puvl9', // Replace with your EmailJS service ID
        'template_d1ilzod', // Replace with your EmailJS template ID
        form.current,
        'WlNsR5vc4bGlFZU3D' // Replace with your EmailJS public key
      );

      console.log('Email sent successfully:', result.text);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        duration: 5000,
      });
      
      // Reset form
      form.current.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      
      toast({
        title: "Failed to Send Message",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <>
      <Header />
      
      {/* Page Header */}
      <div className="pt-28 pb-16 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-white/70 max-w-2xl">
            Have questions or need assistance? We're here to help. Reach out to our team using any of the methods below.
          </p>
        </div>
      </div>
      
      {/* Contact Info & Form */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Visit Our Showroom</h3>
                    <p className="text-muted-foreground">Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
                    <p className="text-muted-foreground">+254795838290</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
                    <p className="text-muted-foreground">info@waigera.co</p>
                    <p className="text-muted-foreground">support@waigera.co</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/_waigera/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 transition-colors">
                    <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="https://youtube.com/@waigera" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center hover:bg-red-200 transition-colors">
                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-black rounded-xl p-8 shadow-lg border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Send Us a Message</h2>
              
              <form ref={form} onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-foreground">Your Name</label>
                      <Input
                        id="user_name"
                        name="user_name"
                        type="text"
                        required
                        className="bg-background border-border text-foreground focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="user_email" className="block mb-2 text-sm font-medium text-foreground">Your Email</label>
                      <Input
                        id="user_email"
                        name="user_email"
                        type="email"
                        required
                        className="bg-background border-border text-foreground focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-foreground">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="bg-background border-border text-foreground focus:border-primary focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-foreground">Your Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="bg-background border-border text-foreground focus:border-primary focus:ring-primary resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      
      <Footer />
    </>
  );
};

export default Contact;
