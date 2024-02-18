'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/assets/Last Drop Logo.svg'
import instagram from '../../../public/assets/instagram.svg'
import twitter from '../../../public/assets/twitter.svg'
import Dropdown from './Dropdown'
import { Category, Category2 } from '../../../lib/types'
import Dropdown2 from './Dropdown2'


interface LandingProps {
  categories: Category[];
  category2: Category2[]
}


const Landing: React.FC<LandingProps> = ({ categories,category2 }) => {

  const [openDropdown, setOpenDropdown] = useState(-1);
  const [selectedOption, setselectedOption] = useState<string>('Option1')
  const handleOptions =(option: string)=>{
      setselectedOption(option)
  }


  const renderOptions =()=>{
    if(selectedOption === 'Option1'){
      return categories.map((category, index) => (
        <Dropdown
          key={category.name}
          title={category.name}
          items={category.foods.map((food) => ({
            id: `${category.name}-${food.name}`,
            name: food.name,
            price: food.price,
          }))}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          index={index}
        />
      ));
    }

    if(selectedOption==='Option2'){
      return category2.map((category, index) => (
        <Dropdown2
          key={category.name}
          title={category.name}
          items={category.drink.map((drink) => ({
            id: `${category.name}-${drink.name}`,
            name: drink.name,
            price: drink.price,
          }))}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
          index={index}
        />
      ));
    }
  }
  return (
    <main className='bg-[#000]'>
    <div className='items-center flex-col  flex mb-10 '>
      <div className='flex flex-col md:flex-row items-center justify-between lg:gap-10 xl:w-[1000px] md:mx-auto mt-[40px] md:mt-[50px]'>
    <nav className='md:mb-8 '> 
      <Image className='logo' src={logo} alt="site logo" />
    </nav>
  
    <div className='flex flex-col'>
    <p className='mt-5 md:text-[36px] text-center text-[26px] text-white uppercase menufont'>E-MENU</p>
      <ul className='flex justify-evenly  mt-2 items-center w-[290px] px-2 md:w-[350px] optionsBackgroundStyles'>
        <li className={selectedOption === 'Option1' ? 'menuListActive w-[150px] h-[45px] text-[16px] md:text-[20px]' : 'menuList w-[150px] h-[45px] text-[16px] md:text-[20px]'} onClick={()=> handleOptions('Option1')}>Food <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
<path d="M6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967L1.75736 0.696699C1.46447 0.403806 0.989593 0.403806 0.696699 0.696699C0.403806 0.989593 0.403806 1.46447 0.696699 1.75736L4.93934 6L0.696699 10.2426C0.403806 10.5355 0.403806 11.0104 0.696699 11.3033C0.989593 11.5962 1.46447 11.5962 1.75736 11.3033L6.53033 6.53033ZM5 6.75H6V5.25H5V6.75Z" fill={selectedOption === 'Option1' ? 'black' : 'white'}/>
</svg></li>
        <li className={selectedOption === 'Option2' ? 'menuListActive w-[150px] h-[45px] text-[16px] md:text-[20px]' : 'menuList w-[150px] h-[45px]  text-[16px] md:text-[20px]'} onClick={()=> handleOptions('Option2')}>Drinks <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
<path d="M6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967L1.75736 0.696699C1.46447 0.403806 0.989593 0.403806 0.696699 0.696699C0.403806 0.989593 0.403806 1.46447 0.696699 1.75736L4.93934 6L0.696699 10.2426C0.403806 10.5355 0.403806 11.0104 0.696699 11.3033C0.989593 11.5962 1.46447 11.5962 1.75736 11.3033L6.53033 6.53033ZM5 6.75H6V5.25H5V6.75Z" fill={selectedOption === 'Option2' ? 'black' : 'white'}/>
</svg></li>
      {/* <li className={selectedOption === 'Option3' ? 'menuListActive w-[150px] h-[45px] text-[16px] md:text-[20px]' : 'menuList w-[150px] h-[45px]  text-[16px] md:text-[20px]'} onClick={()=> handleOptions('Option3')}>Smoke <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
<path d="M6.53033 6.53033C6.82322 6.23744 6.82322 5.76256 6.53033 5.46967L1.75736 0.696699C1.46447 0.403806 0.989593 0.403806 0.696699 0.696699C0.403806 0.989593 0.403806 1.46447 0.696699 1.75736L4.93934 6L0.696699 10.2426C0.403806 10.5355 0.403806 11.0104 0.696699 11.3033C0.989593 11.5962 1.46447 11.5962 1.75736 11.3033L6.53033 6.53033ZM5 6.75H6V5.25H5V6.75Z" fill={selectedOption === 'Option3' ? 'black' : 'white'}/>
</svg></li> */}
      </ul>
    </div>
    <div className='md:flex gap-4 md:mb-4 md:mt-2 hidden md:invisible'>
      <p className='bg-white h-5 w-5 md:h-10 md:w-10 rounded-full flex items-center justify-center '> <Image className='cursor-pointer' src={instagram} alt="" /></p>
      <p className='bg-white h-5 w-5 md:h-10 md:w-10 rounded-full flex items-center justify-center '>  <Image className='cursor-pointer h-5 w-5 md:h-10 md:w-10' src={twitter} alt="" /></p>
   
  
    </div> 
      </div>
    <div>
      {renderOptions()}
    </div>
    </div>
 
  </main>
  )
}

export default Landing