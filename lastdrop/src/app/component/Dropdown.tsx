'use client'

import React from 'react'
import Image from 'next/image'
import {ChevronDownIcon} from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'

import {PrevButton, NextButton, usePrevNextButtons} from './ui/EmblaCarouselArrowButtons'
import {DotButton, useDotButton} from './ui/EmblaCarouselDotButton'

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
  images?: {url: string}[]
  index: number
  openDropdown: number
  setOpenDropdown: React.Dispatch<React.SetStateAction<number>>
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  items,
  images,
  index,
  openDropdown,
  setOpenDropdown,
}) => {
  const isOpen = openDropdown === index

  const handleToggle = () => {
    setOpenDropdown(isOpen ? -1 : index)
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true})
  const {selectedIndex, scrollSnaps, onDotButtonClick} = useDotButton(emblaApi)
  const {prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick} =
    usePrevNextButtons(emblaApi)

  return (
    <div className="md:w-[600px] lg:w-[800px] xl:w-[1000px] w-[305px] cursor-pointer border-b border-b-white/30">
      <button
        onClick={handleToggle}
        className="flex w-full items-center justify-between text-2xl h-[90px] font-bold dropdown-header md:px-4 uppercase text-white outline-none border-none focus:outline-none focus:ring-0"
      >
        <span className="break-words whitespace-normal text-left flex-1">{title}</span>
        <ChevronDownIcon
          className={`text-[#fff] pointer-events-none w-6 h-6 shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>

      {isOpen && (
        <div className="md:px-4 py-2">
          <div>
            <ul className="ulcontainer ultags">
              {items.map((item) => (
                <div key={item.id}>
                  <li className="flex justify-between pb-6 px-2 menufont border-l border-l-[#343434]">
                    <div className="md:flex items-center flex-col md:flex-row flex-1 pl-4">
                      <p className="text-[16px] md:text-[18px] font-display tracking-wide">
                        {item.name}
                      </p>
                      {item.bracket && (
                        <p className="text-[12px] md:text-[14px] md:ml-2 mt-2 md:mt-0 text-[#FE9346] tracking-wider font-display">
                          • {item.bracket}
                        </p>
                      )}
                    </div>
                    {item.price && (
                      <p className="text-[16px] lg:text-[18px] text-[#FE9346] font-bold ml-3">
                        N{item.price}
                      </p>
                    )}
                  </li>
                  {item.notification && (
                    <p className="text-[11px] lg:text-[14px] italic py-2 px-2 text-[#FE9346]">
                      .{item.notification}
                    </p>
                  )}
                </div>
              ))}
            </ul>

            {/* Image carousel */}
            {images && images.length > 0 && (
              <div className="mt-10">
                {images.length > 1 ? (
                  <div className="embla">
                    <div className="embla__viewport" ref={emblaRef}>
                      <div className="embla__container">
                        {images.map((img, idx) => (
                          <div className="embla__slide" key={idx}>
                            <Image
                              className="w-full h-[150px] md:h-[350px] object-cover rounded-sm"
                              src={img.url}
                              width={1000}
                              height={600}
                              alt={`${title} Image ${idx + 1}`}
                              priority
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Navigation controls */}
                    <div className="embla__controls mt-4">
                      <div className="embla__buttons">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                      </div>
                      <div className="embla__dots flex justify-center gap-1">
                        {scrollSnaps.map((_, idx) => (
                          <DotButton
                            key={idx}
                            onClick={() => onDotButtonClick(idx)}
                            className={`embla__dot${
                              selectedIndex === idx ? ' embla__dot--selected' : ''
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Image
                    className="w-full object-contain"
                    src={images[0].url}
                    width={1000}
                    height={600}
                    alt={`${title} Image`}
                    priority
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
