import { useState } from "react";
import Alerts from "../components/Alerts/Alerts";
import Appointments from "../components/Appointments/Appointments";
import Consultation from "../components/Consultation/Consultation";
import Medication from "../components/Medication/Medication";
import Monitoring from "../components/Monitoring/Monitoring";
import ProfileManagement from "../components/ProfileManagement/ProfileManagement";

export default function UserDashboard() {
  // State to track which section is active
  const [activeSection, setActiveSection] = useState("Medication");

  // Render the active component based on the selected section
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

  return (
    <div className="flex h-auto">
      {/* List of options on the left */}
      <div className="w-auto p-4 m-4">
        <ul className="list-none ">
          <li
            className={
              activeSection === "Medication" ? "font-bold bg-blue-200" : ""
            }
          >
            <a href="#" onClick={() => setActiveSection("Medication")}>
              Medication
            </a>
          </li>
          <li
            className={
              activeSection === "Appointments" ? "font-bold bg-blue-200" : ""
            }
          >
            <a href="#" onClick={() => setActiveSection("Appointments")}>
              Appointments
            </a>
          </li>
          <li
            className={
              activeSection === "Monitoring" ? "font-bold bg-blue-200" : ""
            }
          >
            <a href="#" onClick={() => setActiveSection("Monitoring")}>
              Monitoring
            </a>
          </li>
          <li
            className={
              activeSection === "Consultation" ? "font-bold bg-blue-200" : ""
            }
          >
            <a href="#" onClick={() => setActiveSection("Consultation")}>
              Consultation
            </a>
          </li>
          <li
            className={
              activeSection === "Alerts" ? "font-bold bg-blue-200" : ""
            }
          >
            <a href="#" onClick={() => setActiveSection("Alerts")}>
              Alerts
            </a>
          </li>
          <li
            className={
              activeSection === "ProfileManagement"
                ? "font-bold bg-blue-200"
                : ""
            }
          >
            <a href="#" onClick={() => setActiveSection("ProfileManagement")}>
              My Profile
            </a>
          </li>
        </ul>
      </div>

      {/* Show the selected section on the right */}
      <div className="w-full p-4 m-4 border">{renderSection()}</div>
    </div>
  );
}
