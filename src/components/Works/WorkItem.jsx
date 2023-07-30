import React from 'react';
import { Link } from 'react-router-dom';

const WorkItem = ({ project, setter }) => {
  return (
    <>
      <Link to={`/${project.project_name}`} onClick={() => setter(project)}>
        <div className="text-white ">
          <div className="relative">
            <img src={project.thumbnail} className="rounded-2xl" alt="" />
            <div className="absolute bottom-8 right-8 border border-white rounded-full p-4">
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
            </div>
          </div>

          <div className="flex justify-between gap-[3rem] mt-5">
            <h5 className="text-white font-normal text-3xl -tracking-wider">
              {project.project_name}
            </h5>
            <ul className="flex gap-4 items-center">
              {project.project_types.map((type) => (
                <li
                  key={type}
                  className="text-white border border-white rounded-full px-4 py-1"
                >
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
