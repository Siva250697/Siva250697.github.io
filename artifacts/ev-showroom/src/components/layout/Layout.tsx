import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      {/* Global abstract mesh background layer */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/pattern-mesh.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Navbar />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
