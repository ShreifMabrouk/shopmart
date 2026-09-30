import React from 'react'

export default function LoadingSpinner() {
  return <>
  
  <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      {/* شعار ShopMart */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-xl rounded-lg">
          S
        </div>
        <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
          ShopMart
        </span>
      </div>

      {/* دائرة التحميل (Spinner) */}
      <div className="relative w-12 h-12">
        {/* الدائرة الخلفية الرمادية الفاتحة */}
        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
        {/* الدائرة المتحركة السوداء */}
        <div className="absolute inset-0 rounded-full border-4 border-black border-t-transparent animate-spin"></div>
      </div>
    </div>
  
  
  </>
}
