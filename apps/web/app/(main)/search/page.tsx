import { auth } from "@clerk/nextjs/server";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Search, Filter, FileText, MessageSquare, Calendar, User } from "lucide-react";

export default async function SearchPage() {
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
          <h1 className="text-3xl font-bold">Search</h1>
          <p className="text-muted-foreground">Find anything across your workspace</p>
        </div>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                placeholder="Search for documents, messages, events, and more..."
                className="pl-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-10"
              />
            </div>
            <Button>
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader className="text-center">
            <FileText className="h-8 w-8 mx-auto text-blue-500" />
            <CardTitle className="text-lg">Documents</CardTitle>
            <CardDescription>Search through all your documents</CardDescription>
          </CardHeader>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader className="text-center">
            <MessageSquare className="h-8 w-8 mx-auto text-green-500" />
            <CardTitle className="text-lg">Messages</CardTitle>
            <CardDescription>Find conversations and chats</CardDescription>
          </CardHeader>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader className="text-center">
            <Calendar className="h-8 w-8 mx-auto text-purple-500" />
            <CardTitle className="text-lg">Events</CardTitle>
            <CardDescription>Search calendar events</CardDescription>
          </CardHeader>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardHeader className="text-center">
            <User className="h-8 w-8 mx-auto text-orange-500" />
            <CardTitle className="text-lg">People</CardTitle>
            <CardDescription>Find team members and contacts</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Searches</CardTitle>
          <CardDescription>Your recent search history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { query: "project proposal", type: "Documents", time: "2 hours ago" },
              { query: "team meeting", type: "Events", time: "1 day ago" },
              { query: "budget report", type: "Documents", time: "3 days ago" },
              { query: "john smith", type: "People", time: "1 week ago" },
            ].map((search, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted cursor-pointer">
                <div className="flex items-center space-x-3">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{search.query}</p>
                    <p className="text-sm text-muted-foreground">{search.type}</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">{search.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Search Results</CardTitle>
          <CardDescription>No results found. Try searching for something above.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Enter a search query to see results</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}