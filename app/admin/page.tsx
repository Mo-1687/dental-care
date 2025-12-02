import { requireAdmin } from "@/lib/actions/users";
import AdminDashboardClient from "./AdminDashboardClient";
import Navbar from "@/components/Navbar/Navbar";

const AdminPage = async () => {
  await requireAdmin();
  return (
    <div>
      <Navbar />
      <AdminDashboardClient />
    </div>
  );
};

export default AdminPage;
