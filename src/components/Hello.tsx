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
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500 font-bold'>
            Rayner Toh.
          </span>
        </div>
      </div>
      <div className='text-5xl font-medium text-gray-700'>
        I like to build things for the web.
      </div>
      <div className='text-2xl text-gray-600'>
        Currently working as a Software Engineer Intern at KABAM Robotics.
      </div>
    </div>
  );
};

export default Hello;
