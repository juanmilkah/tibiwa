import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="p-4 bg-sky-500">
      <ul className="flex space-x-4">
        <li>
          <Link to="/home" className="text-white hover:text-sky-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/news" className="text-white hover:text-sky-200">
            News
          </Link>
        </li>
        <li>
          <Link to="/search" className="text-white hover:text-sky-200">
            Search
          </Link>
        </li>
        <li>
          <Link to="/hospitals" className="text-white hover:text-sky-200">
            Hospitals
          </Link>
        </li>
        <li>
          <Link to="/doctors" className="text-white hover:text-sky-200">
            Doctors
          </Link>
        </li>
        <li>
          <Link to="/login" className="text-white hover:text-sky-200">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="text-white hover:text-sky-200">
            Sign_Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}
