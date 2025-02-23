import React from "react";

const Footer = () => (
  <footer className="w-full bg-black text-white text-center py-4 mt-auto">
    <div className="w-full flex flex-col items-center">
      <p className="text-white text-sm text-center">Come join us and hear about the unexpected miracles.</p>
      
      <div className="flex justify-center space-x-4 mt-3">
        <a href="#" className="hover:underline">Facebook</a>
        <a href="#" className="hover:underline">Twitter</a>
        <a href="#" className="hover:underline">Instagram</a>
      </div>
    </div>

    <div className="w-full h-[0.25px] bg-gray-400 mt-5" />

    <div className="w-full flex justify-center mt-3">
      <p className="text-white text-xs">&copy; 2025 TranspareNC | Contact: info@TranspareNC.com</p>
    </div>
  </footer>
);

export default Footer;
