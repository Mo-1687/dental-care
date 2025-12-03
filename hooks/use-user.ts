"use client"
import { updateUserRole } from "@/lib/actions/users";
import { useMutation } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export function useUpdateUserRole() {
  return useMutation({
    mutationFn: updateUserRole,
    onError: () => toast.error("Failed to update user role"),
    onSuccess: () => {
        toast.success("User role updated successfully")
        redirect("/admin")
    },
  });
}
