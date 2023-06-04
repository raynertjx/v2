import type { FC } from 'react';
import Python from './public/icons/python.svg';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <section className='min-h-[100vh]' id='projects'>
      <h1 className='mb-12'>
        <span className='text-5xl font-medium mb-12 text-transparent bg-clip-text bg-gradient-to-l from-orange-600 to-amber-500'>
          Projects
        </span>
      </h1>
      {/* <img src={Python} alt='xd' /> */}
    </section>
  );
};

export default Projects;
