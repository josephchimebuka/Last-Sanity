"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Lastdroplogo.svg";
import outdoorLogo from "../../public/OutdoorLogo.svg";
import hideoutLogo from "../../public/HighoutLogo.svg";
import Footer from "./component/Footer";

const LandingPageHero = () => {
  return (
    <div className="landing flex flex-col items-center justify-between">
      <div className="flex flex-col items-center gap-8 justify-between text-white px-4 py-8">
        {/* Top Section: Logo */}
        <div className="w-full flex justify-between items-center mt-5">
          <div className="flex justify-center w-full">
            <Image
              src={logo}
              alt="Logo"
              width={150} // Default width
              height={150} // Default height
              className="object-contain md:w-[200px] md:h-[200px]" // Adjust size for larger screens
            />
          </div>

          {/* Top Right Link */}
          <Link
            href="/menu"
            className="uppercase absolute top-8 right-8 text-lg font-bold text-white hover:text-[#FE9346] transition-colors"
          >
            E menu
          </Link>
        </div>

        {/* Middle Section: Boxes */}
        <div className="flex flex-col md:flex-row gap-8 mt-2">
          {/* Box 1 */}
          <div className="group cursor-pointer bg-black/30 p-6 flex items-center justify-center w-[300px] h-[200px] md:w-[400px] md:h-[300px] rounded-[20px] border border-white/30 hover:border-[#FE9346] transition-all duration-300">
            <Image
              src={outdoorLogo}
              alt="Image 1"
              width={3000}
              height={200}
              className="object-contain"
            />
          </div>

          {/* Box 2 */}
          <div className="group cursor-pointer bg-black/30 p-6 flex items-center justify-center w-[300px] h-[200px] md:w-[400px] md:h-[300px] rounded-[20px] border border-white/30 hover:border-[#FE9346] transition-all duration-300">
            <Image
              src={hideoutLogo}
              alt="Image 2"
              width={3000}
              height={200}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default LandingPageHero;