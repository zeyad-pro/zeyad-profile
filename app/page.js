import Link from "next/link";

export const metadata = {
  title: "Zeyad Maher",
  description: "The personal website of Zeyad Maher - Web Developer specialized in modern web technologies.",
  keywords: ["Zeyad Maher", "Web Developer", "Frontend Developer", "Next.js", "React", "Portfolio"],
  authors: [{ name: "Zeyad Maher" }],
  robots: "index, follow",
  openGraph: {
    title: "Zeyad Maher",
    description: "Explore the personal website and portfolio of Zeyad Maher, a passionate web developer.",
    url: "https://my-profile-9ioh.vercel.app/",
    siteName: "Zeyad Maher",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen pt-55 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col lg:flex-row justify-center items-center p-4 sm:p-8 lg:p-12 overflow-hidden">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full opacity-20 animate-pulse blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full opacity-20 animate-bounce blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-400 to-emerald-300 rounded-full opacity-20 animate-ping blur-xl"></div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-400 to-orange-300 rounded-full opacity-20 animate-pulse blur-xl"></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-4 h-4 bg-blue-300 rotate-45 animate-spin opacity-60" style={{ animationDuration: '10s' }}></div>
          <div className="absolute bottom-40 left-20 w-6 h-6 bg-purple-300 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-40 left-1/2 w-3 h-3 bg-green-300 rotate-45 animate-pulse opacity-60"></div>
        </div>

        <div className="w-full lg:w-1/2 z-10 text-center lg:text-left mb-8 lg:mb-0 px-4">
          <div className="mb-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent animate-pulse leading-tight">
              Zeyad
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent animate-pulse leading-tight">
              Maher
            </h1>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 mb-8">
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
              I am a passionate <span className="font-bold text-blue-600">Front-End Web Developer</span> with experience in
              building responsive and modern websites using HTML, CSS, JavaScript,
              Bootstrap, Tailwind CSS, React, and Next.js. I enjoy turning ideas
              into reality through clean, efficient, and user-friendly web
              interfaces.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/projects">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Projects
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
            
            <button className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-full border-2 border-slate-200 hover:border-blue-400 hover:text-blue-600 transition-all duration-300 hover:shadow-lg">
              Contact Me
            </button>
          </div>
        </div>

        <div className="relative z-10 lg:w-1/2 flex justify-center">
          <div className="relative group">
            {/* Animated ring around image */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-full blur-md opacity-75 animate-spin" style={{ animationDuration: '8s' }}></div>
            <div className="absolute inset-2 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 rounded-full blur-sm opacity-50 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
            
            <img
              src="/photos/IMG-20250613-WA0000.jpg"
              alt="Zeyad Maher Profile"
              className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white shadow-2xl transition-all duration-500 group-hover:scale-105"
            />
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
              Available
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Hobbies Section */}
      <div className="py-16 px-4 sm:px-8 bg-gradient-to-b from-blue-50 to-white">
        
        {/* Hobbies Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              My Creative Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto">
              Exploring creativity through various digital mediums and technologies
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "/photos/coding.png", title: "Frontend", subtitle: "Developer", color: "from-blue-500 to-cyan-400" },
              { icon: "/photos/photo.png", title: "Photo", subtitle: "Editor", color: "from-green-500 to-emerald-400" },
              { icon: "/photos/video.png", title: "Video", subtitle: "Editor", color: "from-purple-500 to-pink-400" },
              { icon: "/photos/3D.png", title: "3D", subtitle: "Creator", color: "from-orange-500 to-red-400" }
            ].map((skill, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-slate-100">
                  <div className={`w-30 h-30 mx-auto mb-6 bg-gradient-to-br rounded-2xl flex items-center justify-center p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <img src={skill.icon} alt={skill.title} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 text-center">{skill.title}</h3>
                  <p className="text-xl font-bold text-slate-600 text-center">{skill.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Programming Languages */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Programming Languages
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: "/photos/gif/html (1).gif", title: "HTML", color: "from-orange-500 to-red-500" },
              { icon: "/photos/gif/css.gif", title: "CSS", color: "from-blue-500 to-cyan-500" },
              { icon: "/photos/js.png", title: "JavaScript", color: "from-yellow-500 to-orange-500" },
              { icon: "/photos/python.png", title: "Python", color: "from-green-500 to-blue-500" }
            ].map((lang, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-slate-100">
                  <div className={`w-30 h-30 mx-auto mb-4 bg-gradient-to-br rounded-xl flex items-center justify-center p-3`}>
                    <img src={lang.icon} alt={lang.title} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 text-center">{lang.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Frameworks & Tools
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: "/photos/gif/physics.gif", title: "React", color: "from-blue-400 to-cyan-400" },
              { icon: "/photos/next.png", title: "Next.js", color: "from-slate-700 to-slate-900" },
              { icon: "/photos/tailwind-css.svg", title: "Tailwind CSS", color: "from-teal-400 to-blue-500" },
              { icon: "/photos/bootstrap-5-logo-icon.webp", title: "Bootstrap", color: "from-purple-500 to-indigo-500" }
            ].map((framework, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-slate-100">
                  <div className={`w-30 h-30 mx-auto mb-4  rounded-xl flex items-center justify-center p-3`}>
                    <img src={framework.icon} alt={framework.title} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 text-center">{framework.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* To Do List Project */}
            <div className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img src="/photos/list.png" className="w-10 h-10 filter brightness-0 invert" alt="To Do List" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Smart To-Do List</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  An intelligent task management system that helps you organize your day and boost productivity with intuitive features and clean design.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">React</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">JavaScript</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">CSS</span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  View Project
                </button>
              </div>
            </div>

            {/* Photo Editor Project */}
            <div className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img src="/photos/editp.png" className="w-10 h-10 filter brightness-0 invert" alt="Photo Editor" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Color Photo Editor</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  A sophisticated photo editing tool focused on color manipulation and enhancement, providing professional-grade editing capabilities.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Canvas API</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">JavaScript</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">HTML5</span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    
    </div>
  );
}