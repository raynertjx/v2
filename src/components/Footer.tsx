/* eslint-disable @typescript-eslint/no-empty-interface */
import type { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className='flex justify-center font-medium pb-6 hover:text-accent-orange transition duration-300'>
      <a href='https://github.com/raynertjx' target='_blank'>
        Designed & Built by Rayner
      </a>
    </footer>
  );
};

export default Footer;
