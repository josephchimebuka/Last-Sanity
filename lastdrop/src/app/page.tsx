'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/Lastdroplogo.svg'
import outdoorLogo from '../../public/OutdoorLogo.svg'
import hideoutLogo from '../../public/HighoutLogo.svg'
import Footer from './component/Footer'

const LandingPageHero = () => {
  return (
    <div className="landing flex flex-col items-center h-screen">
      <div className="flex flex-col items-center gap-4 justify-between text-white px-4 py-4 h-full">
        {/* Top Section: Logo */}
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center w-full">
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={100}
              className="object-contain md:w-[150px] md:h-[150px]" // Adjust size for larger screens
            />
          </div>
          {/* 
          <Link
            href="/menu"
            className="uppercase absolute top-4 right-4 text-sm font-bold text-white hover:text-[#FE9346] transition-colors"
          >
            E menu
          </Link> */}
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Link href="/Outdoormenu">
            <div className="group cursor-pointer bg-black/30 p-4 flex items-center justify-center w-[210px] h-[180px] md:w-[400px] md:h-[300px] rounded-[20px] border border-white/30 hover:border-[#FE9346] transition-all duration-300">
              <Image
                src={outdoorLogo}
                alt="Outdoor Menu"
                width={500}
                height={150}
                className="object-contain"
              />
            </div>
          </Link>

          <Link href="/HideoutMenu">
            <div className="group cursor-pointer bg-black/30 md:p-4 flex items-center justify-center w-[210px] h-[180px] md:w-[400px] md:h-[300px] rounded-[20px] border border-white/30 hover:border-[#FE9346] transition-all duration-300">
              <Image
                src={hideoutLogo}
                alt="Hideout Menu"
                width={500}
                height={150}
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  )
}

export default LandingPageHero
