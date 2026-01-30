import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <AdminSidebar />
      <main className="ml-56">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
