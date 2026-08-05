import SocketContextProvider from "@/contexts/socketio";
import Preloader from "./preloader";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "./ui/toaster";
import { TooltipProvider } from "./ui/tooltip";
import SmoothScroll from "./smooth-scroll";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
      <Preloader>
        <SmoothScroll>
          <SocketContextProvider>
            <TooltipProvider>
              {children}
            </TooltipProvider>
            <Toaster />
          </SocketContextProvider>
        </SmoothScroll>
      </Preloader>
    </ThemeProvider>
  );
};
