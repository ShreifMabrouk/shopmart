import React from 'react'

export default function Wishlist() {
  return <>
  
  
  
  <div className="min-h-screen bg-white flex flex-col justify-between">


      {/* Main Content Area */}
      <div className="px-4 sm:px-8 py-8 max-w-7xl mx-auto w-full flex-grow">
        
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">
          My Wishlist
        </h1>

        {/* Wishlist Grid Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Wishlist Cards */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-full h-48 bg-gray-100 rounded-xl overflow-hidden mb-4">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300')" }}></div>
              </div>
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Defacto</span>
              <h3 className="font-bold text-gray-900 text-sm mt-1">Woman Shawl</h3>
              <p className="font-semibold text-gray-900 text-base mt-2">EGP 149.00</p>
            </div>
            <div className="mt-4 space-y-2">
              <div className="w-full py-2.5 bg-black text-white text-center text-xs font-medium rounded-xl shadow-md cursor-default">
                Add to Cart
              </div>
              <div className="w-full py-2 border border-red-200 text-red-500 text-center text-xs font-medium rounded-xl bg-white cursor-default">
                Remove
              </div>
            </div>
          </div>

        </div>

      </div>



    </div>
  
  
  
  </>
}
