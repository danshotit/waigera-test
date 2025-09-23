
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { CreditCard, Shield, Lock } from "lucide-react";

const BankDetails = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Here you would integrate with a payment processor
    toast({
      title: "Payment Processing",
      description: "Your payment is being processed. You will receive a confirmation shortly.",
      duration: 5000,
    });
    
    // Redirect to confirmation page or homepage after processing
    setTimeout(() => {
      window.location.href = '/';
    }, 3000);
  };

  return (
    <>
      <Header />
      
      {/* Page Header */}
      <div className="pt-28 pb-16 bg-gradient-to-r from-kenya-blue via-black to-kenya-purple">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-6">Payment Details</h1>
          <p className="text-white/70 max-w-2xl">
            Complete your purchase securely with our encrypted payment system.
          </p>
        </div>
      </div>
      
      {/* Payment Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kenya-blue to-kenya-purple flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">Secure Payment</h2>
                    <p className="text-gray-600 flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      SSL Encrypted
                    </p>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* Payment Method */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Payment Method</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border-2 border-blue-200 rounded-lg p-4 cursor-pointer hover:border-blue-400 transition-colors">
                        <div className="flex items-center gap-3">
                          <CreditCard className="w-6 h-6 text-blue-600" />
                          <div>
                            <h3 className="font-medium text-gray-900">M-Pesa</h3>
                            <p className="text-sm text-gray-600">Pay with M-Pesa</p>
                          </div>
                        </div>
                      </div>
                      <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-blue-400 transition-colors">
                        <div className="flex items-center gap-3">
                          <CreditCard className="w-6 h-6 text-gray-600" />
                          <div>
                            <h3 className="font-medium text-gray-900">Bank Card</h3>
                            <p className="text-sm text-gray-600">Visa, Mastercard</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bank Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Banking Information</h3>
                    
                    <div>
                      <label htmlFor="bankName" className="block mb-2 text-sm font-medium text-gray-700">Bank Name</label>
                      <Select required>
                        <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                          <SelectValue placeholder="Select your bank" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kcb">KCB Bank</SelectItem>
                          <SelectItem value="equity">Equity Bank</SelectItem>
                          <SelectItem value="coop">Co-operative Bank</SelectItem>
                          <SelectItem value="standard">Standard Chartered</SelectItem>
                          <SelectItem value="dtb">Diamond Trust Bank</SelectItem>
                          <SelectItem value="barclays">ABSA Bank</SelectItem>
                          <SelectItem value="family">Family Bank</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label htmlFor="accountNumber" className="block mb-2 text-sm font-medium text-gray-700">Account Number</label>
                      <Input
                        id="accountNumber"
                        type="text"
                        required
                        placeholder="Enter your account number"
                        className="bg-white border-gray-300 text-gray-900"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="accountName" className="block mb-2 text-sm font-medium text-gray-700">Account Holder Name</label>
                      <Input
                        id="accountName"
                        type="text"
                        required
                        placeholder="Full name as on bank account"
                        className="bg-white border-gray-300 text-gray-900"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
                        <Input
                          id="phoneNumber"
                          type="tel"
                          required
                          placeholder="+254"
                          className="bg-white border-gray-300 text-gray-900"
                        />
                      </div>
                      <div>
                        <label htmlFor="idNumber" className="block mb-2 text-sm font-medium text-gray-700">ID Number</label>
                        <Input
                          id="idNumber"
                          type="text"
                          required
                          placeholder="National ID number"
                          className="bg-white border-gray-300 text-gray-900"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Payment Summary */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Vehicle Price:</span>
                        <span className="font-medium">KES 2,500,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Processing Fee:</span>
                        <span className="font-medium">KES 5,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Insurance:</span>
                        <span className="font-medium">KES 15,000</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between text-lg font-semibold">
                        <span>Total Amount:</span>
                        <span className="text-kenya-purple">KES 2,520,000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="flex items-center space-x-2">
                      <Input type="checkbox" required className="rounded text-kenya-purple border-gray-300 w-5 h-5" />
                      <span className="text-gray-700 text-sm">I agree to the terms and conditions and authorize this payment.</span>
                    </label>
                    
                    <Button type="submit" className="w-full bg-gradient-to-r from-kenya-blue to-kenya-purple text-white py-3 text-lg font-semibold">
                      Complete Payment
                    </Button>
                  </div>
                  
                  <div className="text-center text-sm text-gray-500">
                    <p>Your payment information is encrypted and secure.</p>
                    <p>You will receive a confirmation email upon successful payment.</p>
                  </div>
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

export default BankDetails;
