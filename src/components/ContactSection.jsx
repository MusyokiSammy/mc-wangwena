import React from 'react'

const ContactSection = () => {
  return (
    <React.Fragment>
      <section className="relative isolate p-2 px-10 lg:px-16 w-full bg-goldish font-Inconsolata ">
        <div className="flex items-center flex-col lg:flex-row mx-auto max-w-[1560px] py-16">
          <div className="w-full mb-6 mr-6">
            <p className="text-xl text-center font-semibold">
              Discover the difference a professional Master of Ceremony can
              make. Contact me today to book your one and only talented MC and
              let me transform your event into an extraordinary experience that
              will be remembered for years to come.
            </p>
          </div>
          <form action="" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label htmlFor="fullname" className="flex flex-col">
                <span className="text-base font-semibold text-gray-900">
                  Full Name
                </span>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="full name"
                  className="block w-full px-4 py-2 text-black placeholder-goldish transition-all duration-200 bg-blue-50 border border-gray-200 rounded-md focus:outline-none focus:border-blueish caret-card-blueish"
                />
              </label>
              <label htmlFor="" className="flex flex-col">
                <span className="text-base font-semibold text-gray-900">
                  Email Address
                </span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email address"
                  className="block w-full px-4 py-2 text-black placeholder-goldish transition-all duration-200 bg-blue-50 border border-gray-200 rounded-md focus:outline-none focus:border-blueish caret-card-blueish"
                />
              </label>
              <label htmlFor="subject" className="flex flex-col ">
                <span className="text-base font-semibold text-gray-900">
                  Subject
                </span>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="subject"
                  className="block w-full px-4 py-2 text-black placeholder-goldish transition-all duration-200 bg-blue-50 border border-gray-200 rounded-md focus:outline-none focus:border-blueish caret-card-blueish"
                />
              </label>
            </div>
            <div>
              <label htmlFor="Message" className="flex flex-col">
                <span className="text-base font-semibold text-gray-900">
                  Message
                </span>
                <textarea
                  type="text"
                  name="firstname"
                  id=""
                  placeholder="Write me a message"
                  className="block w-full px-4 py-4 text-black placeholder-goldish transition-all duration-200 bg-blue-50 border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blueish caret-card-blueish"
                  rows="4"
                />
              </label>
            </div>
            <button
              className="inline-flex items-center justify-center w-full px-4 py-2 mt-2 text-lg font-semibold text-white transition-all duration-200 bg-card-blueish border border-transparent rounded-md focus:outline-none hover:bg-blue-900 focus:bg-blueish"
              type="submit"
            >
              Contact Me
            </button>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
}

export default ContactSection
