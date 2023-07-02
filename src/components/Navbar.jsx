import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logo from "../images/WangwenaLogo.png";
import IconListItem from "./IconListItem";
import { IconLinks } from "../Data";
import { TbWorld } from "react-icons/tb";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleShowSocials = () => {
        setIsOpen((prev) => !prev)
    }
  return (
    <React.Fragment>
      <header className="relative isolate inset-x-0 top-0 shadow-2xl bg-blueish">
        <nav
          className="flex items-center justify-between p-4  max-w-[1560px] mx-auto"
          aria-label="Global"
        >
          <div className="flex items-center justify-center gap-2">
            <img
              src={logo}
              alt="MC Wangwena Logo"
              className="h-10 w-10 lg:h-16 lg:w-16"
            />
            <h1 className="uppercase text-gray-300 font-bold text-2xl font-Inconsolata tracking-widest sm:text-4xl">
              MC Wangwena
            </h1>
          </div>

          {/* Social Button  */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={handleShowSocials}
              className="group border hover:border-2 border-goldish hover:border-card-blueish p-1 rounded-lg shadow-inner bg-card-blueish hover:bg-goldish"
            >
              <TbWorld
                size={35}
                className="text-goldish group-hover:text-card-blueish"
              />
            </button>
          </div>

          <div className="hidden lg:flex lg:justify-center">
            <ul className='flex items-center justify-center gap-8'>
                {
                    IconLinks.map((data) => {
                        return(
                            <li key={data.id}
                            className='p-1 bg-card-blueish rounded-lg hover:bg-goldish border border-goldish'
                            >
                                <IconListItem icon={data}/>
                            </li>
                        )
                    })
                }
            </ul>
          </div>
        </nav>
        <div
          className={`bg-card-blueish shadow-inner p-2 ${
            isOpen ? "translate-y-0" : "translate-y-full"
          } transition-transform duration-700 ease-in-out lg:hidden`}
        >
          <ul className="gap-8 flex items-center justify-end">
            {IconLinks.map((data) => {
              return (
                <li
                  key={data.id}
                  className="p-1 bg-card-blueish rounded-lg border border-goldish hover:bg-goldish"
                >
                    <IconListItem icon={data} />
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Navbar
