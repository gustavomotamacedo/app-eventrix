
import React from 'react';
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
import Visitors from "./pages/Visitors";
import Staff from "./pages/Staff";
import Suppliers from "./pages/Suppliers";
import Permissions from "./pages/Permissions";
import Lectures from "./pages/Lectures";
import Tracks from "./pages/Tracks";
import Activities from "./pages/Activities";
import Venues from "./pages/Venues";
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
          <Route path="/visitors" element={<Visitors />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/permissions" element={<Permissions />} />
          <Route path="/lectures" element={<Lectures />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/team-tasks" element={<TeamTasks />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/checkin" element={<CheckIn />} />
          <Route path="/access-history" element={<AccessHistory />} />
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
