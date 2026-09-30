import Link from 'next/link'
import React from 'react'

export default function TrackOrder() {
  return <>
  
  <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 py-12 mx-20 my-5">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-10">
        
        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Track Your Order
        </h1>

        {/* Enter Your Order Information Section */}
        <div className="space-y-4 mb-8">
          <h2 className="text-lg font-bold text-gray-900">
            Enter Your Order Information
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-800 mb-1.5">
                Order Number
              </label>
              <input 
                type="text" 
                placeholder="Enter your order number"
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-800 mb-1.5">
                Email Address
              </label>
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              />
            </div>

            <button 
              type="button" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-xl transition-colors shadow-sm text-sm cursor-pointer"
            >
              Track Order
            </button>
          </div>
        </div>

        {/* Order Status Section */}
        <div className="space-y-4 mb-8">
          <h2 className="text-lg font-bold text-gray-900">
            Order Status
          </h2>

          <div className="w-full bg-gray-100/80 rounded-xl p-6 text-center border border-gray-200/60">
            <p className="text-sm text-gray-500">
              Enter your order number and email above to track your order status.
            </p>
          </div>
        </div>

        {/* Need Help Section */}
        <div className="space-y-3 pt-2">
          <h2 className="text-lg font-bold text-gray-900">
            Need Help?
          </h2>
          <p className="text-sm text-gray-600">
            If you're having trouble tracking your order, please contact our customer service team.
          </p>

          <div className="pt-1">
            <Link href="/contact">
            <button 
              type="button" 
              className="bg-slate-700 hover:bg-slate-800 text-white font-medium py-2.5 px-6 rounded-xl transition-colors shadow-sm text-sm cursor-pointer"
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
