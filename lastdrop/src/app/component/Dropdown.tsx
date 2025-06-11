"use client";

import React from "react";
import Image from "next/image";
import { ChevronDownIcon } from "lucide-react";

interface DropdownProps {
  title: string
  notification?: string
  items: {
    id: number
    name?: string
    price?: number | string
    bracket?: string
    notification?: string
  }[]
  image?: string // Add image property
  index: number
  openDropdown: number // Index of the currently open dropdown
  setOpenDropdown: React.Dispatch<React.SetStateAction<number>>
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  items,
  image,
  index,
  openDropdown,
  setOpenDropdown,
}) => {
  const isOpen = openDropdown === index;

  const handleToggle = () => {
    setOpenDropdown(isOpen ? -1 : index); // Close if already open, otherwise open
  };

  return (
    <div className="md:w-[600px] lg:w-[800px] xl:w-[1000px] w-[305px] cursor-pointer border-b border-b-white/30">
      <button
        onClick={handleToggle}
        className="flex w-full items-center justify-between text-2xl h-[90px] font-bold dropdown-header uppercase text-white [&[data-state=open]]:text-orange-400 outline-none border-none"
      >
        {title}
        <ChevronDownIcon
          className={`text-muted-foreground pointer-events-none w-6 h-6 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 py-2">
          <ul className={`ulcontainer ultags`}>
            {items.map((item) => (
              <div key={'item' + index}>
                <li className="flex justify-between py-2 px-2 menufont border-l border-l-[#343434]">
                  <div className="md:flex items-center flex-col md:flex-row flex-1 pl-4">
                    <p className="text-[15px] md:text-[16px] menufont tracking-wide gap-2">
                      {item.name}
                    </p>
                    {item.bracket && (
                      <p className="text-[10px] md:text-[12px] md:ml-2 mt-2 md:mt-0 text-[#FE9346] menufont tracking-wider">
                        {item.bracket}
                      </p>
                    )}
                  </div>
                  {item.price && (
                    <p className="text-[15px] lg:text-[16px] text-[#FE9346] font-bold dropdown-header ml-3">
                      N{item.price}
                    </p>
                  )}
                </li>
                {item.notification && (
                  <p className="text-[8px] lg:text-[12px] italics md:py-2 py-2 px-2 md:px-2 text-[#FE9346]">
                    {item.notification}
                  </p>
                )}
              </div>
            ))}
          </ul>
          {image && (
            <Image
              className="w-full h-[300px] object-cover"
              src={image}
              width={1000}
              height={100}
              alt={`${title} Image`}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;