import { auth } from "@clerk/nextjs/server";
import { Button } from "@workspace/ui/components/button";
import { ChatInputBox } from "./_components/ChatInput";

export default async function Page() {
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
    <div className="min-h-[calc(100vh-200px)]">
      <main className="p-4">
        <ChatInputBox />
      </main>
    </div>
  );
}
