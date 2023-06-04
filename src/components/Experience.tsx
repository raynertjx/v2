/* eslint-disable @typescript-eslint/no-empty-interface */
import type { FC } from 'react';

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = () => {
  return (
    <section className='min-h-[100vh]' id='experience'>
      {/* <span className='inline-block text-5xl pb-6'>💼</span> */}
      <h1 className='mb-12'>
        <span className='text-5xl font-medium mb-12 text-accent-orange'>
          experience.
        </span>
      </h1>
      <div className='flex flex-col gap-4'>
        <div className='text-3xl font-medium'>May 2023 - Present</div>
        <div className='text-4xl font-medium'>
          Software Engineer Intern @{' '}
          <a
            className='before:scale-x-100 before:origin-left relative before:w-full before:h-0.5 before:transition-transform before:duration-300 before:bg-black dark:before:bg-[#dfdfdf] before:absolute before:left-0 before:bottom-0 hover:before:scale-x-0 hover:before:origin-right'
            href='https://kabam.ai/'
            target='_blank'
          >
            KABAM Robotics
          </a>
        </div>
        <ul className='text-2xl flex flex-col gap-3 w-4/5'>
          <li>
            &#62; &ensp;Developed and integrated frontend features into the
            Smart+ web application to enable seamless interaction with robots.
          </li>
          <li>
            &#62; &ensp;Worked closely with designers to implement responsive
            UI/UX designs for optimal user experience on various platforms.
          </li>
          <li>
            &#62; &ensp;Collaborated with cross-functional teams to ensure
            smooth integration and continuous improvement of the web
            application.
          </li>
          <li>
            &#62; &ensp;Implemented RESTful APIs to facilitate efficient data
            storage and retrieval for robot interactions.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
