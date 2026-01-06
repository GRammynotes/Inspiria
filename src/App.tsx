import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SplashCursor, ClickSpark } from "@/components/effects";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SplashCursor
        color="rgba(191, 0, 255, 0.15)"
        size={25}
        opacity={0.3}
      />
      <div className="fixed inset-0 pointer-events-none z-[9999]">
        <ClickSpark
          sparkColor="#ffcc00"
          sparkSize={10}
          sparkRadius={20}
          sparkCount={8}
          duration={400}
        />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
