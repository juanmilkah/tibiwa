import React, { useState } from "react";
import { Save, User, Phone, Mail, Link } from "lucide-react"; // Lucide icons

// Define the User type
export type User = {
  id: string;
  name: string;
  email?: string;
  phonenumber?: number;
  isProvider: boolean;
  avatarUrl: string;
};

// The ProfileManagement component
export default function ProfileManagement() {
  // Initial user data (this could come from props or a backend call)
  const [user, setUser] = useState<User>({
    id: "1",
    name: "John Doe",
    email: "johndoe@example.com",
    phonenumber: 1234567890,
    isProvider: false,
    avatarUrl: "https://example.com/avatar.jpg",
  });

  // Handle profile data change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated:", user);
    // Add the API call or any further logic for saving the updated profile
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-6 text-center">
        Manage Your Profile
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            <User className="inline-block mr-2" />
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            <Mail className="inline-block mr-2" />
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email || ""}
            onChange={handleChange}
            className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="phonenumber"
            className="block text-sm font-medium text-gray-700"
          >
            <Phone className="inline-block mr-2" />
            Phone Number
          </label>
          <input
            type="tel"
            name="phonenumber"
            id="phonenumber"
            value={user.phonenumber?.toString() || ""}
            onChange={handleChange}
            className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="avatarUrl"
            className="block text-sm font-medium text-gray-700"
          >
            <Link className="inline-block mr-2" />
            Avatar
          </label>
          <input
            type="file"
            name="avatarUrl"
            id="avatarUrl"
            onChange={handleChange}
            className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            name="isProvider"
            id="isProvider"
            checked={user.isProvider}
            onChange={(e) =>
              setUser((prevUser) => ({
                ...prevUser,
                isProvider: e.target.checked,
              }))
            }
            className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label
            htmlFor="isProvider"
            className="text-sm font-medium text-gray-700"
          >
            Is Provider
          </label>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center py-2.5 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <Save className="mr-2" />
          Save Profile
        </button>
      </form>
    </div>
  );
}
