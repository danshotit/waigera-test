
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <>
      <Header />
      
      {/* Page Header */}
      <div className="pt-28 pb-16 bg-gradient-to-r from-blue-600 via-gray-900 to-purple-600">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-6">Terms of Service</h1>
          <p className="text-white/80 max-w-2xl text-lg">
            Please read these terms and conditions carefully before using our service.
          </p>
        </div>
      </div>
      
      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using Waigera's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily browse and use the materials on Waigera's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Vehicle Listings</h2>
            <p className="text-gray-700 mb-6">
              All vehicle listings on Waigera are provided by third-party sellers. While we make every effort to ensure accuracy, we do not guarantee the accuracy, completeness, or reliability of any listing information. Buyers are encouraged to inspect vehicles in person before purchase.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">Users agree to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Provide accurate and truthful information</li>
              <li>Not engage in fraudulent or misleading activities</li>
              <li>Respect the rights of other users</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment and Transactions</h2>
            <p className="text-gray-700 mb-6">
              All transactions are conducted directly between buyers and sellers. Waigera is not responsible for payment processing, vehicle delivery, or dispute resolution between parties. We strongly recommend using secure payment methods and meeting in safe, public locations.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimer</h2>
            <p className="text-gray-700 mb-6">
              The materials on Waigera's website are provided on an 'as is' basis. Waigera makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitations</h2>
            <p className="text-gray-700 mb-6">
              In no event shall Waigera or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Waigera's website, even if Waigera or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Revisions and Errata</h2>
            <p className="text-gray-700 mb-6">
              The materials appearing on Waigera's website could include technical, typographical, or photographic errors. Waigera does not warrant that any of the materials on its website are accurate, complete, or current. Waigera may make changes to the materials contained on its website at any time without notice.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> info@waigera.co</p>
              <p className="text-gray-700"><strong>Phone:</strong> +254795838290</p>
              <p className="text-gray-700"><strong>Address:</strong> Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Terms;
