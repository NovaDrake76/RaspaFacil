import { Link } from "react-router-dom";
import { BiKey } from "react-icons/bi";

const Navbar = ({ keys }) => {
  return (
    <nav className="w-screen h-14 bg-[#4979F5] flex items-center justify-between pl-4 pr-4">
      <Link to="/">
        <div className="text-white font-bold">RaspaLucra</div>
      </Link>
      <div className="flex items-center gap-4 text-white">
        <Link to="/scratch">Raspadinhas</Link>
        <div className="border border-gray-100 p-2 rounded flex items-center justify-between text-white gap-2">
          <BiKey /> {keys}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
