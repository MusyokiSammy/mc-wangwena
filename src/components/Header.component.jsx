import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/WangwenaLogo.png';
import IconListItem from './IconListItem';
import { IconLinks } from '../Data';

const Header = () => {
  return (
    <React.Fragment>
      <header className='bg-blueish'>
        <nav className='flex items-center justify-between mx-auto max-w-[1560px] py-6'>
            <div className='flex items-center justify-center gap-2'>
                <img src={logo} alt="MC Wangwena Logo" className=' h-16 w-16'/>
                <h1 className='text-3xl uppercase font-bold text-gray-50'>MC Wangwena</h1>
            </div>
            <div>
                <ul className='flex items-center justify-center gap-10'>
                    {
                        IconLinks.map((data) => {
                            return (
                              <li
                                key={data.id}
                                className="hover:bg-goldish bg-card-blueish shadow-2xl hover:shadow-inner rounded-lg bg-opacity-50 w-12 h-12 flex items-center justify-center"
                              >
                                <IconListItem icon={data} />
                              </li>
                            );
                        })
                    }
                </ul>
            </div>
        </nav>
      </header>
    </React.Fragment>
  )
}

export default Header
