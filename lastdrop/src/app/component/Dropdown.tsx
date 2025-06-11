// Dropdown.tsx
import React, { useState, useEffect } from 'react';
import { Category } from '../../../lib/types';

interface DropdownProps {
    title: string;
    notification?: string;
    items: Array<{
      id: string;
      name: string;
      price?:number | string;
      bracket?: string;
    }>;
    openDropdown: number;
    setOpenDropdown: React.Dispatch<React.SetStateAction<number>>;
    index: number;
  }

const Dropdown: React.FC<DropdownProps> = ({ title, items, openDropdown, setOpenDropdown, index,notification }) => {
  const [isRotated, setIsRotated] = useState(false);
  const [changeColor, setChangeColor] = useState(false);

  useEffect(() => {
    // Rotate the arrow when the dropdown is opened
    setIsRotated(openDropdown === index);
  }, [openDropdown, index]);

  const handleIconClick = () => {
    setIsRotated(!isRotated);
    setChangeColor(true);
  };

  const toggleDropdown = () => {
    setOpenDropdown((prevOpenDropdown) => (prevOpenDropdown === index ? -1 : index));
    setChangeColor(true);
  };

  return (
    <div className="md:w-[600px] lg:w-[800px] xl:w-[1000px] w-[305px] mt-5 cursor-pointer">
      <div
        className={`dropdown-header flex justify-between text-lg uppercase font-bold ${
          changeColor && openDropdown === index ? 'colorChange' : 'dropContainer'
        }`}
        onClick={toggleDropdown}
      >
        {title}
        <svg
          className={isRotated ? 'rotated' : 'notRotated'}
          onClick={handleIconClick}
          fill={isRotated && openDropdown === index ? '#FE9346' : '#fff'}
          height="20px"
          width="20px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 330 330"
          xmlSpace="preserve"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              id="XMLID_225_"
              d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
            ></path>
          </g>
        </svg>
      </div>
      {openDropdown === index && (
        <ul className={`dropdown-list ulcontainer ultags`}>
       {items.map((item) => (
  <li className="flex justify-between listtags md:py-2 py-2 px-2 md:px-2 uppercase" key={item.id}>
    <div className="md:flex items-center flex-col md:flex-row flex-1">
      <p className="text-[15px] text-white md:text-[16px] gap-2">{item.name}</p>
      {/* Uncomment the next line if 'bracket' property exists in your items */}
      {item.bracket && <p className="text-[10px] md:text-[12px] md:ml-2 mt-2 md:mt-0 text-[#FE9346] italic">{item.bracket}</p>}
    </div>
    {item.price && <p className="text-[15px] lg:text-[16px] ml-3">N0{item.price}</p>}
  </li>
))}

        </ul>
      )}
    </div>
  );
};

export default Dropdown;
