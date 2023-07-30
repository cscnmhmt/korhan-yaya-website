import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center flex-1 ml-20">
      <div className="flex gap-8 items-center">
        <NavLink to={'/'}>Work</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/'}>Contact</NavLink>
      </div>
      <NavLink className="underline underline-offset-8" to={'/'}>
        Have a project in mind?
      </NavLink>
    </nav>
  );
};

export default Navbar;
