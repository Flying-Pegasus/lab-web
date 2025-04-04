import './globals.css';
import Navbar from './navbar'; // Move the client component to a separate file

export const metadata = {
  title: 'ABATE Lab',
  description: 'Research lab website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
          <Navbar />
          <main>{children}</main>
          <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                {/* Address */}
                <div className="mb-4 md:mb-0">
                  <p className="text-sm">Emerging Electronics Materials Lab</p>
                </div>

                {/* Links */}
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                  <span className="hidden md:block text-gray-400">|</span>
                  <p>Ceramic Department, IIT (BHU) ,Varanasi (225001), U.P, India</p>
                  <span className="hidden md:block text-gray-400">|</span>
                  
                </div>

                {/* Copyright */}
                <div className="mt-4 md:mt-0">
                  <p className="text-xs">
                    Copyright © {new Date().getFullYear()} IIT Lab. All rights reserved. designed by Atulya
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}