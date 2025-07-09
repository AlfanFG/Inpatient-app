import { NavLink } from "react-router-dom";
import menus from "../../../data/menus";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from "./sidebar";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="py-6">
        <p className="text-xl font-semibold text-center">Inpatient</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menus.map((menu) => (
            // <SidebarMenuItem key={menu.id}>
            <NavLink
              key={menu.id}
              className={({ isActive }: { isActive: boolean }) =>
                cn(
                  isActive ? "font-semibold bg-slate-100" : undefined,
                  "!w-full p-2 hover:bg-slate-100"
                )
              }
              to={menu.link}
              end
            >
              {menu.title}
            </NavLink>
            // </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
