/* eslint-disable @typescript-eslint/no-empty-interface */
import type { FC } from 'react';

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <section className='min-h-[100vh]' id='about'>
      {/* <span className='inline-block text-5xl pb-6'>🧑🏻‍💻</span> */}
      <h1 className='mb-12'>
        <span className='text-5xl font-medium mb-12 text-accent-orange'>
          about me.
        </span>
      </h1>
      <div className='text-2xl w-4/6 flex flex-col gap-12'>
        <p>
          Hello! I'm Rayner, a Year 2 Computer Science undergraduate at the
          National University of Singapore. I'm passionate about building
          beautiful software that enrich the lives of others.
        </p>
        <p>
          I love delving into the world of full-stack web development, where I
          explore new frameworks and technologies. I embrace such opportunities
          to expand my horizons and continuously improve the quality of what I
          can deliver.
        </p>
        <p>
          When I'm not immersed in lines of code, you can find me bouldering,
          brewing a cup of coffee or reading a good book.
        </p>
      </div>
    </section>
  );
};

export default About;
