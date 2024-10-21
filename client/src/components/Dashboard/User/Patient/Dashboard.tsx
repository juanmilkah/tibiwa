import Appointments from "../components/Appointments/Appointments";
import Alerts from "../components/Alerts/Alerts";
import Consultation from "../components/Consultation/Consultation";
import Monitoring from "../components/Monitoring/Monitoring";
import ProfileManagement from "../components/ProfileManagement/ProfileManagement";
import Medication from "../components/Medication/Medication";

import { useState } from "react";
import {
  Pill,
  Calendar,
  ActivitySquare,
  MessageCircle,
  Bell,
  User,
  MenuIcon,
  X,
} from "lucide-react";

const navigationItems = [
  { id: "Medication", label: "Medication", icon: Pill },
  { id: "Appointments", label: "Appointments", icon: Calendar },
  { id: "Monitoring", label: "Monitoring", icon: ActivitySquare },
  { id: "Consultation", label: "Consultation", icon: MessageCircle },
  { id: "Alerts", label: "Alerts", icon: Bell },
  { id: "ProfileManagement", label: "My Profile", icon: User },
];

export default function UserDashboard() {
  const [activeSection, setActiveSection] = useState("Medication");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const renderSection = () => {
    switch (activeSection) {
      case "Medication":
        return <Medication />;
      case "Appointments":
        return <Appointments />;
      case "Monitoring":
        return <Monitoring />;
      case "Consultation":
        return <Consultation />;
      case "Alerts":
        return <Alerts />;
      case "ProfileManagement":
        return <ProfileManagement />;
      default:
        return <Medication />;
    }
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <div className="fixed z-20 lg:hidden top-4 left-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-600" />
          ) : (
            <MenuIcon className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Navigation Sidebar */}
        <nav
          className={`
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          fixed lg:relative
          top-0 left-0
          w-64 h-full
          bg-white shadow-lg
          transition-transform duration-300 ease-in-out
          z-10 lg:z-0
        `}
        >
          <div className="p-6">
            <h2 className="mb-6 text-xl font-bold text-gray-800">Dashboard</h2>
            <ul className="space-y-2">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`
                        w-full px-4 py-3 rounded-lg
                        flex items-center gap-3
                        transition-colors duration-200
                        ${
                          activeSection === item.id
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-600 hover:bg-gray-50"
                        }
                      `}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-3 lg:p-8">
          <div className="mx-auto bg-white rounded-lg max-w-7xl shadow-sm">
            {renderSection()}
          </div>
        </main>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-0 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
