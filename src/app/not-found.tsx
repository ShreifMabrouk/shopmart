import Link from 'next/link'
import React from 'react'

export default function Notfound() {
  return <>
  
  
  
  <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 py-12">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12 text-center">
        
        {/* Error Code / Badge */}
        <div className="inline-flex items-center justify-center bg-gray-100 text-gray-900 font-extrabold text-3xl w-20 h-20 rounded-2xl mb-6 shadow-inner tracking-tight">
          404
        </div>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link 
            href="/" 
            className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-xl transition-colors shadow-sm text-sm cursor-pointer text-center"
          >
            Back to Home
          </Link>

          <Link
            href="/categories" 
            className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 font-medium py-3 px-6 rounded-xl border border-gray-300 transition-colors shadow-sm text-sm cursor-pointer text-center"
          >
            Browse Categories
          </Link>
        </div>

      </div>
    </div>
  
  
  </>
}
