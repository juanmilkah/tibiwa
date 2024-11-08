import AccountType from "../AccountType/AccountType";
import { Link } from "react-router-dom";
import {
  Search,
  Home,
  Info,
  Newspaper,
  Hospital,
  UserRound,
  LogIn,
  UserPlus,
} from "lucide-react";
import { useState, FormEvent } from "react";

export default function Nav() {
  const [searchQuery, setSearchQuery] = useState("");
  const User = AccountType();

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

            {User !== "Guest" && (
              <Link
                to="/about"
                className="flex items-center space-x-2 text-gray-800 hover:text-gray-600"
              >
                <Info size={20} />
                <span>About</span>
              </Link>
            )}

            <Link
              to="/news"
              className="flex items-center space-x-2 text-gray-800 hover:text-gray-600"
            >
              <Newspaper size={20} />
              <span>News</span>
            </Link>

            {User !== "Guest" && (
              <Link
                to="/hospitals"
                className="flex items-center space-x-2 text-gray-800 hover:text-gray-600"
              >
                <Hospital size={20} />
                <span>Hospitals</span>
              </Link>
            )}

            {User !== "Guest" && (
              <Link
                to="/doctors"
                className="flex items-center space-x-2 text-gray-800 hover:text-gray-600"
              >
                <UserRound size={20} />
                <span>Doctors</span>
              </Link>
            )}
          </div>

          {/* Middle - Search bar */}

          {User !== "Guest" && (
            <Link
              to="/search"
              className="flex items-center space-x-2 text-gray-800 hover:text-gray-600"
            >
              <Search size={20} />
              <span>Search</span>
            </Link>
          )}

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
