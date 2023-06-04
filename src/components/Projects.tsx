/* eslint-disable @typescript-eslint/no-empty-interface */
import type { FC } from 'react';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
  return (
    <section className='min-h-[100vh]' id='projects'>
      <h1 className='mb-12'>
        <span className='text-5xl font-medium mb-12 text-accent-orange'>
          projects.
        </span>
      </h1>
      <div>
        <img src='public/project_forum.jpeg' alt='The Soccat Forum' width={400}/>
      </div>
    </section>
  );
};

export default Projects;
