import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";
import React from "react";
import Image from 'next/image'


interface DropdownProps {
  title: string;
  notification?: string;
  items: {
    id: number;
    name?: string;
    price?: number | string;
    bracket?: string;
    notification?: string;
  }[];
  image?: string; // Add image property
  index: number;
  openDropdown: number; // Index of the currently open dropdown
  setOpenDropdown: React.Dispatch<React.SetStateAction<number>>;
}

const Dropdown: React.FC<DropdownProps> = ({ title, items, image }) => {
  return (
    <div className="md:w-[600px] lg:w-[800px] xl:w-[1000px] w-[305px] cursor-pointer border-b border-b-white/30">
      <Accordion type="single" collapsible className="outline-none">
        <AccordionItem value={title}>
          <AccordionTrigger className="flex items-center text-2xl h-[90px] font-bold dropdown-header uppercase [&[data-state=open]]:text-orange-400 outline-none border-none">
            {title}
          </AccordionTrigger>
          <AccordionContent>
            <ul className={`ulcontainer ultags`}>
              {items.map((item) => (
                <>
                  <li
                    className="flex justify-between py-2 px-2 menufont border-l border-l-[#343434]"
                    key={item.id}
                  >
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
                </>
              ))}
            </ul>
            {image && (
              <Image
                className="w-full"
                src={image}
                width={1000}
                height={100}
                alt={`${title} Image`}
              />
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Dropdown;
