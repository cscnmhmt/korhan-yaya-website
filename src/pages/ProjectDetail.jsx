import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import CallToAction from '../components/CTA/CallToAction';
import Footer from '../components/Footer/Footer';

const ProjectDetail = ({ clickedProject }) => {
  const images = clickedProject.project_images;
  const types = clickedProject.project_types;

  return (
    <div className="bg-black pt-28">
      <Header />
      <div className="border-t border-[#1f1f1f] mt-8">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="my-5 text-5xl text-white font-heading font-semibold">
            {clickedProject.project_name}
          </h1>
          <div className="flex gap-4">
            {types.map((type, index) => (
              <span
                className="bg-primary bg-opacity-20 px-3 py-1 rounded text-yellow-400"
                key={index}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
        {images.map((image, index) => (
          <img
            className="max-w-7xl mx-auto mb-16 rounded-md"
            key={index}
            src={image}
            alt=""
          />
        ))}
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default ProjectDetail;
