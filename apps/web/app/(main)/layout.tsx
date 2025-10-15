import { Geist, Geist_Mono } from "next/font/google";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import {
  AppSidebar,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/Sidebar";
import { SidebarInset } from "@workspace/ui/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@workspace/ui/components/ModeToggle";
import { Header } from "./_components/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <SidebarProvider>
              <AppSidebar />
              <SidebarInset>
               <Header/>
                <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
              </SidebarInset>
            </SidebarProvider>
          </Providers>
        </ThemeProvider>
  );
}
