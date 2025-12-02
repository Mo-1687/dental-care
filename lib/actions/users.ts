"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "../prisma";

export async function syncUser() {
  try {
    const user = await currentUser();
    if (!user) return;

    const existingUser = await prisma.user.findUnique({
      where: { clerkId: user.id },
    });
    if (existingUser) return existingUser;
    const dbUser = await prisma.user.create({
      data: {
        clerkId: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.emailAddresses[0]?.emailAddress,
        phone: user.phoneNumbers[0]?.phoneNumber,
      },
    });
    return dbUser;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get user data server action");
  }
}

export async function requireAdmin() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    select: { role: true },
  });

  if (!user || user.role !== "ADMIN") {
    redirect("/unauthorized");
  }

  return user;
}

export async function getUserRole() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    select: { role: true },
  });

  return user?.role || null;
}
