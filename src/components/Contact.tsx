/* eslint-disable @typescript-eslint/no-empty-interface */
import type { FC } from 'react';

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  return (
    <section className='min-h-[50vh]' id='contact'>
      <h1 className='mb-12'>
        <span className='text-5xl font-medium mb-12 text-accent-orange'>
          contact me.
        </span>
      </h1>
      <p className='text-2xl w-2/3'>
        My inbox is always open to explore new possibilities. Whether you have a
        question or just want to say hello, feel free to reach out. I'll do my
        best to get back to you! 😄
      </p>
      <button className='font-medium mt-8 text-xl border-2 border-lightgrey rounded-lg px-8 py-2 hover:border-accent-orange hover:text-accent-orange transition duration-300'>Let's Connect!</button>
    </section>
  );
};

export default Contact;
