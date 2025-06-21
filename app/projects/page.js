import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen pt-55 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      
      {/* Projects Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full opacity-25 animate-pulse"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full opacity-20 animate-bounce"></div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16 relative z-10">
          <div className="inline-block">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              My Projects
            </h1>
            <div className="flex justify-center space-x-2 mb-4">
              <div className="w-6 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <div className="w-6 h-1 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore my collection of creative tools and applications designed to make your life easier and more productive.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* To Do List Card */}
            <Link href="/tools/to-do" className="group">
              <div className="relative transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                  
                  {/* Animated Background Waves */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-30 animate-spin"></div>
                    <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-25 animate-pulse"></div>
                  </div>

                  <div className="relative z-10 p-8 text-center">
                    {/* Icon Container */}
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                          </svg>
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-bounce"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      To Do List
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      نظام قائمة المهام الخاص بي يساعدك على تنظيم يومك وزيادة إنتاجيتك بسهولة
                    </p>
                    
                    {/* Hover Arrow */}
                    <div className="mt-6 flex justify-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Photo Edit Card */}
            <Link href="/tools/photo-edit" className="group">
              <div className="relative transform transition-all duration-500 hover:scale-105 hover:rotate-1">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                  
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-green-200 to-teal-200 rounded-full opacity-30 animate-ping"></div>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full opacity-25 animate-bounce"></div>
                  </div>

                  <div className="relative z-10 p-8 text-center">
                    {/* Icon Container */}
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:-rotate-12 transition-transform duration-300">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                      Photo Edit
                    </h3>
                    <h4 className="text-xl font-semibold mb-4 text-teal-600">Color</h4>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      برنامج بسيط لمعالجة ألوان الصور
                    </p>
                    
                    {/* Hover Arrow */}
                    <div className="mt-6 flex justify-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Prayer Time Card */}
            <Link href="/projects/pry-time" className="group md:col-span-2 lg:col-span-1">
              <div className="relative transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                  
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-30 animate-spin"></div>
                    <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-25 animate-pulse"></div>
                  </div>

                  <div className="relative z-10 p-8 text-center">
                    {/* Icon Container */}
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-bounce"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                      Prayer
                    </h3>
                    <h4 className="text-xl font-semibold mb-4 text-purple-600">Time</h4>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      تطبيق لعرض أوقات الصلاة
                    </p>
                    
                    {/* Hover Arrow */}
                    <div className="mt-6 flex justify-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </div>

        {/* Footer Banner */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100 rounded-3xl"></div>
          <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg border border-white/30 p-8 sm:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Explore these powerful tools and transform the way you work and organize your daily tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}