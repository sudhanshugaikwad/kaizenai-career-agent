import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Calendar,
  Inbox,
  Layers,
  UserCircle,
  Wallet,
  Info,
  Building2,
} from "lucide-react";
import Image from "next/image";
import Logo from "../icons/image.png";

import { usePathname } from "next/navigation";

const items = [
  {
    title: "Workspace",
    url: "/dashboard",
    icon: Layers,
  },
  {
    title: "About us",
    url: "/about",
    icon: Building2,
  },
  {
    title: "Ai Tools",
    url: "/ai-tools",
    icon: Inbox,
  },
  {
    title: "My History",
    url: "/my-history",
    icon: Calendar,
  },
  {
    title: "Billing",
    url: "/billing",
    icon: Wallet,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: UserCircle,
  },
];

export function AppSidebar() {
  const path = usePathname();
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-4">
          <Image
            src={Logo}
            alt="Kaizen Ai"
            width={80}
            height={60}
            className="w-[155px] h-auto"
          />
          <h2 className="text-sm text-gray-400 text-start mt-2">
            Sudhanshu Gaikwad :)
          </h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mt-2">
              {items.map((item, index) => (
                // <SidebarMenuItem key={item.title} className='p-2'>
                //     <SidebarMenuButton asChild className=''>
                <a
                  href={item.url}
                  key={index}
                  className={`p-2 text-lg flex gap-2 items-center
                                 hover:bg-gray-100 rounded-lg ${
                                   path.includes(item.url) && "bg-gray-200ß"
                                 }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </a>
                //     </SidebarMenuButton>
                // </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <h2 className="p-2 text-gray-400 text-sm">Copyright @Kaizen Ai</h2>
      </SidebarFooter>
    </Sidebar>
  );
}
