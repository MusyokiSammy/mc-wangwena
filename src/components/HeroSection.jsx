import React from 'react'
import wangwena from '../images/WangwenaSuit.png'
import { BiArrowToRight } from 'react-icons/bi'
import SectionComponent from './SectionComponent';
import useMediaQuery from "../Hooks/useMediaQuery"

const HeroSection = () => {

  const isDesktop = useMediaQuery('(min-width: 1024px)')
  return (
    <React.Fragment>
      <SectionComponent className="bg-blueish">
        <div className="flex">
          <div className="w-full space-y-5 flex items-start justify-center flex-col font-Inconsolata">
            {/* <div className="w-full space-y-5 flex flex-col items-start justify-center max-sm:relative max-sm:px-4"> */}
            <h1 className="animee text-dark-goldish text-4xl sm:text-6xl font-bold">
              MC Wangwena
            </h1>
              <p className="text-gray-50 text-lg sm:text-xl lg:text-2xl mt-10 md:leading-10  leading-7">
                Welcome to the ultimate destination for Master of Ceremony
                Services. Whether you’re planning a corporate event, wedding
                reception, or any special occasion, I am an experienced and
                charismatic Master of Ceremony who is here to make your event
                truly unforgettable.
              </p>
            <button className="bg-goldish rounded-lg p-2 md:p-4 flex items-center justify-center gap-1 md:gap-3 animate__animated animate__backInLeft animate__slow">
              <span className="text-md md:text-xl  font-semibold">
                Explore More
              </span>
              <BiArrowToRight className="h-6 w-6 " />
            </button>
          </div>

          <div className="flex items-center justify-center absolute right-8 -z-20 top-1 opacity-20 lg:w-full lg:relative lg:justify-end lg:opacity-100">
            <div className={`${isDesktop ? "hexadesk" : "hexamobi"}`}>
              <div className={`${isDesktop ? "hexadesk-2" : "hexamobi-2"}`}>
                <img
                  src={wangwena}
                  alt="mc Wangwena"
                  className="p-4 ml-4  w-full object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionComponent>
    </React.Fragment>
  );
}

export default HeroSection
