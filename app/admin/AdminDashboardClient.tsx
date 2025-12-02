"use client";
import AdminStats from "@/components/admin/AdminStats/AdminStats";
import DoctorManagement from "@/components/admin/DoctorManagement/DoctorManagement";
import Navbar from "@/components/Navbar/Navbar";
import { useGetAppointments } from "@/hooks/use-appointments";
import { useGetDoctors } from "@/hooks/use-doctors";
import { useUser } from "@clerk/nextjs";
import {  SettingsIcon } from "lucide-react";
import RecentAppointments from "./RecentAppointments";
import Header from "@/components/Header/Header";

const AdminDashboardClient = () => {
  const { user } = useUser();
  const { data: doctors = [], isLoading: isLoadingDoctors } = useGetDoctors();
  const { data: appointments = [], isLoading: isLoadingAppointments } =
    useGetAppointments();

  const stats = {
    totalDoctors: doctors!.length,
    activeDoctors: doctors!.filter((doc) => doc.isActive).length,
    totalAppointments: appointments!.length,
    completedAppointments: appointments!.filter(
      (app) => app.status === "COMPLETED"
    ).length,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        {/* ADMIN WELCOME SECTION */}
        <Header
          icon={<SettingsIcon className="w-16 h-16 text-primary" />}
          text="admin dashboard"
          heading={` Welcome back, ${user?.firstName || "Admin"}`}
          description="Manage doctors, oversee appointments, and monitor your dental
          practice performance."
        />
        {/* ADMIN WELCOME SECTION */}

        {/* Admin Stats  */}
        <AdminStats
          totalDoctors={stats.totalDoctors}
          activeDoctors={stats.activeDoctors}
          totalAppointments={stats.totalAppointments}
          completedAppointments={stats.completedAppointments}
        />
        <DoctorManagement />
        <RecentAppointments />
      </div>
    </div>
  );
};

export default AdminDashboardClient;
