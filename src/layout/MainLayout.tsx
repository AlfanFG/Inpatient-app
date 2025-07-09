import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../components/ui/sidebar/sidebar";
import { AppSidebar } from "../components/ui/sidebar/app-sidebar";

export default function MainLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      {/* <Header /> */}

      <main className="min-h-screen w-full p-6">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
