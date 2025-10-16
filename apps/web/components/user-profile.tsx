"use client";

import { useQuery } from "convex/react";
import { useUser } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";

export function UserProfile() {
  const { user: clerkUser } = useUser();
  const convexUser = useQuery(api.users.getCurrentUser);

  if (!clerkUser) {
    return <div>Please sign in</div>;
  }

  if (convexUser === undefined) {
    return <div>Loading...</div>;
  }

  if (!convexUser) {
    return <div>User not found in database</div>;
  }

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-lg font-semibold mb-2">User Profile</h2>
      <div className="space-y-2">
        <p><strong>Name:</strong> {convexUser.name || "Not set"}</p>
        <p><strong>Email:</strong> {convexUser.email}</p>
        <p><strong>Clerk ID:</strong> {convexUser.clerkId}</p>
        <p><strong>Created:</strong> {new Date(convexUser.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
}