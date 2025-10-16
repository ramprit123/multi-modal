'use client'

import { UserButton, useUser } from '@clerk/nextjs'
import { Button } from '@workspace/ui/components/button'

export function Header() {
  const { isSignedIn, user } = useUser()

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold">Your App</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          {isSignedIn ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                Welcome, {user.firstName || user.emailAddresses[0].emailAddress}
              </span>
              <UserButton />
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <a href="/sign-in">Sign In</a>
              </Button>
              <Button asChild>
                <a href="/sign-up">Sign Up</a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}