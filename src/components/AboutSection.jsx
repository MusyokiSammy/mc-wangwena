import React from 'react'
import SectionComponent from './SectionComponent'
import WangwenaSuit from '../images/My project-1 (2).png'

const AboutSection = () => {
  return (
    <React.Fragment>
      <SectionComponent className="bg-[#8499b9] font-Inconsolata">
        <div className="flex items-center gap-3">
          <div className="absolute -z-20 overflow-y-hidden opacity-10 sm:relative  sm:float-right lg:w-full lg:relative lg:opacity-100">
            <img
              src={WangwenaSuit}
              alt="wangwena"
              className="w-full h-full"
            />
          </div>
          <div className="w-full">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-950 mb-6">
              With a perfect blend of professionalism, creativity, and a knack
              for engaging audiences, as a Master of Ceremony, I bring a unique
              touch to every event I host. I possess exceptional public speaking
              skills, a keen eye for detail, and the ability to create a vibrant
              and energetic atmosphere that captivates guests from start to
              finish.
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-950 my-6">
              As an MC, I understand that the success of your event depends on
              seamless coordination and effective communication. I take the time
              to understand your vision, ensuring that each announcement,
              introduction, and transition aligns with your desired tone and
              objectives. I will expertly guide your event, maintaining a smooth
              flow and effortlessly engaging your audience throughout the
              program.
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-950 my-6">
              From delivering captivating introductions to entertaining
              improvisations, I have an innate ability to connect with diverse
              audiences, leaving a lasting impression on both you and your
              guests. My Charisma and stage presence, combined with the ability
              to adapt to any situation, i make perfect choice for events of all
              sizes and themes.
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-950 mt-6">
              Discover the difference a professional Master of Ceremony can
              make. Contact me today to book your one and only talented MC and
              let me transform your event into an extraordinary experience that
              will be remembered for years to come.
            </p>
          </div>
        </div>
      </SectionComponent>
    </React.Fragment>
  );
}

export default AboutSection
