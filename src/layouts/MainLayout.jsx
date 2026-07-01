import { Outlet } from "react-router-dom";

import Navbar from "@/components/layout/Navbar";
import AppSidebar from "@/components/layout/AppSidebar";

import { SidebarProvider } from "@/components/ui/sidebar";

function MainLayout() {
  return (
    <SidebarProvider>

      <div className="flex w-full min-h-screen">

        <AppSidebar />

        <main className="flex-1 bg-slate-50 overflow-x-hidden">

          <Navbar />

          <div className="p-4 md:p-6 lg:p-8">

            <Outlet />

          </div>

        </main>

      </div>

    </SidebarProvider>
  );
}

export default MainLayout;