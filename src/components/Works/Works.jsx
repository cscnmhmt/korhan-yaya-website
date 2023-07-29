import React from 'react';
import WorkItem from './WorkItem';

const Works = ({ projects, setter }) => {
  return (
    <div className='bg-black p-4 pb-10'>
      <h1 className='text-primary font-heading text-5xl font-semibold leading-1 mb-3'>
        Projects
      </h1>
      <div className='flex gap-6'>
        {projects.map((project) => (
          <WorkItem key={project.id} project={project} setter={setter} />
        ))}
      </div>
    </div>
  );
};

export default Works;
