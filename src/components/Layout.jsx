import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col-reverse md:flex-row">
        <Sidebar />
        <main className="w-full h-[calc(100vh-133px)] md:h-[calc(100vh-75px)] overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
