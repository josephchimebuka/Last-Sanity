'use client'

import React from 'react'
import Image from 'next/image'
import {ChevronDownIcon} from 'lucide-react'

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
  image?: string
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
  const isOpen = openDropdown === index

  const handleToggle = () => {
    setOpenDropdown(isOpen ? -1 : index)
  }

  return (
    <div className="md:w-[600px] lg:w-[800px] xl:w-[1000px] w-[305px] cursor-pointer border-b border-b-white/30">
     <button
  onClick={handleToggle}
  className="flex w-full items-center justify-between text-2xl h-[90px] font-bold dropdown-header md:px-4 uppercase text-white outline-none border-none focus:outline-none focus:ring-0"
>
  <span className="break-words whitespace-normal text-left flex-1">{title}</span>

  <ChevronDownIcon
  className={`text-[#fff] pointer-events-none w-6 h-6 shrink-0 transition-transform duration-300 ${
    isOpen ? "rotate-180" : "rotate-0"
  }`}
/>
</button>
      {isOpen && (
        <div className="md:px-4 py-2">
          <ul className={`ulcontainer ultags`}>
            {items.map((item, index) => (
              <div key={item.id}>
                <li className="flex justify-between pb-6 px-2 menufont border-l border-l-[#343434]">
                  <div className="md:flex items-center flex-col md:flex-row flex-1 pl-4">
                    <p className="text-[16px] normal-case md:text-[18px] menufont tracking-wide gap-2">
                      {item.name}
                    </p>
                    {item.bracket && (
                      <p className="text-[12px] md:text-[14px] md:ml-2 mt-2 md:mt-0 text-[#FE9346] menufont tracking-wider">
                        {"\u2022"} {item.bracket}
                      </p>
                    )}
                  </div>
                  {item.price && (
                    <p className="text-[16px] lg:text-[18px] text-[#FE9346] font-bold dropdown-header ml-3">
                      N{item.price}
                    </p>
                  )}
                </li>
                {item.notification && (
                  <p className="text-[11px] lg:text-[14px] italics md:py-2 py-2 px-2 md:px-2 text-[#FE9346]">
                    .{item.notification}
                  </p>
                )}
              </div>
            ))}
          </ul>
          {image && (
            <Image
              className="w-full mt-10 object-cover"
              src={image}
              width={9000}
              height={100}
              alt={`${title} Image`}
              priority
            />
          )}
        </div>
      )}
    </div>
  )
}

export default Dropdown
