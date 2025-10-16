import { auth } from "@clerk/nextjs/server";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { MessageSquare, Plus, Search, Send } from "lucide-react";

export default async function MessagesPage() {
  const { userId } = await auth();

  if (!userId) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Welcome!</h1>
          <p className="mb-4">Please sign in to continue</p>
          <Button asChild>
            <a href="/sign-in">Sign In</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Messages</h1>
          <p className="text-muted-foreground">Communicate with your team and contacts</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Message
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Conversations</CardTitle>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  placeholder="Search conversations..."
                  className="pl-8 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center space-x-3 p-3 hover:bg-muted cursor-pointer border-b">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                      U{i}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">User {i}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        Last message preview...
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      2h
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="border-b">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                  U1
                </div>
                <div>
                  <CardTitle className="text-lg">User 1</CardTitle>
                  <CardDescription>Online</CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-lg max-w-xs">
                    <p className="text-sm">Hello! How are you doing today?</p>
                    <p className="text-xs text-muted-foreground mt-1">10:30 AM</p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-xs">
                    <p className="text-sm">Hi! I'm doing great, thanks for asking!</p>
                    <p className="text-xs opacity-70 mt-1">10:32 AM</p>
                  </div>
                </div>
                
                <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-lg max-w-xs">
                    <p className="text-sm">That's wonderful to hear! Are you working on anything interesting?</p>
                    <p className="text-xs text-muted-foreground mt-1">10:35 AM</p>
                  </div>
                </div>
              </div>
            </CardContent>
            
            <div className="border-t p-4">
              <div className="flex space-x-2">
                <input
                  placeholder="Type a message..."
                  className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <Button size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}