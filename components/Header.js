import ImageIcon from './ImageIcon';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 border-b border-b-primary/10 bg-white font-leiko">
      <nav className="mx-auto flex h-[120px] max-w-7xl items-center justify-center space-x-[78px] text-primary">
        <ul className="flex h-full items-center space-x-[78px]">
          <li className="group relative h-full">
            <a className="flex h-full items-center" href="#">
              Navigation 1
            </a>
            <span className="absolute bottom-0 left-0 h-[5px] w-0 bg-secondary transition-width duration-200 group-hover:w-full"></span>
          </li>
          <li className="group relative h-full">
            <a className="flex h-full items-center" href="#">
              Navigation 2
            </a>
            <span className="absolute bottom-0 left-0 hidden h-[5px] w-full bg-secondary group-hover:block"></span>
          </li>
          <li className="group relative h-full">
            <a className="relative flex h-full items-center" href="#">
              Navigation 3
              <span className="absolute bottom-0 left-0 h-[5px] w-0 bg-secondary transition-width duration-200 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
        <a href="#" className="grid h-3.75 w-8.75 place-items-center bg-primary-light">
          <ImageIcon />
        </a>
        <ul className="flex h-full items-center space-x-[78px]">
          <li className="group relative h-full">
            <a className="flex h-full items-center" href="#">
              Navigation 4
            </a>
            <span className="absolute bottom-0 left-0 h-[5px] w-0 bg-secondary transition-width duration-200 group-hover:w-full"></span>
          </li>
          <li className="group relative h-full">
            <a className="flex h-full items-center" href="#">
              Navigation 5
            </a>
            <span className="absolute bottom-0 left-0 h-[5px] w-0 bg-secondary transition-width duration-200 group-hover:w-full"></span>
          </li>
          <li className="group relative h-full">
            <a className="flex h-full items-center" href="#">
              Navigation 6
            </a>
            <span className="absolute bottom-0 left-0 h-[5px] w-0 bg-secondary transition-width duration-200 group-hover:w-full"></span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
