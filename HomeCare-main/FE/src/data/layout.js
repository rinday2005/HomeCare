//admin sidebar--------------------------------------------
import { 
  Heart, 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  FileText, 
  Calendar, 
  BarChart3, 
  Settings, 
  HelpCircle,
  Wallet,
  FileSignature,
  Siren,
  Home
} from "lucide-react";

export const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
  { icon: Users, label: "Patients", path: "/admin/patients" },
  { icon: Home, label: "Families", path: "/admin/families" },
  { icon: UserCheck, label: "Caregivers", path: "/admin/caregivers" },
  { icon: FileText, label: "Requests", path: "/admin/requests" },
  { icon: Calendar, label: "Schedule", path: "/admin/schedules" },
  { icon: Wallet, label: "Payments", path: "/admin/payments" },
  { icon: FileSignature, label: "Contracts", path: "/admin/contracts" },
  { icon: Siren, label: "Incidents", path: "/admin/incidents" },
  { icon: BarChart3, label: "Reports", path: "/admin/reports" },
];

 export const bottomItems = [
  { icon: Settings, label: "Settings", path: "/admin/settings" },
  { icon: HelpCircle, label: "Help Center", path: "/admin/help" },
];
