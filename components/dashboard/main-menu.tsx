"use client";

import MenuTitle from "./menu-title";
import MenuItem from "./menu-item";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LightDarkToggle } from "@/components/ui/light-dark-toggle";

interface Props {
  className?: string;
}

function MainMenu({ className }: Props) {
  return (
    <nav
      className={cn(
        `md:bg-muted overflow-auto p-4 flex flex-col h-full`,
        className
      )}
    >
      {/* 'hidden md:block' means in the small screen, it will be hidden */}
      <header className="  border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </header>
      <ul className="py-4 grow">
        <MenuItem href="/dashboard">My dashboard</MenuItem>
        <MenuItem href="/dashboard/teams">Teams</MenuItem>
        <MenuItem href="/dashboard/employees">Employees</MenuItem>
        <MenuItem href="/dashboard/account">Account</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </ul>
      <footer className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="bg-violet-400 dark:bg-violet-800">
            K
          </AvatarFallback>
        </Avatar>
        <Link href="/" className="hover:underline">
          Logout
        </Link>
        <LightDarkToggle className="ml-auto" />
      </footer>
    </nav>
  );
}

export default MainMenu;
