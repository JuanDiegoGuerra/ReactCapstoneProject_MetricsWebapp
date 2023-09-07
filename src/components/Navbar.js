import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header className="flex px-16 items-center py-4 mb-8 border border-b-2">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/coin">Coin</NavLink>
  </header>
);

export default Navbar;
