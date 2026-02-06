import React from "react";
import { Link } from "react-router-dom";
import { House } from "lucide-react";
import { ChartPie } from "lucide-react";
import { History } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="p-6 shadow-lg w-3/2">
      <div className="flex justify-around w-1/3">
        <div className="flex gap-2">
          <House />
          <Link to={"/"}>Dashboard</Link>
        </div>
        <div className="flex gap-2">
          <ChartPie />
          <Link to={"/analytics"}>Analytics</Link>
        </div>
        <div className="flex gap-2">
          <History />
          <Link to={"/history"}>History</Link>
        </div>
      </div>
    </nav>
  );
};
