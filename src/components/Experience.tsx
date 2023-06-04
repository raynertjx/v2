import type { FC } from 'react';
import { TbCaretRight } from 'react-icons/tb';
import Card from './Card.astro';

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = ({}) => {
  return (
    <section className='min-h-[100vh]' id='experience'>
      <span className='inline-block text-5xl pb-6'>💼</span>
      <h1 className='mb-12'>
        <span className='text-5xl font-medium mb-12 text-transparent bg-clip-text bg-gradient-to-l from-orange-600 to-amber-500'>
          Experience
        </span>
      </h1>
      <div className='flex flex-col gap-4'>
        <div className='text-gray-700 text-3xl font-medium'>
          May 2023 - Present
        </div>
        <div className='text-4xl font-medium'>
          Software Engineer Intern @ KABAM Robotics
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
            smooth integration and continuous improvement of the web app.
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
