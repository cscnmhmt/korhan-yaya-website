import React from 'react';
import Logo from '../Header/Logo';
import FooterNav from './FooterNav';

const Footer = () => {
  return (
    <footer className="bg-black py-11 px-20 flex justify-between items-center text-white border-t border-[#1f1f1f]">
      <div className="flex items-center gap-6">
        <Logo />
        <a href="#" className="text-base text-secondary-300">
          <span className="text-white">design</span>@korhanyaya.com
        </a>
      </div>
      <div className="text-[#414141] text-[14px]">
        © 2023 All rights reserved.
      </div>
      <FooterNav />
    </footer>
  );
};

export default Footer;
