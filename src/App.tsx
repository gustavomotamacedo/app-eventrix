
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import NewEvent from "./pages/NewEvent";
import Exhibitors from "./pages/Exhibitors";
import Registration from "./pages/Registration";
import Marketing from "./pages/Marketing";
import LiveOps from "./pages/LiveOps";
import Finance from "./pages/Finance";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/new" element={<NewEvent />} />
          <Route path="/exhibitors" element={<Exhibitors />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/live-operations" element={<LiveOps />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
