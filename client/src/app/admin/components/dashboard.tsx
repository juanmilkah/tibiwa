"use client";

import { ReactNode, useState } from "react";
import {
  Users as LucideUsers,
  ShieldCheck,
  UserCog,
  Stethoscope,
  WalletCards,
  UserCircle,
  Settings as SettingsIcon,
} from "lucide-react";
import Users from "./users";
import Admins from "./admins";
import Patients from "./patients";
import Doctors from "./doctors";
import Transactions from "./transactions";
import Profile from "./profile";
import Settings from "./settings";

export default function AdminDashboard() {
  const [activeComponent, setActiveComponent] = useState("users");

  const menuItems = [
    { id: "users", label: "Users", icon: LucideUsers },
    { id: "admins", label: "Admins", icon: ShieldCheck },
    { id: "patients", label: "Patients", icon: UserCog },
    { id: "doctors", label: "Doctors", icon: Stethoscope },
    { id: "transactions", label: "Transactions", icon: WalletCards },
    { id: "profile", label: "Profile", icon: UserCircle },
    { id: "settings", label: "Settings", icon: SettingsIcon },
  ];

  const components: { [key: string]: ReactNode } = {
    users: <Users />,
    admins: <Admins />,
    patients: <Patients />,
    doctors: <Doctors />,
    transactions: <Transactions />,
    profile: <Profile />,
    settings: <Settings />,
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <nav className="w-64 bg-white shadow-lg">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
        </div>
        <ul className="py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.id}
                onClick={() => setActiveComponent(item.id)}
                className={`flex items-center px-6 py-3 cursor-pointer transition-colors duration-200 ${
                  activeComponent === item.id
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          {components[activeComponent]}
        </div>
      </div>
    </div>
  );
}
