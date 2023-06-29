import React from 'react'
import SectionComponent from './SectionComponent'
import Card from '../Features/Card';

const CardContent = [
  { id: 1, name: "Event Hosting & Coordination" },
  { id: 2, name: "Speech & Presentation Delivery" },
  { id: 3, name: "Entertainment & Audience Interaction" },
];

const Service = () => {
  return (
    <React.Fragment>
      <SectionComponent className='bg-blueish'>
        <div className='font-Inconsolata text-center'>
          <h1 className='font-extrabold text-4xl sm:text-5xl lg:text-6xl text-gray-950'>
            <span className='text-goldish'>Services</span> I Provide
          </h1>
          <p className='text-lg sm:text-xl lg:text-2xl text-gray-50 my-6'>
            The delivery of these services involves careful planning,
            preparation, and coordination with event organizers. I collaborate
            closely with the event team to understand the event’s objectives,
            theme, and desired atmosphere. On the day of the event, I take
            charge, utilizing their exceptional public speaking skills,
            charisma, and stage presence to deliver a memorable and engaging
            experience for both the hosts and the audience.
          </p>
        </div>

        {/* Cards  */}
        <div className='flex gap-8 items-center justify-between overflow-x-scroll scrollbar-hide max-w-6xl cursor overflow-y-visible mx-auto'>
          {
            CardContent.map( (content) => (
              <Card content={content}/>
            ))
          }
        </div>
      </SectionComponent>
    </React.Fragment>
  );
}

export default Service
