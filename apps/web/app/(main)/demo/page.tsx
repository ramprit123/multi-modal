"use client";

import { UserProfile } from "@/components/user-profile";
import { EventsList } from "@/components/events-list";
import { CreateEventForm } from "@/components/create-event-form";

export default function DemoPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Convex + Clerk Integration Demo</h1>
        <p className="text-muted-foreground">
          This page demonstrates the integration between Convex and Clerk authentication
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <UserProfile />
          <CreateEventForm />
        </div>
        
        <div>
          <EventsList />
        </div>
      </div>
    </div>
  );
}