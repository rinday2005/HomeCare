import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import PublicLayout from './components/layout/PublicLayout';
import AdminLayout from './components/layout/AdminLayout';
import FamilyLayout from './components/layout/FamilyLayout';

// Public Pages
import HomePublic from './pages/Public/HomePublic';
import Login from './pages/Auth/Login';
import RegisterFamily from './pages/RegisterFamily';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import Requests from './pages/admin/Requests';
import Caregivers from './pages/admin/Caregivers';
import Patients from './pages/admin/Patients';
import Families from './pages/admin/Families';
import Schedule from './pages/admin/Schedule';
import Payments from './pages/admin/Payments';
import Contracts from './pages/admin/Contracts';
import Incidents from './pages/admin/Incidents';
import Reports from './pages/admin/Reports';

// Family Pages
import Welcome from './pages/Family/Welcome';
import FamilyDashboard from './pages/Family/FamilyDashboard';
import FamilyContract from './pages/Family/FamilyContract';
import CareReport from './pages/Family/CareReport';
import CareSchedule from './pages/Family/CareSchedule';
import PatientList from './pages/Family/PatientList';
import FamilyPayment from './pages/Family/FamilyPayment';
import BookingService from './pages/Family/BookingService';
import Request from './pages/Family/Request';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePublic />} />
          <Route path="/register" element={<RegisterFamily />} />
        </Route>
        
        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="requests" element={<Requests />} />
          <Route path="caregivers" element={<Caregivers />} />
          <Route path="patients" element={<Patients />} />
          <Route path="families" element={<Families />} />
          <Route path="schedules" element={<Schedule />} />
          <Route path="payments" element={<Payments />} />
          <Route path="contracts" element={<Contracts />} />
          <Route path="incidents" element={<Incidents />} />
          <Route path="reports" element={<Reports />} />
        </Route>

        {/* Family Routes */}
        <Route path="/family" element={<FamilyLayout />}>
          <Route index element={<Welcome />} />
          <Route path="dashboard" element={<FamilyDashboard />} />
          <Route path="contract" element={<FamilyContract />} />
          <Route path="reports" element={<CareReport />} />
          <Route path="schedule" element={<CareSchedule />} />
          <Route path="patients" element={<PatientList />} />
          <Route path="payment" element={<FamilyPayment />} />
          <Route path="booking" element={<BookingService />} />
          <Route path="requests" element={<Request />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
