import React from 'react'

export default function PrivacyPolicy() {
  return <>
  
  
  <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 py-12 mx-20 my-5">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-10">
        
        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
          Privacy Policy
        </h1>

        {/* Last Updated */}
        <p className="text-xs sm:text-sm text-gray-500 mb-8">
          Last updated: 9/20/2025
        </p>

        {/* Sections Container */}
        <div className="space-y-6 text-gray-600">
          
          {/* Information We Collect */}
          <div className="space-y-1.5">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              Information We Collect
            </h2>
            <p className="text-sm leading-relaxed">
              We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.
            </p>
          </div>

          {/* How We Use Your Information */}
          <div className="space-y-1.5">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              How We Use Your Information
            </h2>
            <p className="text-sm leading-relaxed">
              We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
            </p>
          </div>

          {/* Information Sharing */}
          <div className="space-y-1.5">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              Information Sharing
            </h2>
            <p className="text-sm leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
            </p>
          </div>

          {/* Data Security */}
          <div className="space-y-1.5">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              Data Security
            </h2>
            <p className="text-sm leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          {/* Contact Us */}
          <div className="space-y-1.5 pt-2">
            <h2 className="text-base sm:text-lg font-bold text-gray-900">
              Contact Us
            </h2>
            <p className="text-sm leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a 
                href="mailto:privacy@shopmart.com" 
                className="text-blue-600 hover:underline font-medium"
              >
                privacy@shopmart.com
              </a>.
            </p>
          </div>

        </div>

      </div>
    </div>
  
  
  
  </>
}
