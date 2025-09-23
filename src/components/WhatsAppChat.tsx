
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const whatsappNumber = '+254795838290'; // Updated WhatsApp number
  
  const predefinedMessages = [
    "Hi! I'm interested in buying a car",
    "I want to sell my car",
    "Can you help me with car financing?",
    "I need more information about a specific car"
  ];

  const sendWhatsAppMessage = (text: string) => {
    const encodedMessage = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const handleCustomMessage = () => {
    if (message.trim()) {
      sendWhatsAppMessage(message);
      setMessage('');
    }
  };

  return (
    <>
      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center animate-bounce"
        >
          {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-black rounded-lg shadow-2xl border border-border z-50 animate-fade-in">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Waigera Support</h3>
                <p className="text-xs opacity-90">Typically replies instantly</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 max-h-80 overflow-y-auto">
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-700">
                👋 Hi there! Welcome to Waigera. How can we help you today?
              </p>
            </div>

            {/* Quick Reply Buttons */}
            <div className="space-y-2 mb-4">
              {predefinedMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => sendWhatsAppMessage(msg)}
                  className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 text-sm transition-colors"
                >
                  {msg}
                </button>
              ))}
            </div>

            {/* Custom Message Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                onKeyPress={(e) => e.key === 'Enter' && handleCustomMessage()}
              />
              <Button
                onClick={handleCustomMessage}
                className="bg-green-500 hover:bg-green-600 px-3 py-2"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="p-3 bg-gray-50 rounded-b-lg border-t">
            <p className="text-xs text-gray-500 text-center">
              Powered by WhatsApp • We'll respond as soon as possible
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;
