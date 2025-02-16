"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { DrawerContext } from "../ui/drawer";

interface Props {
  children: React.ReactNode;
  href: string;
}

function MenuItem({ children, href }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;
  // 🌻
  const { onClose } = useContext(DrawerContext);
  return (
    <Link
      href={href}
      onClick={onClose}
      // here, the block property make the Link component to have a full width;
      className={cn(
        "block p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-lg text-muted-foreground hover:text-foreground",
        isActive &&
          "bg-primary hover:bg-primary hover:text-foreground dark:hover:bg-primary text-white"
      )}
    >
      {children}
    </Link>
  );
}

export default MenuItem;
