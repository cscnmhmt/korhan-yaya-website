import React from 'react';

const CallToAction = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center gap-24 py-60  border-t border-[#1f1f1f]">
      <h2 className="font-black uppercase text-white text-9xl max-w-6xl mx-auto text-center leading-tight">
        TELL ME ABOUT YOUR NEXT{' '}
        <span className="bg-gradient-to-r from-primary to-[#F13A3A] bg-clip-text text-transparent">
          PROJECTS
        </span>
      </h2>
      <div className="relative w-72 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-primary  to-[#F13A3A] p-[2px]">
        <div className="absolute w-24 h-12 bg-gradient-to-r from-primary  to-[#F13A3A] blur-3xl"></div>
        <a
          href="#"
          className="text-white z-10 text-[21px] rounded-full flex justify-center items-center gap-4 w-full h-full bg-black"
        >
          Contact Me
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.32692 12.047L0.994324 10.7149L9.01741 2.69185H2.87361L2.89346 0.852783H12.1692V10.1484H10.3296L10.3398 4.02394L2.32692 12.047Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
