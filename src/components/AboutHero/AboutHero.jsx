import React from 'react';
import KorhanYayaImg from '../../assets/korhan-yaya-about.png';
import KorhanYayaText from '../../assets/korhan-yaya-text.svg';

const AboutHero = () => {
  return (
    <div className="bg-black py-36 text-white pt-52">
      <div className="mx-auto max-w-5xl flex flex-col items-center text-center">
        <h2 className="font-heading text-5xl font-extrabold mb-4">Hi, I'm</h2>
        <img src={KorhanYayaText} alt="" />
        <img
          src={KorhanYayaImg}
          alt="korhan yaya"
          width={600}
          className="relative -top-20 z-10"
        />
        <p className="text-5xl font-normal text-secondary-100 leading-none">
          I’m <span className="text-white">Expert interface designer</span>{' '}
          working at Digital agency
        </p>
        <p className="text-[20px] text-[#A8A8A8] leading-9 mt-14">
          Interface design plays an important role in making life easier in the
          digital world. As a designer specializing in this field, I work to
          create user-friendly and modern interfaces. On this website, I wanted
          to show you some of the design projects I have worked on in the past.
          Contact me to have your dream interface design. You can pass.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
