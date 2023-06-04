/* eslint-disable @typescript-eslint/no-empty-interface */
import type { FC } from 'react';

interface HelloProps {}

const Hello: FC<HelloProps> = () => {
  return (
    <div className='min-h-[95vh] flex flex-col justify-center gap-4'>
      <div className='font-semibold'>
        <span className='inline-block animate-wave text-5xl pb-6'>👋🏼</span>
        <div className='text-3xl'>Hi there! My name is</div>
        <div className='-translate-x-1 text-8xl'>
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500 font-bold`}
          >
            Rayner Toh.
          </span>
        </div>
      </div>
      <div className='text-5xl font-medium'>
        I like to build things for the web.
      </div>
      <div className='text-2xl'>
        Currently working as a Software Engineer Intern at{' '}
        <a
          className='before:scale-x-100 before:origin-left relative before:w-full before:h-0.5 before:transition-transform before:duration-300 before:bg-black dark:before:bg-[#dfdfdf] before:absolute before:left-0 before:bottom-0 hover:before:scale-x-0 hover:before:origin-right'
          href='https://kabam.ai/'
          target='_blank'
        >
          KABAM Robotics
        </a>
        .
      </div>
    </div>
  );
};

export default Hello;
