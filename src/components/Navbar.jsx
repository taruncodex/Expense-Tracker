import React from "react";
import { NavLink } from "react-router-dom";
import { House } from "lucide-react";
import { ChartPie } from "lucide-react";
import { History } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="p-6 shadow-lg">
      <div className="flex justify-around w-1/2">
        <div className="flex gap-2">
          <House />
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold opacity-65" : "text-gray-500"
            }
          >
            Dashboard
          </NavLink>
        </div>

        <div className="flex gap-2">
          <ChartPie />
          <NavLink
            to={"/analytics"}
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold opacity-65" : "text-gray-500"
            }
          >
            Analytics
          </NavLink>
        </div>

        <div className="flex gap-2">
          <History />
          <NavLink
            to={"/history"}
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold opacity-65" : "text-gray-500"
            }
          >
            History
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
