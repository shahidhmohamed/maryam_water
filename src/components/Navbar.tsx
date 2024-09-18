import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">MI WATERS SHA</div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-yellow-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/project" className="text-white hover:text-yellow-500">
                Project
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-yellow-500">
                About
              </Link>
            </li>
          </ul>
          {/* Multiple Water Drops */}
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
