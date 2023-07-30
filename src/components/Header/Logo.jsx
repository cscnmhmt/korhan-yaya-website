import React from 'react';
import { Link } from 'react-router-dom';
import KorhanLogo from '../../assets/logo.svg'

const Logo = () => {
  return (
    <div>
      <Link to={'/'}>
        <img src={KorhanLogo} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
