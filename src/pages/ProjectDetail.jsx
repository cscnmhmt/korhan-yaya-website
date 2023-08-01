import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import CallToAction from '../components/CTA/CallToAction';
import Footer from '../components/Footer/Footer';

const ProjectDetail = ({ clickedProject }) => {
  const images = clickedProject.project_images;
  const types = clickedProject.project_types;

  return (
    <div className="bg-black p-24">
      <Header />
      <div className="mt-16">
        <Link to={'/'} className="bg-slate-200 p-3 rounded font-bold">
          {'<'} Back to home
        </Link>
        <h1 className="my-5 text-5xl font-heading font-semibold">
          {clickedProject.project_name}
        </h1>
        <div className="flex gap-4 mb-5">
          {types.map((type, index) => (
            <span
              className="bg-primary bg-opacity-20 px-3 py-1 rounded"
              key={index}
            >
              {type}
            </span>
          ))}
        </div>
        {images.map((image, index) => (
          <img className="mb-4" key={index} src={image} alt="" />
        ))}
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default ProjectDetail;
