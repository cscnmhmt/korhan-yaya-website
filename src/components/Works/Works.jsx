import React from 'react';
import WorkItem from './WorkItem';
import { Link } from 'react-router-dom';

const Works = ({ projects, setter }) => {
  return (
    <div className="bg-black px-20 pt-32 pb-10">
      <div className="flex justify-between items-center">
        <h3 className="text-white font-heading text-6xl font-medium leading-1 mb-3">
          Cases
        </h3>
        <Link className="bg-white text-base font-medium -tracking-wide px-6 flex items-center justify-center gap-3 rounded-full  h-9">
          All cases{' '}
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.32692 12.047L0.994324 10.7149L9.01741 2.69185H2.87361L2.89346 0.852783H12.1692V10.1484H10.3296L10.3398 4.02394L2.32692 12.047Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>
      <div className="flex gap-8">
        {projects.map((project) => (
          <WorkItem key={project.id} project={project} setter={setter} />
        ))}
      </div>
    </div>
  );
};

export default Works;
