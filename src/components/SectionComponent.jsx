import React from 'react'

const SectionComponent = ( {children, className}) => {
  return (
    <React.Fragment>
      <div className={`relative isolate p-2 px-10 lg:px-16 w-full ${className}`}>
        <div className="mx-auto max-w-[1560px] py-16 md:py-24">
            { children }
        </div>
      </div>
    </React.Fragment>
  )
}

export default SectionComponent
