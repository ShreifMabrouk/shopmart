import Link from 'next/link'
import React from 'react'

export default function Help() {
  return <>
  
  <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 py-12 mx-20 my-5">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-10">
        
        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Help Center
        </h1>

        {/* FAQ Section */}
        <div className="space-y-6 mb-10">
          <h2 className="text-lg font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="border-b border-gray-100 pb-5">
              <h3 className="text-sm font-bold text-gray-900 mb-1">
                How do I place an order?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Simply browse our products, add items to your cart, and proceed to checkout. You'll need to create an account or sign in to complete your purchase.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="border-b border-gray-100 pb-5">
              <h3 className="text-sm font-bold text-gray-900 mb-1">
                What payment methods do you accept?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We accept all major credit cards, PayPal, and other secure payment methods.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="border-b border-gray-100 pb-5">
              <h3 className="text-sm font-bold text-gray-900 mb-1">
                How long does shipping take?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Standard shipping takes 3-5 business days. Express shipping options are available for faster delivery.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="border-b border-gray-100 pb-5">
              <h3 className="text-sm font-bold text-gray-900 mb-1">
                Can I return or exchange items?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Yes, we offer a 30-day return policy for most items. Items must be in original condition with tags attached.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="pb-2">
              <h3 className="text-sm font-bold text-gray-900 mb-1">
                How do I track my order?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Once your order ships, you'll receive a tracking number via email. You can also track your order in your account.
              </p>
            </div>
          </div>
        </div>

        {/* Still Need Help Section */}
        <div className="space-y-4 pt-2">
          <h2 className="text-lg font-bold text-gray-900">
            Still Need Help?
          </h2>
          <p className="text-sm text-gray-600">
            If you can't find the answer you're looking for, our customer service team is here to help.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <Link href="/contact">
            <button 
              type="button" 
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-xl transition-colors shadow-sm text-sm cursor-pointer text-center"
            >
              Contact Us
            </button>
            </Link>

            
            <a 
              href='mailto:privacy@shopmart.com' 
              className="w-full sm:w-auto bg-slate-700 hover:bg-slate-800 text-white font-medium py-2.5 px-6 rounded-xl transition-colors shadow-sm text-sm cursor-pointer text-center"
            >
              Email Support
            </a>
          </div>
        </div>

      </div>
    </div>
  
  
  </>
}
