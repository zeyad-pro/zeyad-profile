import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen pt-55 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-20 animate-pulse blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-r from-green-300 to-teal-300 rounded-full opacity-20 animate-bounce blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full opacity-20 animate-ping blur-xl"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full opacity-20 animate-pulse blur-xl"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-32 right-32 w-4 h-4 bg-blue-400 rotate-45 animate-spin opacity-40" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-32 left-32 w-6 h-6 bg-purple-400 rounded-full animate-bounce opacity-40" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-64 left-1/2 w-3 h-3 bg-green-400 rotate-45 animate-pulse opacity-40"></div>
        <div className="absolute bottom-64 right-1/4 w-5 h-5 bg-pink-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-16 px-4 sm:px-8">

        {/* Header Section */}
        <div className="text-center mb-20 pt-8">
          <div className="relative inline-block">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              My Tools
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200 to-cyan-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
          </div>

          <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mb-6"></div>

          <p className="text-slate-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Explore my collection of custom-built tools designed to enhance productivity and creativity
          </p>
        </div>

        {/* Tools Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">

            {/* To-Do List Tool */}
            <Link href="/tools/to-do" className="group block">
              <div className="relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 group-hover:scale-105 group-hover:-translate-y-2">

                {/* Card Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animated Wave Effect */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-500 opacity-80"></div>
                <div className="absolute bottom-2 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-blue-500 opacity-60 animate-pulse"></div>
                <div className="absolute bottom-4 left-0 w-full h-2 bg-gradient-to-r from-blue-300 to-purple-400 opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

                {/* Card Content */}
                <div className="relative p-8 sm:p-10">

                  {/* Icon Section */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
                      <div className="relative bg-white rounded-full p-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="/photos/list.png"
                          className="w-16 h-16 sm:w-20 sm:h-20"
                          alt="To Do List"
                        />
                      </div>

                      {/* Floating Badge */}
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                        NEW
                      </div>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div className="text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Smart To-Do List
                    </h3>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-6">
                      <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                        An intelligent task management system that helps you organize your day and boost productivity with ease
                      </p>
                    </div>

                    {/* Features Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Task Management</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">Productivity</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">Responsive</span>
                    </div>

                    {/* CTA Button */}
                    <div className="relative">
                      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        <span className="flex items-center justify-center gap-2">
                          Launch Tool
                          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Photo Editor Tool */}
            <Link href="/tools/photo-edit" className="group block">
              <div className="relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 group-hover:scale-105 group-hover:-translate-y-2">

                {/* Card Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animated Wave Effect */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-teal-500 opacity-80"></div>
                <div className="absolute bottom-2 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-green-500 opacity-60 animate-pulse"></div>
                <div className="absolute bottom-4 left-0 w-full h-2 bg-gradient-to-r from-green-300 to-teal-400 opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

                {/* Card Content */}
                <div className="relative p-8 sm:p-10">

                  {/* Icon Section */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
                      <div className="relative bg-white rounded-full p-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="/photos/editp.png"
                          className="w-16 h-16 sm:w-20 sm:h-20"
                          alt="Photo Edit Color"
                        />
                      </div>

                      {/* Floating Badge */}
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}>
                        PRO
                      </div>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div className="text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                      Photo Color Editor
                    </h3>

                    <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 mb-6">
                      <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                        A sophisticated photo editing tool for color manipulation and enhancement with professional features
                      </p>
                    </div>

                    {/* Features Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">Color Filter</span>
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">Image Edit</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Canvas API</span>
                    </div>

                    {/* CTA Button */}
                    <div className="relative">
                      <button className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        <span className="flex items-center justify-center gap-2">
                          Launch Editor
                          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Coming Soon Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
              More Tools Coming Soon
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { name: "Weather App", icon: "🌤️", color: "from-blue-400 to-cyan-400" },
                { name: "Calculator Pro", icon: "🧮", color: "from-purple-400 to-pink-400" },
                { name: "Color Palette", icon: "🎨", color: "from-orange-400 to-red-400" }
              ].map((tool, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:scale-105 transition-transform duration-300">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center text-2xl`}>
                    {tool.icon}
                  </div>
                  <h3 className="font-semibold text-slate-700 mb-2">{tool.name}</h3>
                  <p className="text-sm text-slate-500">Coming Soon</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
