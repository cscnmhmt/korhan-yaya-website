import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterNav = () => {
  return (
    <nav className="flex gap-8 items-center">
      <NavLink to={'/'}>Work</NavLink>
      <span>/</span>
      <NavLink to={'/about'}>About</NavLink>
      <span>/</span>
      <NavLink to={'/'}>Contact</NavLink>
    </nav>
  );
};

export default FooterNav;
