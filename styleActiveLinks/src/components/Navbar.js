import React from 'react'
import { NavData } from "../data/NavData";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeLink = " border-b-4 px-4 border-blue-500 text-blue-500 font-bold";
    const normalLink = " ";
  return (
    <React.Fragment>
    <section>
      <div className='bg-white w-full text-2xl h-20 grid grid-cols-4 items-center'>
          {
              NavData.map((item,index) => {
                  return(
                      <div key={index}>
                          <div className='centered flex-col text-gray-500 uppercase'>
                              <NavLink to={item.path}
                                className={({ isActive }) =>
                                isActive ? activeLink : normalLink
                              }
                              >
                              <span className='centered'>{item.icon }</span>
                              <span>{item.title }</span>
                              </NavLink>
 
                          </div>
                      </div>
                  )
              })
          }
      </div>
    </section>
  </React.Fragment>
  )
}

export default Navbar