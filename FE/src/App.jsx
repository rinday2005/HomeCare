import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "./components/layout/PublicLayout";
import AdminLayout from "./components/layout/AdminLayout";

// Public Pages
import Index from "./pages/Index";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import NotFound from "./pages/NotFound";

// Admin Pages
import Dashboard from "./pages/admin/Dashboard";
import Patients from "./pages/admin/Patients";
import Caregivers from "./pages/admin/Caregivers";
import Requests from "./pages/admin/Requests";
import Schedule from "./pages/admin/Schedule";
import Reports from "./pages/admin/Reports";
import CareLogDetail from "./pages/admin/CareLogDetail";
import Payments from "./pages/admin/Payments";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          
          {/* Auth Routes (without layout) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="patients" element={<Patients />} />
            <Route path="caregivers" element={<Caregivers />} />
            <Route path="requests" element={<Requests />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="reports" element={<Reports />} />
            <Route path="reports/care-log/:id" element={<CareLogDetail />} />
            <Route path="payments" element={<Payments />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
