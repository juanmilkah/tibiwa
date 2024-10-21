import { MockResultsData as resultsData } from "./components/MockResultsData";
import { useState } from "react";
import {
  Search as SearchIcon,
  User,
  Hospital,
  Pill,
  Store,
  Filter,
  X,
} from "lucide-react";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<
    "all" | "doctors" | "hospitals" | "medications" | "pharmacies"
  >("all");
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const categories = [
    { id: "all", name: "All", icon: SearchIcon },
    { id: "doctors", name: "Doctors", icon: User },
    { id: "hospitals", name: "Hospitals", icon: Hospital },
    { id: "medications", name: "Medications", icon: Pill },
    { id: "pharmacies", name: "Pharmacies", icon: Store },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Search Header */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for doctors, hospitals, medications..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              <Filter className="h-5 w-5" />
            </button>
          </div>

          {/* Filter Section */}
          {showFilters && (
            <div className="mt-4 p-4 border-t border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-700">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option>Location</option>
                    <option>Within 5 miles</option>
                    <option>Within 10 miles</option>
                    <option>Within 20 miles</option>
                  </select>
                  <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option>Rating</option>
                    <option>4+ Stars</option>
                    <option>3+ Stars</option>
                    <option>2+ Stars</option>
                  </select>
                  <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option>Availability</option>
                    <option>Available Today</option>
                    <option>Available This Week</option>
                    <option>Available This Month</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Category Tabs */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {categories.map(({ id, name, icon: Icon }) => (
              <button
                key={id}
                onClick={() =>
                  setActiveCategory(
                    id as
                      | "all"
                      | "doctors"
                      | "pharmacies"
                      | "hospitals"
                      | "medications"
                  )
                } // Set the active category on click
                className={`
                flex items-center px-4 py-2 rounded-full
                ${
                  activeCategory === id
                    ? "bg-blue-100 text-blue-600"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }
                transition-colors duration-200
              `}
              >
                <Icon className="h-4 w-4 mr-2" />
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Dynamically display results based on the active category */}
          {activeCategory === "all"
            ? Object.entries(resultsData).flatMap(([category, results]) =>
                results.map((result, index) => (
                  <div
                    key={`${category}-${index}`}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
                  >
                    <h3 className="font-medium text-lg text-gray-900 mb-2">
                      {result}
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p>Sample detail 1 for {result}</p>
                      <p>Sample detail 2 for {result}</p>
                      <p>Sample detail 3 for {result}</p>
                    </div>
                    <button className="mt-4 text-blue-500 hover:text-blue-600 text-sm">
                      View all details →
                    </button>
                  </div>
                ))
              )
            : resultsData[activeCategory]?.map((result, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
                >
                  <h3 className="font-medium text-lg text-gray-900 mb-2">
                    {result}
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Sample detail 1 for {result}</p>
                    <p>Sample detail 2 for {result}</p>
                    <p>Sample detail 3 for {result}</p>
                  </div>
                  <button className="mt-4 text-blue-500 hover:text-blue-600 text-sm">
                    View all details →
                  </button>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
