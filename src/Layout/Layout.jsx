import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="relative w-full h-[100dvh] transition-colors duration-300 bg-white dark:bg-[#121212]">
      <Outlet />
    </div>
  );
}
