import { Providers } from "@/components/providers";
import { AppSidebar, SidebarProvider } from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarInset } from "@workspace/ui/components/sidebar";
import "@workspace/ui/globals.css";
import { Header } from "./_components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <Providers>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <Header />
            <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
          </SidebarInset>
        </SidebarProvider>
      </Providers>
    </ThemeProvider>
  );
}
