import React from 'react'

export default function TermsOfService() {
  return <>
  
  
  <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 py-12">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-10">
        
        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
          Terms of Service
        </h1>

        {/* Last Updated */}
        <p className="text-xs sm:text-sm text-gray-500 mb-8">
          Last updated: 9/20/2025
        </p>

        {/* Sections Container */}
        <div className="space-y-6 text-gray-600">
          
          {/* Acceptance of Terms */}
          <div className="space-y-1.5">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              Acceptance of Terms
            </h2>
            <p className="text-sm leading-relaxed">
              By accessing and using ShopMart, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </div>

          {/* Use License */}
          <div className="space-y-1.5">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              Use License
            </h2>
            <p className="text-sm leading-relaxed">
              Permission is granted to temporarily download one copy of the materials on ShopMart for personal, non-commercial transitory viewing only.
            </p>
          </div>

          {/* Product Information */}
          <div className="space-y-1.5">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              Product Information
            </h2>
            <p className="text-sm leading-relaxed">
              We strive to provide accurate product information, but we do not warrant that product descriptions or other content is accurate, complete, reliable, or error-free.
            </p>
          </div>

          {/* Pricing and Payment */}
          <div className="space-y-1.5">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              Pricing and Payment
            </h2>
            <p className="text-sm leading-relaxed">
              All prices are subject to change without notice. Payment is due at the time of purchase.
            </p>
          </div>

          {/* Returns and Refunds */}
          <div className="space-y-1.5">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              Returns and Refunds
            </h2>
            <p className="text-sm leading-relaxed">
              Returns are accepted within 30 days of purchase. Items must be in original condition with all tags attached.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-1.5 pt-2">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              Contact Information
            </h2>
            <p className="text-sm leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a 
                href="mailto:legal@shopmart.com" 
                className="text-blue-600 hover:underline font-medium"
              >
                legal@shopmart.com
              </a>.
            </p>
          </div>

        </div>

      </div>
    </div>
  
  
  </>
}
