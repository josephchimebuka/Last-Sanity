'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from "/public/Logo.svg";
import hideoutLogo from "/public/hideout-logo.svg";
import Dropdown from './Dropdown'
import { Category, Category2 } from '../../../lib/types'
import Dropdown2 from './Dropdown2'
import Footer from './Footer';


interface LandingProps {
  categories: Category[];
  category2: Category2[]
}

export const revalidate = 30
const Landing: React.FC<LandingProps> = ({ categories,category2 }) => {

  const [openDropdown, setOpenDropdown] = useState(-1);
  const [selectedOption, setselectedOption] = useState<string>('Option1')
  const handleOptions =(option: string)=>{
      setselectedOption(option)
  }


  const renderOptions =()=>{
    if (selectedOption === 'Option1') {
      return categories.map((category, index) => (
        <Dropdown
          key={category.name}
          title={category.name}
          notification={category.notification}
          items={category.foods && category.foods.map((food, foodIndex) => ({
            id: index * 100 + foodIndex, // Generate a numeric ID
            name: food.name,
            price: food.price,
            bracket: food.inBracket,
          }))}
          image={category.image?.asset?.url} // Pass the image URL
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          index={index}
        />
      ));
    }
    if (selectedOption === 'Option2') {
      return category2.map((category, index) => (
        <Dropdown
          key={category.name}
          title={category.name}
          notification={category.notification}
          items={(category.drink || []).map((drink) => ({
            id: index * 100 + (category.drink || []).indexOf(drink), // Generate a numeric ID
            name: drink.name,
            price: drink.price,
            bracket: drink.inBracket,
          }))}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          index={index}
        />
      ));
    }
  }
  return (
    <main className="">
    <div className="items-center flex-col  flex mb-10 content">
      <div className="flex flex-col md:flex-row items-center justify-between lg:gap-16 xl:min-w-[1200px] md:mx-auto mt-[40px] md:mt-[50px]">
        <nav className="md:mb-8 ">
          <Image className="logo" src={logo} alt="site logo" />
        </nav>

        <div className="flex flex-col">
          <ul className="flex justify-evenly  mt-2 items-center w-[290px] px-1 py-1 md:w-[350px] optionsBackgroundStyles">
            <li
              className={
                selectedOption === "Option1"
                  ? "menuListActive w-[150px] h-[45px] text-[16px] md:text-[20px]"
                  : "menuList w-[150px] h-[45px] text-[16px] md:text-[20px]"
              }
              onClick={() => handleOptions("Option1")}
            >
              Food{" "}
            </li>
            <li
              className={
                selectedOption === "Option2"
                  ? "menuListActive w-[150px] h-[45px] text-[16px] md:text-[20px]"
                  : "menuList w-[150px] h-[45px]  text-[16px] md:text-[20px]"
              }
              onClick={() => handleOptions("Option2")}
            >
              Drinks{" "}
            </li>
            {/* <li className={selectedOption === 'Option3' ? 'menuListActive w-[150px] h-[45px] text-[16px] md:text-[20px]' : 'menuList w-[150px] h-[45px]  text-[16px] md:text-[20px]'} onClick={()=> handleOptions('Option3')}>Smoke <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
<path d="M6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967L1.75736 0.696699C1.46447 0.403806 0.989593 0.403806 0.696699 0.696699C0.403806 0.989593 0.403806 1.46447 0.696699 1.75736L4.93934 6L0.696699 10.2426C0.403806 10.5355 0.403806 11.0104 0.696699 11.3033C0.989593 11.5962 1.46447 11.5962 1.75736 11.3033L6.53033 6.53033ZM5 6.75H6V5.25H5V6.75Z" fill={selectedOption === 'Option3' ? 'black' : 'white'}/>
</svg></li> */}
          </ul>
        </div>

        <nav className="md:mb-8 ">
          <Image className="logo" src={hideoutLogo} alt="hideout logo" />
        </nav>
      </div>
      <div className="rounded-xl bg-black/30 border border-[#343434] p-10 backdrop-blur mt-10">
        {renderOptions()}
      </div>
    </div>
    <Footer />
  </main>
  )
}

export default Landing