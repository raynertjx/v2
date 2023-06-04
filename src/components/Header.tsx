/* eslint-disable @typescript-eslint/no-empty-interface */
import type { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  // const [isDarkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(true);
  // };

  return (
    <header className="flex justify-between pt-2">
      <h1 className="text-2xl font-semibold">Rayner.</h1>
      <div className="flex gap-16 text-xl font-medium">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
  );
};

export default Header;
