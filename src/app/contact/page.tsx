import React from 'react'

export default function Contact() {
  return <>
  
  <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 py-12 mx-20 my-5">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-10">
        
        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">
          Contact Us
        </h1>

        {/* Grid Container for Left & Right sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Left Column: Get in Touch & Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                Get in Touch
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Email</h3>
                <p className="text-sm text-gray-600 mt-0.5">support@shopmart.com</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900">Phone</h3>
                <p className="text-sm text-gray-600 mt-0.5">(+20) 01093333333</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900">Address</h3>
                <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">
                  123 Shop Street, Octoper City, DC 12345
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Send us a Message Form */}
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-gray-900">
              Send us a Message
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-800 mb-1.5">
                  Name
                </label>
                <input 
                  type="text" 
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-800 mb-1.5">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-800 mb-1.5">
                  Message
                </label>
                <textarea 
                  rows={4} 
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-colors shadow-sm text-sm cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  
  
  </>
}