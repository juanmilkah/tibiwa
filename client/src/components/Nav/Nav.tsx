import { Link } from "react-router-dom";
import {
  Search,
  Home,
  Newspaper,
  Hospital,
  UserRound,
  LogIn,
  UserPlus,
} from "lucide-react";
import { useState, FormEvent } from "react";

export default function Nav() {
  const [searchQuery, setSearchQuery] = useState("");

  const HandleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery("");
  };

  return (
    <nav className="bg-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and main navigation */}
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-800 hover:text-gray-600"
            >
              <Home size={20} />
              <span>Home</span>
            </Link>

            <Link
              to="/news"
              className="flex items-center space-x-2 text-gray-800 hover:text-gray-600"
            >
              <Newspaper size={20} />
              <span>News</span>
            </Link>

            <Link
              to="/hospitals"
              className="flex items-center space-x-2 text-gray-800 hover:text-gray-600"
            >
              <Hospital size={20} />
              <span>Hospitals</span>
            </Link>

            <Link
              to="/doctors"
              className="flex items-center space-x-2 text-gray-800 hover:text-gray-600"
            >
              <UserRound size={20} />
              <span>Doctors</span>
            </Link>
          </div>

          {/* Middle - Search bar */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <form onSubmit={HandleSearch}>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </div>
          </div>

          {/* Right side - Auth buttons */}
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="flex items-center space-x-2 text-gray-800 hover:text-gray-600"
            >
              <LogIn size={20} />
              <span>Login</span>
            </Link>

            <Link
              to="/signup"
              className="flex items-center space-x-2 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
            >
              <UserPlus size={20} />
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}