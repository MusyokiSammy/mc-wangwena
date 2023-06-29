import React from 'react'

const PhotoContent = () => {
  return (
    <React.Fragment>
      <div className="flex items-end justify-evenly font-Inconsolata gap-2">
        <div className="h-64 w-64 shadow-2xl rounded-xl  animate__animated animate__backInLeft animate__slow">
          <img src={image} alt="" className="h-full w-full" />
        </div>
        <p className="text-2xl font-semibold shadow-2xl bg-blue-200 p-2 rounded-xl  animate__animated animate__backInRight animate__slow">
          Unleash the Power of Professionalism and Creativity:
          <br />
          <span className="text-5xl font-extrabold  text-goldish">
            Your Extraordinary MC
          </span>
        </p>
      </div>
    </React.Fragment>
  );
}

export default PhotoContent
