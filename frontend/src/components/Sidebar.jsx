import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  UserPlus,
  Users,
  FilePlus,
  ClipboardList,
  CheckSquare,
  Settings,
  BarChart2,
  Box
} from "lucide-react";

const Sidebar = ({ role }) => {
  const location = useLocation();

  const menus = {
    counselor: [
      { path: "/counselor", label: "Dashboard", icon: <Home size={18} /> },
      { path: "/counselor/createPatient", label: "Create Patient", icon: <UserPlus size={18} /> },
      { path: "/counselor/viewPatients", label: "View Patients", icon: <Users size={18} /> },
      { path: "/counselor/addPrescription", label: "Add Prescription", icon: <FilePlus size={18} /> },
      { path: "/counselor/trackAdherence", label: "Track Adherence", icon: <ClipboardList size={18} /> },
      { path: "/counselor/reviewTreatment", label: "Review Treatment", icon: <CheckSquare size={18} /> },
    ],
    admin: [
      { path: "/admin", label: "Manage Counselors", icon: <Settings size={18} /> },
      { path: "/admin/viewPatients", label: "View Patients", icon: <Users size={18} /> },
      { path: "/admin/adherenceReports", label: "Adherence Reports", icon: <BarChart2 size={18} /> },
      { path: "/admin/otherTasks", label: "Other Tasks", icon: <Box size={18} /> },
    ],
  };

  const menuItems = menus[role] || [];
  const bgColor = "bg-teal-700";
  const activeColor = "bg-blue-800";

  return (
    <aside className={`w-64 h-screen ${bgColor} text-white flex flex-col p-4 shadow-lg`}>
      <ul className="flex flex-col gap-3">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li
              key={item.path}
              className={`p-3 rounded cursor-pointer transition-all duration-300 flex items-center gap-3 ${
                isActive ? activeColor : "hover:bg-teal-600"
              }`}
            >
              <Link to={item.path} className="flex items-center gap-3">
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
