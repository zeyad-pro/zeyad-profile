'use client';

  import { useState, useEffect } from 'react';

  export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredItem, setHoveredItem] = useState(null);
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
      // Update time
      const updateTime = () => {
        const now = new Date();
        setCurrentTime(now.toLocaleTimeString('en-US', { 
          hour12: true,
          hour: '2-digit',
          minute: '2-digit'
        }));
      };
      updateTime();
      const timeInterval = setInterval(updateTime, 1000);

      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
      
      const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('scroll', handleScroll);
      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('mousemove', handleMouseMove);
        clearInterval(timeInterval);
      };
    }, []);

    const navItems = [
      { href: '/', label: 'Home', active: true },
      { href: '/about', label: 'About' },
      { href: '/tools', label: 'Tools' }, 
      { href: '/projects', label: 'Projects' }
    ];

    return (
      <>
        {/* Ambient background effect */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div 
            className="absolute w-96 h-96 rounded-full opacity-20 transition-all duration-1000"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
              background: 'radial-gradient(circle, #a8edea 0%, #fed6e3 60%, transparent 80%)', // pastel blue-pink
              filter: 'blur(80px)'
            }}
          />
        </div>

        {/* Main Navigation */}
        <nav className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ${
          scrolled ? 'top-4' : 'top-6'
        }`}>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center bg-[#23272f]/80 backdrop-blur-2xl border border-[#e0e7ef]/10 rounded-full px-8 py-4 shadow-2xl">
            {/* Logo Section */}
            <div className="flex items-center space-x-6 mr-8 pr-8 border-r border-[#e0e7ef]/10">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#a8edea] to-[#fed6e3] rounded-full opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-[#23272f] to-[#2d3142] rounded-full border border-[#e0e7ef]/20 flex items-center justify-center group-hover:border-[#a8edea]/50 transition-all duration-300">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#a8edea] to-[#fed6e3] rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-[#e0e7ef] to-[#cfd9df] bg-clip-text text-transparent">
                  Zeyad
                </span>
                <span className="text-xs text-[#b0b8c1] font-mono">{currentTime}</span>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-2">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 group ${
                    item.active
                      ? 'text-[#23272f]'
                      : 'text-[#b0b8c1] hover:text-[#23272f]'
                  }`}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Background */}
                  <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    item.active
                      ? 'bg-[#e0e7ef]/60 border border-[#cfd9df]/40'
                      : hoveredItem === index
                        ? 'bg-[#e0e7ef]/20 border border-[#cfd9df]/20'
                        : 'border border-transparent'
                  }`}></div>
                  
                  {/* Glow effect */}
                  {hoveredItem === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#a8edea]/30 to-[#fed6e3]/30 rounded-full blur-sm"></div>
                  )}
                  
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Active indicator */}
                  {item.active && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#a8edea] rounded-full animate-pulse"></div>
                  )}
                </a>
              ))}
            </div>

            {/* Status indicator */}
            <div className="ml-8 pl-8 border-l border-[#e0e7ef]/10 flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#7ed6a7] rounded-full animate-pulse"></div>
                <span className="text-xs text-[#b0b8c1]">Online</span>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative bg-[#23272f]/60 backdrop-blur-2xl border border-[#e0e7ef]/10 rounded-full p-4 shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#a8edea]/20 to-[#fed6e3]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative w-6 h-6">
                <span className={`absolute block w-full h-0.5 bg-[#e0e7ef] transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}></span>
                <span className={`absolute block w-full h-0.5 bg-[#e0e7ef] transform transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'top-3 opacity-100'
                }`}></span>
                <span className={`absolute block w-full h-0.5 bg-[#e0e7ef] transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`}></span>
              </div>
            </button>

            {/* Mobile Menu */}
            <div className={`absolute top-16 left-1/2 -translate-x-1/2 w-72 transition-all duration-500 ${
              isMenuOpen 
                ? 'opacity-100 translate-y-0 pointer-events-auto' 
                : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}>
              <div className="bg-[#23272f]/80 backdrop-blur-2xl border border-[#e0e7ef]/10 rounded-2xl p-6 shadow-2xl">
                
                {/* Mobile Header */}
                <div className="flex items-center space-x-4 pb-6 mb-6 border-b border-[#e0e7ef]/10">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#23272f] to-[#2d3142] rounded-full border border-[#e0e7ef]/20 flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-[#a8edea] to-[#fed6e3] rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-bold text-[#e0e7ef]">Zeyad</div>
                    <div className="text-xs text-[#b0b8c1] font-mono">{currentTime}</div>
                  </div>
                </div>

                {/* Mobile Navigation Items */}
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 group ${
                        item.active
                          ? 'bg-[#e0e7ef]/60 text-[#23272f] border border-[#cfd9df]/40'
                          : 'text-[#b0b8c1] hover:text-[#23272f] hover:bg-[#e0e7ef]/20'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="font-medium">{item.label}</span>
                      {item.active && (
                        <div className="w-2 h-2 bg-[#a8edea] rounded-full animate-pulse"></div>
                      )}
                      {!item.active && (
                        <div className="w-4 h-4 text-[#b0b8c1] group-hover:text-[#23272f] transition-colors duration-200">
                          <svg fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </a>
                  ))}
                </div>

                {/* Mobile Footer */}
                <div className="flex items-center justify-center space-x-2 pt-6 mt-6 border-t border-[#e0e7ef]/10">
                  <div className="w-2 h-2 bg-[#7ed6a7] rounded-full animate-pulse"></div>
                  <span className="text-xs text-[#b0b8c1]">System Online</span>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Floating Elements */}
        <div className="fixed inset-0 pointer-events-none z-10">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-[#e0e7ef]/20 rounded-full animate-pulse"
              style={{
                left: `${10 + (i * 8)}%`,
                top: `${20 + (i % 3) * 30}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + (i % 3)}s`
              }}
            />
          ))}
        </div>

        {/* Page Content Spacer */}
        <div style={{backgroundColor: '#23272f'}}></div>
        {/* <div className="h-24" style={{backgroundColor: '#23272f'}}></div> */}

        <style jsx>{`
          @keyframes float {
            0%, 100% { 
              transform: translateY(0px); 
              opacity: 0.6; 
            }
            50% { 
              transform: translateY(-8px); 
              opacity: 1; 
            }
          }
          
          @keyframes drift {
            0% { transform: translateX(0px); }
            50% { transform: translateX(10px); }
            100% { transform: translateX(0px); }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-drift {
            animation: drift 4s ease-in-out infinite;
          }
        `}</style>
      </>
    );
  }