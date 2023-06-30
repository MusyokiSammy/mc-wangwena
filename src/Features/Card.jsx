import React from 'react'
import Icon from '../images/servicesIconGold.png'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import logo from "../images/WangwenaLogo.png"

const CardHover = styled.div`
    position: relative;
    overflow: hidden;
    height: 24rem;
    width: 20rem;
    z-index: 1;
    cursor: pointer;

    &::before {
        content:'';
        position: absolute;
        color: blue;
        height: 100%;
        width: 100%;
        top: 100%;
        left:0%;
        background-color: gold;
        opacity: 70%;
        transition: top 0.8s ease;
        z-index:-1;
    }

    &:hover::before {
        top: 0;
        
    }

    @media (max-width: 640px) {
      height: 18rem;
      width: 15rem;
    }
`; 


const Card = ({content}) => {
  return (
    <React.Fragment>
      <CardHover
      key={content.id}
        style={{
          WebkitBoxReflect:
            "below 10px linear-gradient(to bottom, rgb(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4))",
        }}
        className="group shadow-xl flex-shrink-0 bg-card-blueish rounded-xl border-b-4 border-goldish hover:border-card-blueish font-Inconsolata flex"
      >
        <img
          src={logo}
          alt="mc Wangwena Logo"
          className="absolute h-full w-full opacity-5 group-hover:opacity-20"
        />
        <div className="flex flex-col items-start justify-evenly p-4">
          <span className="p-1 bg-blueish shadow-2xl rounded-lg">
            <img src={Icon} alt="Icon" size={32} />
          </span>
          <h2 className="group-hover:z-10 text-2xl sm:text-3xl text-dark-goldish group-hover:text-card-blueish font-extrabold">
            {content.name}
          </h2>
          <Link to="#" className="text-gray-50 relative">
            <span className="group-hover:z-10 text-xl md:text-2xl font-bold">
              See More...
            </span>
          </Link>
        </div>
      </CardHover>
    </React.Fragment>
  );
}

export default Card
