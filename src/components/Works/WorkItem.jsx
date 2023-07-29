import React from 'react';
import { Link } from 'react-router-dom';

const WorkItem = ({ project, setter }) => {
  return (
    <>
      <Link to={`/${project.project_name}`} onClick={() => setter(project)}>
        <div className='text-white border border-white rounded p-4'>
          <img src={project.thumbnail} alt='' />

          <div className='flex justify-between gap-[3rem]'>
            <h2>{project.project_name}</h2>
            <ul className='flex gap-4'>
              {project.project_types.map((type) => (
                <li key={type} className='text-primary'>
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </>
  );
};

export default WorkItem;
