import React from 'react'
import SectionComponent from './SectionComponent'
import wangwena from '../images/WangwenaSuit.png'
import PublicSpeaking from '../images/PublicSpeaking.jpg'
import Charisma from '../images/Charisma.jpg'
import Seam from '../images/Seamless.jpg'

const About = () => {
  return (
    <React.Fragment>
      <SectionComponent className="bg-blue-200">
        <div className="flex items-center justify-evenly font-Inconsolata gap-2">
          <div className="h-64 w-64 shadow-2xl rounded-xl  animate__animated animate__backInLeft animate__slow">
            <img src={wangwena} alt="Mc Wangwena" className="h-full w-full" />
          </div>
          <p className="text-2xl font-semibold  bg-blue-200 p-2 rounded-xl  animate__animated animate__backInRight animate__slow">
            <span className="text-4xl font-extrabold  text-goldish">
              Your Extraordinary MC
            </span>
            <br />
            Unleash the Power of Professionalism and Creativity.
          </p>
        </div>
        <div className="flex flex-row-reverse mt-10 items-center justify-evenly font-Inconsolata gap-2">
          <div className="h-64 w-96 shadow-2xl rounded-xl  animate__animated animate__backInLeft animate__slow">
            <img src={PublicSpeaking} alt="PublickSpeaking" className="h-full w-full" />
          </div>
          <p className="text-2xl font-semibold bg-blue-200 p-2 rounded-xl  animate__animated animate__backInRight animate__slow">
            Engaging Audiences with Expert Public Speaking, Unforgettable
            <br />
            Introductions and Improvisations by Your MC and Attention to Detail.
          </p>
        </div>
        <div className="flex mt-10 items-center justify-evenly font-Inconsolata gap-2">
          <div className="h-64 w-96 shadow-2xl rounded-xl  animate__animated animate__backInLeft animate__slow">
            <img src={Charisma} alt="Charisma" className="h-full w-full" />
          </div>
          <p className="text-2xl font-semibold bg-blue-200 p-2 rounded-xl  animate__animated animate__backInRight animate__slow">
            <span className="font-bold text-goldish text-4xl">
              Charisma and Adaptability:
            </span>
            <br />
            The Perfect Choice for Events of All Sizes.
          </p>
        </div>
        <div className="flex flex-row-reverse mt-10 items-center justify-evenly font-Inconsolata gap-2">
          <div className="h-64 w-96 shadow-2xl rounded-xl  animate__animated animate__backInLeft animate__slow">
            <img src={Seam} alt="Seamless Coordination" className="h-full w-full" />
          </div>
          <p className="text-2xl font-semibold bg-blue-200 p-2 rounded-xl  animate__animated animate__backInRight animate__slow">
            <span className="font-bold text-goldish text-4xl">
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
