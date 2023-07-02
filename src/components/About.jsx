import React from 'react'
import SectionComponent from './SectionComponent'
import wangwena from '../images/WangwenaSuit.png'
import PublicSpeaking from '../images/PublicSpeaking.jpg'
import Charisma from '../images/Charisma.jpg'
import Seam from '../images/Seamless.jpg'
import RevealDown from '../Features/RevealDown'
import RevealUp from '../Features/RevealUp'

const About = () => {
  return (
    <React.Fragment>
      <SectionComponent className="bg-blue-200">
        <div className="flex flex-col md:flex-row items-center justify-evenly font-Inconsolata gap-2">
          <RevealUp>
            <div className="w-96 sm:w-64 shadow-2xl p-1 bg-card-blueish rounded-xl ">
              <img src={wangwena} alt="Mc Wangwena" className="h-full w-full" />
            </div>
          </RevealUp>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold  bg-blue-200 p-2 rounded-xl ">
            <span className="text-2xl md:text-3xl lg:text-5xl font-extrabold  text-goldish">
              Your Extraordinary MC
            </span>
            <br />
            Unleash the Power of Professionalism and Creativity.
          </p>
        </div>

        <div className="flex flex-col md:flex-row-reverse mt-10 items-center justify-evenly font-Inconsolata gap-2">
          <RevealDown>
            <div className="h-64 w-96 shadow-2xl flex-shrink-0 bg-card-blueish p-1 rounded-xl ">
              <img
                src={PublicSpeaking}
                alt="PublickSpeaking"
                className="h-full w-full rounded-xl"
              />
            </div>
          </RevealDown>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold bg-blue-200 p-2 rounded-xl ">
            <span className="font-bold text-goldish text-2xl md:text-3xl lg:text-5xl">
              Captivate and Connect:
            </span>
            <br />
            Engaging Audiences with Expert Public Speaking, Unforgettable
            <br />
            Introductions and Improvisations by Your MC and Attention to Detail.
          </p>
        </div>

        <div className="flex flex-col md:flex-row mt-10 items-center justify-evenly font-Inconsolata gap-2">
          <RevealDown>
            <div className=" w-96 p-1 shadow-2xl flex-shrink-0 bg-card-blueish rounded-xl ">
              <img
                src={Charisma}
                alt="Charisma"
                className="h-full w-full rounded-xl"
              />
            </div>
          </RevealDown>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold bg-blue-200 p-2 rounded-xl ">
              <span className="font-bold text-goldish text-2xl md:text-3xl lg:text-5xl">
                Charisma and Adaptability:
              </span>
              <br />
              The Perfect Choice for Events of All Sizes.
            </p>
        </div>

        <div className="flex flex-col  md:flex-row-reverse mt-10 items-center justify-evenly font-Inconsolata gap-2">
          <RevealUp>
            <div className="h-64 w-96 shadow-2xl flex-shrink-0 bg-card-blueish rounded-xl p-1">
              <img
                src={Seam}
                alt="Seamless Coordination"
                className="h-full w-full rounded-xl"
              />
            </div>
          </RevealUp>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold bg-blue-200 p-2 rounded-xl ">
            <span className="font-bold text-goldish text-2xl md:text-3xl lg:text-5xl">
              Seamless Coordination and Effective Communication:
            </span>
            <br />
            Your Key to Event Success.
          </p>
        </div>
      </SectionComponent>
    </React.Fragment>
  );
}

export default About
