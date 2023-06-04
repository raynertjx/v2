/* eslint-disable @typescript-eslint/no-empty-interface */
import type { FC } from 'react';
import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [isDarkMode, setDarkMode] = useState(
    localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches),
  );

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    if (localStorage.theme === 'light') {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    } else {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className='flex justify-between pt-8'>
      <h1 className='text-2xl font-semibold'><a href="/">Rayner.</a></h1>
      <div className='flex gap-14 text-xl font-medium'>
        <a href='#about'>about</a>
        <a href='#experience'>experience</a>
        <a href='#projects'>projects</a>
        <a href='#contact'>contact</a>
        <DarkModeSwitch
          style={{ marginBottom: '2rem' }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={30}
          sunColor='rgb(249, 115, 22)'
          moonColor='rgb(87, 156, 216)'
        />
      </div>
    </header>
  );
};

export default Header;
