"use client";

import convex from "@/lib/convex";
import { useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";
import { UserSync } from "./user-sync";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        enableColorScheme
      >
        <UserSync />
        {children}
      </NextThemesProvider>
    </ConvexProviderWithClerk>
  );
}
