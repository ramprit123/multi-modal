"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Clock, Trash2 } from "lucide-react";
import { Id } from "@/convex/_generated/dataModel";

export function EventsList() {
  const events = useQuery(api.events.getUpcomingEvents);
  const deleteEvent = useMutation(api.events.deleteEvent);

  const handleDeleteEvent = async (eventId: Id<"events">) => {
    try {
      await deleteEvent({ eventId });
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  if (events === undefined) {
    return <div>Loading events...</div>;
  }

  if (events.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">No upcoming events</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {events.map((event) => (
          <div key={event._id} className="border-l-4 border-blue-500 pl-3 py-2 flex justify-between items-start">
            <div className="flex-1">
              <p className="font-medium text-sm">{event.title}</p>
              {event.description && (
                <p className="text-xs text-muted-foreground mt-1">{event.description}</p>
              )}
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <Clock className="h-3 w-3 mr-1" />
                {new Date(event.startTime).toLocaleString()}
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleDeleteEvent(event._id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}