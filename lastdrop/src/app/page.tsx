"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from  "../../public/Lastdroplogo.svg"
import outdoorLogo from "../../public/OutdoorLogo.svg"
import hideoutLogo from "../../public/HighoutLogo.svg";
const LandingPageHero = () => {
  return (
    <div className="flex landing flex-col items-center justify-between min-h-screen bg-black text-white px-4 py-8">
      {/* Top Section: Logo */}
      <div className="w-full flex justify-between items-center mt-5">
        <div className="flex justify-center w-full">
          <Image
            src={logo} 
            alt="Logo"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
        {/* Top Right Link */}
        <Link
          href="/menu"
          className="absolute top-8 right-8 text-lg font-bold text-white hover:text-[#FE9346] transition-colors"
        >
          eMenu
        </Link>
      </div>

      {/* Middle Section: Boxes */}
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        {/* Box 1 */}
        <div className="group cursor-pointer flex items-center justify-center w-[400px] h-[400px] rounded-[20px] border border-white/30 hover:border-[#FE9346] transition-all duration-300">
          <Image
            src={outdoorLogo}
            alt="Image 1"
            width={4000}
            height={300}
            className="object-cover"
          />
        </div>

        {/* Box 2 */}
        <div className="group cursor-pointer flex items-center justify-center w-[400px] h-[400px] rounded-[20px] border border-white/30 hover:border-[#FE9346] transition-all duration-300">
          <Image
            src={hideoutLogo}
            alt="Image 2"
            width={4000}
            height={400}
            className="object-cover"
          />
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-8">
        <p className="text-center text-sm text-white/70">
          © 2023 LastDrop. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LandingPageHero;