"use client"; // Drawer need to handle event

import MenuTitle from "@/components/dashboard/menu-title";
import MainMenu from "../../components/dashboard/main-menu";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

// to implement responsive
// 1️⃣ add 'hidden md:flex' to MainMenu component
// 2️⃣ add a div for the mobile menu

function DashboardLayout({ children }: { children: React.ReactNode }) {
  // 🌻🌻 why use this hook?
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // 🌻 previous is: grid grid-cols-[250px_1fr], in the small screen, we don't need grid, so add 'md:' prefix
    <div className="md:grid md:grid-cols-[250px_1fr] h-screen w-full">
      {/* 🌻 flex and hidden: two inverse property, used to hide and display */}
      <MainMenu className="hidden md:flex" />
      {/* 🌻 bg-background and border-border: the background and border are the variable define in the globals.css */}
      {/*  flex: used to display the whole part
      justify-between: let the title and toggle icon in the two end
      */}
      {!isDesktop && (
        <div className="p-4 flex justify-between sticky top-0 left-0 bg-background border-b border-border ">
          <MenuTitle />
          {/* 🌻note: before we click the hamburger icon, all the content is hidden */}
          <Drawer
            direction="right"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            onOpenChange={(open) => setMobileMenuOpen(open)}
          >
            {/* trigger the Drawer */}
            <DrawerTrigger>
              {/* menu icon for small screen */}
              <MenuIcon />
            </DrawerTrigger>
            {/* DrawerContent rendered as a Portal */}
            <DrawerContent>
              {/* DrawerTitle and DrawerDescription are for screen reader */}
              {/* sr-only is a TailWind CSS internal class, it will hidden the content visuall and don't affect screen reader in the meantime */}
              <DrawerTitle className="sr-only">mobile menu</DrawerTitle>
              <DrawerDescription className="sr-only">
                this is a menu for mobile device
              </DrawerDescription>
              <MainMenu />
            </DrawerContent>
          </Drawer>
        </div>
      )}
      <div className="py-2 px-4">
        <h1 className="pb-4">Welcome back, Kerry!</h1>
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
