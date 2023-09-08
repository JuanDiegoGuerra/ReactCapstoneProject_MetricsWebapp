import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { IoChevronBack } from 'react-icons/io5';

const Navbar = () => (
  <header className="flex justify-between p-6 items-center bg-blue-3 text-text-color">
    <NavLink className="lato text-text-color w-1/4" to="/">
      <div className="flex items-center gap-1">
        <IoChevronBack className="text-base" />
        <p>See all</p>
      </div>
    </NavLink>
    <h1 className="font-bold lato text-xl">React_Capstone-Crypto_Watcher</h1>
    <div className="flex gap-2 w-1/4 justify-end">
      <FaMicrophone />
      <IoMdSettings />
    </div>
  </header>
);

export default Navbar;
