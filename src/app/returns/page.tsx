import Link from 'next/link'
import React from 'react'

export default function Returns() {
  return <>
  
  
  <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 py-12 mx-20 my-5">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-10">
        
        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Returns & Exchanges
        </h1>

        {/* Return Policy Section */}
        <div className="space-y-4 mb-8">
          <h2 className="text-lg font-bold text-gray-900">
            Return Policy
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            We want you to be completely satisfied with your purchase. If you're not happy with your order, we'll make it right.
          </p>

          <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-4 space-y-1">
            <h3 className="text-sm font-bold text-blue-900">
              30-Day Return Window
            </h3>
            <p className="text-sm text-blue-800/80">
              You have 30 days from the delivery date to return or exchange your items.
            </p>
          </div>
        </div>

        {/* Return Conditions Section */}
        <div className="space-y-4 mb-8">
          <h2 className="text-lg font-bold text-gray-900">
            Return Conditions
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
            <li>Items must be in original condition with all tags attached</li>
            <li>Items must be unworn, unwashed, and unused</li>
            <li>Original packaging should be included when possible</li>
            <li>Some items may be excluded from returns (see product page for details)</li>
          </ul>
        </div>

        {/* How to Return Section */}
        <div className="space-y-4 mb-8">
          <h2 className="text-lg font-bold text-gray-900">
            How to Return
          </h2>

          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                1
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">Contact Us</h3>
                <p className="text-sm text-gray-600">Email us at returns@shopmart.com with your order number</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                2
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">Get Return Label</h3>
                <p className="text-sm text-gray-600">We'll send you a prepaid return shipping label</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                3
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">Ship Your Return</h3>
                <p className="text-sm text-gray-600">Package your items and drop off at any authorized location</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                4
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">Receive Refund</h3>
                <p className="text-sm text-gray-600">We'll process your refund within 5-7 business days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Questions Section */}
        <div className="space-y-3 pt-2">
          <h2 className="text-lg font-bold text-gray-900">
            Questions?
          </h2>
          <p className="text-sm text-gray-600">
            If you have any questions about returns or exchanges, please don't hesitate to contact us.
          </p>

          <div className="pt-1">
            <Link href="/contact">
            <button 
              type="button" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-xl transition-colors shadow-sm text-sm cursor-pointer"
            >
              Contact Support
            </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  
  
  
  </>
}
