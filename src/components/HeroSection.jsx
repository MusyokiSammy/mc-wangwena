import React from 'react'
import wangwena from '../images/wangwena1.png'
import { BiArrowToRight } from 'react-icons/bi'

const HeroSection = () => {
  return (
    <React.Fragment>
      <section className="bg-blueish flex items-center justify-center h-[596px]">
        <div className='relative flex max-w-[1560px] mt-16'>
            <div className='w-full space-y-5 flex flex-col items-start justify-center'>
                <h1 className='text-goldish text-4xl font-bold'>MC Wangwena</h1>
                <p className='text-gray-50 text-2xl leading-10'>
                    Welcome to the ultimate destination for Master of Ceremony Services.
                    Whether you’re planning a corporate event, wedding reception, or any
                    special occasion, I am an experienced and charismatic Master of
                    Ceremony who is here to make your event truly unforgettable.
                </p>
                <button className='bg-goldish rounded-lg p-4 flex items-center justify-center gap-3'>
                    <span className='text-xl font-bold'>
                        Explore More
                    </span>
                    <BiArrowToRight className='h-8 w-8'/>
                </button>
            </div>
            <div className='w-full flex items-center justify-end'>
                <div className='hexagon'/>
                <div className='absolute h-[450px] w-[390px] bottom-20 right-3'>
                    <img src={wangwena} alt="" className='w-full h-full'/>
                </div>
            </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default HeroSection
