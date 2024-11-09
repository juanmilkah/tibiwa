import { Home, Search, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="relative">
          {/* Large 404 background */}
          <div className="text-9xl font-bold text-gray-100 select-none">
            404
          </div>

          {/* Content overlaid on top */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <AlertCircle className="h-16 w-16 text-red-500 mb-4 animate-bounce" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Page Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                <Home className="h-5 w-5 mr-2" />
                Go Home
              </a>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>

        {/* Search suggestion */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-center text-gray-500 mb-4">
            <Search className="h-5 w-5 mr-2" />
            <span>Try searching for something else</span>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
