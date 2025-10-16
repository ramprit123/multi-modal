import { SidebarTrigger } from "@/components/Sidebar";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@workspace/ui/components/ModeToggle";
import React from "react";

export const Header = () => {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <SidebarTrigger className="-ml-1" />
          <div className="h-4 w-px bg-border" />
        </div>
        <div className="flex items-center gap-x-3">
          <ModeToggle />
          <UserButton
            appearance={{
              elements: { userButtonAvatarBox: { width: 36, height: 36 } },
            }}
          />
        </div>
      </div>
    </header>
  );
};
