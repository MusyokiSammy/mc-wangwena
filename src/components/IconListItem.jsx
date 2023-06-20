import React from 'react'
import { Link } from 'react-router-dom';

const IconListItem = ({icon}) => {
  return (
    <React.Fragment>
        <Link  to={icon.link} className="">
          <img src={icon.icon} alt={icon.name} className="w-10 h-10" />
        </Link>
    </React.Fragment>
  );
}

export default IconListItem
