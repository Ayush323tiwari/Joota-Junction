import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-600 hover:text-black mb-8"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Shipping & Returns Policy</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Shipping Information</h2>
              <div className="space-y-4 text-gray-600">
                <p>We offer free shipping on all orders over ₹2,000. For orders below this amount, a standard shipping fee of ₹99 will apply.</p>
                <p>Standard delivery typically takes 3-5 business days. Delivery times may vary depending on your location and the availability of the product.</p>
                <p>We currently ship to all major cities and towns across India. For remote locations, delivery may take an additional 2-3 business days.</p>
                <p>Once your order is shipped, you will receive a tracking number via email and SMS to track your package.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Returns & Exchanges</h2>
              <div className="space-y-4 text-gray-600">
                <p>We offer a 30-day return policy from the date of delivery. If you're not completely satisfied with your purchase, you can return it within this period.</p>
                <p>To be eligible for a return, your item must be:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Unused and in the same condition that you received it</li>
                  <li>In the original packaging</li>
                  <li>With all tags and labels attached</li>
                </ul>
                <p>To initiate a return:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Contact our customer service team</li>
                  <li>Provide your order number and reason for return</li>
                  <li>Pack the item securely with all original packaging</li>
                  <li>Use the return shipping label provided</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Refund Process</h2>
              <div className="space-y-4 text-gray-600">
                <p>Once we receive your returned item, we will inspect it and notify you of the status of your refund.</p>
                <p>If your return is approved, we will initiate a refund to your original payment method. The refund process typically takes 5-7 business days to reflect in your account.</p>
                <p>Please note that shipping charges are non-refundable, and you will be responsible for the return shipping costs unless the item was defective or damaged.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <div className="space-y-4 text-gray-600">
                <p>If you have any questions about our shipping and returns policy, please don't hesitate to contact us:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email: support@jootajunction.com</li>
                  <li>Phone: +91 1234567890</li>
                  <li>Hours: Monday to Saturday, 10:00 AM to 7:00 PM IST</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage; 