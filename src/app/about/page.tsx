import React from 'react'

export default function page() {
  return <>
  
  
  <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 py-12 mx-20 my-5">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-10">
        
        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
          About ShopMart
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-8">
          ShopMart is your one-stop destination for the latest technology, fashion, and lifestyle products. We are committed to providing quality products with fast shipping and excellent customer service.
        </p>

        {/* Our Mission Section */}
        <div className="space-y-2 mb-8">
          <h2 className="text-lg font-bold text-gray-900">
            Our Mission
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            To make shopping for quality products easy, convenient, and enjoyable for everyone. We believe that everyone deserves access to the latest and best products at competitive prices.
          </p>
        </div>

        {/* Our Values Section */}
        <div className="space-y-3 mb-8">
          <h2 className="text-lg font-bold text-gray-900">
            Our Values
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
            <li><span className="font-semibold text-gray-900">Quality:</span> We only sell products that meet our high standards</li>
            <li><span className="font-semibold text-gray-900">Customer Service:</span> Your satisfaction is our priority</li>
            <li><span className="font-semibold text-gray-900">Innovation:</span> We stay ahead of trends to bring you the latest products</li>
            <li><span className="font-semibold text-gray-900">Trust:</span> We build lasting relationships with our customers</li>
          </ul>
        </div>

        {/* Why Choose ShopMart Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-gray-900">
            Why Choose ShopMart?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">Fast Shipping</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Quick and reliable delivery to your doorstep</p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">Quality Guarantee</h3>
              <p className="text-sm text-gray-600 leading-relaxed">All products are carefully selected and tested</p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">24/7 Support</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Our customer service team is always here to help</p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-1">Easy Returns</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Hassle-free return policy for your peace of mind</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  
  
  
  </>
}
