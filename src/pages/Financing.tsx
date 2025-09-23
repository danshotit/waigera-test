
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";
import { Calculator, Check, Info } from "lucide-react";
import { Link } from 'react-router-dom';

const Financing = () => {
  const { toast } = useToast();
  const [loanAmount, setLoanAmount] = React.useState(2000000);
  const [downPayment, setDownPayment] = React.useState(500000);
  const [interestRate, setInterestRate] = React.useState(12);
  const [loanTerm, setLoanTerm] = React.useState(48);
  const [monthlyPayment, setMonthlyPayment] = React.useState(0);

  React.useEffect(() => {
    calculateMonthlyPayment();
  }, [loanAmount, downPayment, interestRate, loanTerm]);

  const calculateMonthlyPayment = () => {
    const principal = loanAmount - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const termInMonths = loanTerm;
    
    if (principal <= 0 || monthlyRate <= 0 || termInMonths <= 0) {
      setMonthlyPayment(0);
      return;
    }
    
    const payment = principal * monthlyRate * Math.pow(1 + monthlyRate, termInMonths) / (Math.pow(1 + monthlyRate, termInMonths) - 1);
    setMonthlyPayment(payment);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleApplySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "Thank you for your application. Our finance team will contact you within 24 hours.",
      duration: 5000,
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Header />
      
      {/* Page Header */}
      <div className="pt-28 pb-16 bg-gradient-to-r from-kenya-blue via-black to-kenya-purple">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-6">Car Financing</h1>
          <p className="text-white/70 max-w-2xl">
            Flexible financing options to help you drive home your dream car today. 
            We partner with leading financial institutions to secure the best rates for you.
          </p>
        </div>
      </div>
      
      {/* Loan Calculator */}
      <section className="py-16 bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title mb-8">Loan Calculator</h2>
              <p className="text-white/80 mb-8">Use our calculator to estimate your monthly payments based on your preferred loan terms.</p>
              
              <div className="glass-card rounded-xl p-8 mb-8">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-white/80">Vehicle Price</label>
                    <span className="text-kenya-purple">{formatCurrency(loanAmount)}</span>
                  </div>
                  <Slider
                    value={[loanAmount]}
                    min={500000}
                    max={20000000}
                    step={100000}
                    onValueChange={(value) => setLoanAmount(value[0])}
                    className="my-4"
                  />
                  <div className="flex justify-between text-xs text-white/50">
                    <span>KSh 500,000</span>
                    <span>KSh 20,000,000</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-white/80">Down Payment</label>
                    <span className="text-kenya-purple">{formatCurrency(downPayment)}</span>
                  </div>
                  <Slider
                    value={[downPayment]}
                    min={0}
                    max={loanAmount * 0.5}
                    step={50000}
                    onValueChange={(value) => setDownPayment(value[0])}
                    className="my-4"
                  />
                  <div className="flex justify-between text-xs text-white/50">
                    <span>KSh 0</span>
                    <span>KSh {formatCurrency(loanAmount * 0.5)}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-white/80">Interest Rate (%)</label>
                    <span className="text-kenya-purple">{interestRate}%</span>
                  </div>
                  <Slider
                    value={[interestRate]}
                    min={8}
                    max={20}
                    step={0.25}
                    onValueChange={(value) => setInterestRate(value[0])}
                    className="my-4"
                  />
                  <div className="flex justify-between text-xs text-white/50">
                    <span>8%</span>
                    <span>20%</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-white/80">Loan Term (months)</label>
                    <span className="text-kenya-purple">{loanTerm} months</span>
                  </div>
                  <Slider
                    value={[loanTerm]}
                    min={12}
                    max={84}
                    step={12}
                    onValueChange={(value) => setLoanTerm(value[0])}
                    className="my-4"
                  />
                  <div className="flex justify-between text-xs text-white/50">
                    <span>12 months</span>
                    <span>84 months</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-8 border-2 border-kenya-purple">
                <h3 className="text-xl font-semibold text-white mb-4">Your Estimated Payment</h3>
                <div className="flex items-center mb-6">
                  <Calculator className="w-10 h-10 text-kenya-purple mr-4" />
                  <div>
                    <div className="text-3xl font-bold text-white">{formatCurrency(monthlyPayment)}</div>
                    <div className="text-sm text-white/60">Monthly Payment</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-sm text-white/60 mb-1">Loan Amount</div>
                    <div className="font-semibold text-white">{formatCurrency(loanAmount - downPayment)}</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="text-sm text-white/60 mb-1">Total Interest</div>
                    <div className="font-semibold text-white">{formatCurrency((monthlyPayment * loanTerm) - (loanAmount - downPayment))}</div>
                  </div>
                </div>
                
                <Link to="/contact">
                  <Button className="w-full bg-gradient-to-r from-kenya-blue to-kenya-purple">
                    Apply for Financing
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Financing Options */}
            <div>
              <h2 className="section-title mb-8">Our Financing Options</h2>
              
              <div className="space-y-6">
                <div className="glass-card rounded-xl p-6 border border-white/10">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kenya-blue to-kenya-purple flex items-center justify-center flex-shrink-0 mr-4">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Standard Financing</h3>
                      <p className="text-white/70 mb-2">Our most popular option with competitive interest rates and flexible repayment terms.</p>
                      <ul className="space-y-2">
                        <li className="flex items-center text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-kenya-blue mr-2"></div>
                          Interest Rate: 12-15% per annum
                        </li>
                        <li className="flex items-center text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-kenya-blue mr-2"></div>
                          Loan Term: 12-60 months
                        </li>
                        <li className="flex items-center text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-kenya-blue mr-2"></div>
                          Down Payment: 20% minimum
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card rounded-xl p-6 border border-kenya-purple">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kenya-blue to-kenya-purple flex items-center justify-center flex-shrink-0 mr-4">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-white">Premium Financing</h3>
                        <span className="bg-kenya-purple text-white text-xs py-1 px-2 rounded-full">Popular</span>
                      </div>
                      <p className="text-white/70 mb-2">Designed for luxury vehicles with enhanced terms and exclusive benefits.</p>
                      <ul className="space-y-2">
                        <li className="flex items-center text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-kenya-blue mr-2"></div>
                          Interest Rate: 10-12% per annum
                        </li>
                        <li className="flex items-center text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-kenya-blue mr-2"></div>
                          Loan Term: Up to 72 months
                        </li>
                        <li className="flex items-center text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-kenya-blue mr-2"></div>
                          Down Payment: 15% minimum
                        </li>
                        <li className="flex items-center text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-kenya-blue mr-2"></div>
                          Complimentary service package
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card rounded-xl p-6 border border-white/10">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kenya-blue to-kenya-purple flex items-center justify-center flex-shrink-0 mr-4">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Balloon Payment Option</h3>
                      <p className="text-white/70 mb-2">Lower monthly payments with a larger final payment at the end of your term.</p>
                      <ul className="space-y-2">
                        <li className="flex items-center text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-kenya-blue mr-2"></div>
                          Lower monthly installments
                        </li>
                        <li className="flex items-center text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-kenya-blue mr-2"></div>
                          Balloon payment: 25-30% of vehicle price
                        </li>
                        <li className="flex items-center text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-kenya-blue mr-2"></div>
                          Option to refinance balloon payment
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card rounded-xl p-6 border border-white/10">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-kenya-blue to-kenya-purple flex items-center justify-center flex-shrink-0 mr-4">
                      <Info className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Required Documents</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-kenya-blue mr-2"></div>
                          National ID or passport
                        </li>
                        <li className="flex items-center text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-kenya-blue mr-2"></div>
                          KRA PIN certificate
                        </li>
                        <li className="flex items-center text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-kenya-blue mr-2"></div>
                          6 months' bank statements
                        </li>
                        <li className="flex items-center text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-kenya-blue mr-2"></div>
                          Proof of income (payslips or business records)
                        </li>
                        <li className="flex items-center text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-kenya-blue mr-2"></div>
                          Proof of residence
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Banking Partners */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Our Banking Partners</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Equity Bank", "KCB Bank", "NCBA Bank", "Cooperative Bank", "Absa Bank", "Standard Chartered", "I&M Bank", "DTB Bank"].map((bank, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-6 flex items-center justify-center aspect-video opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-kenya-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-white font-medium">{bank}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-kenya-blue to-kenya-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10">Browse our collection of vehicles and apply for financing today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/browse">
              <Button className="btn-secondary bg-white text-kenya-purple hover:bg-white/90 min-w-40">Browse Cars</Button>
            </Link>
            <Link to="/contact">
              <Button className="btn-secondary min-w-40">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Financing;
