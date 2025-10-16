"use client";

import { useStoreUserEffect } from "@/hooks/use-store-user-effect";

export function UserSync() {
  useStoreUserEffect();
  return null;
}