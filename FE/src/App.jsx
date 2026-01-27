import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "./components/ScrollToTop";

import { Suspense, lazy } from 'react';
import Loader from './components/ui/loader';

// Layouts
import PublicLayout from "./components/layout/PublicLayout";
import AdminLayout from "./components/layout/AdminLayout";

// Public Pages (Lazy Loaded)
const HomePublic = lazy(() => import("./pages/Public/HomePublic"));
const Services = lazy(() => import("./pages/Public/Services"));
const Pricing = lazy(() => import("./pages/Public/Pricing"));
const HowItWorks = lazy(() => import("./pages/Public/HowItWorks"));
const Contact = lazy(() => import("./pages/Public/Contact"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Register = lazy(() => import("./pages/Auth/Register"));
const NotFound = lazy(() => import("./pages/Public/NotFound"));
const OurCaregivers = lazy(() => import("./pages/Public/OurCaregivers"));

// Admin Pages (Lazy Loaded)
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Patients = lazy(() => import("./pages/admin/Patients"));
const Caregivers = lazy(() => import("./pages/admin/Caregivers"));
const Requests = lazy(() => import("./pages/admin/Requests"));
const Schedule = lazy(() => import("./pages/admin/Schedule"));
const Reports = lazy(() => import("./pages/admin/Reports"));
const CareLogDetail = lazy(() => import("./pages/admin/CareLogDetail"));
const Payments = lazy(() => import("./pages/admin/Payments"));

// Family Pages (Lazy Loaded)
const FamilyLayout = lazy(() => import("./components/layout/FamilyLayout"));
const FamilyWelcome = lazy(() => import("./pages/Family/Welcome"));


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<Loader />}>
            <Routes>
              {/* Public Routes */}
              <Route element={<PublicLayout />}>
                <Route path="/" element={<HomePublic />} />
                <Route path="/caregivers" element={<OurCaregivers />} />
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

              {/* Family Routes */}
              <Route path="/family" element={<FamilyLayout />}>
                <Route index element={<FamilyWelcome />} />
              </Route>

              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
