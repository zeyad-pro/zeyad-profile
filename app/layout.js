// File 1: app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import  Navbar  from "./components/Navbar.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
  export const metadata = {
  metadataBase: new URL('https://my-profile-9ioh.vercel.app/'), // قم بتغيير هذا إلى دومين موقعك
  title: {
    default: 'Zeyad Maher | Frontend Developer',
    template: '%s | Zeyad Maher'
  },
  description: 'Professional Frontend Developer specializing in React, Next.js, and modern web technologies. View my portfolio and projects.',
  keywords: ['Zeyad Maher', 'Frontend Developer', 'Web Developer', 'React Developer', 'Next.js Developer', 'Portfolio'],
  authors: [{ name: 'Zeyad Maher' }],
  creator: 'Zeyad Maher',
  publisher: 'Zeyad Maher',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://my-profile-9ioh.vercel.app/', // قم بتغيير هذا إلى دومين موقعك
    siteName: 'Zeyad Maher Portfolio',
    title: 'Zeyad Maher | Frontend Developer',
    description: 'Professional Frontend Developer specializing in React, Next.js, and modern web technologies.',
    images: [
      {
        url: '/og-image.jpg', // قم بإضافة صورة OG في مجلد public
        width: 1200,
        height: 630,
        alt: 'Zeyad Maher Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zeyad Maher | Frontend Developer',
    description: 'Professional Frontend Developer specializing in React, Next.js, and modern web technologies.',
    images: ['/og-image.jpg'], // نفس صورة OG
    creator: '@zeyadmaher', // قم بتغيير هذا إلى حساب تويتر الخاص بك
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
     
      {/* Enhanced Footer */}
      <footer className="relative ">
        {/* Decorative Wave */}
        {/* <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-blue-100 via-purple-100 to-teal-100 opacity-50">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="currentColor" className="text-white"></path>
          </svg>
        </div> */}
        
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-24 pb-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              These tools are just the beginning. Let's collaborate and create innovative solutions together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get In Touch
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300">
                View All Projects
              </button>
            </div>
            
            <div className="border-t border-slate-700 pt-8">
              <p className="text-slate-400 text-sm">
                &copy; 2025 Zeyad Maher. Crafted with passion and creativity.
              </p>
            </div>
          </div>
        </div>
      </footer>
      </body>
    </html>
  );
}