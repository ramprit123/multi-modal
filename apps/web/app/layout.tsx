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

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
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
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center">
                      <SidebarTrigger className="-ml-1" />
                      <div className="h-4 w-px bg-border" />
                    </div>
                    <div className="flex items-center">
                      <ModeToggle />
                    </div>
                  </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
              </SidebarInset>
            </SidebarProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
