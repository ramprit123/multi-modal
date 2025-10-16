import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useEffect } from "react";
import { api } from "@/convex/_generated/api";

export const useStoreUserEffect = () => {
  const { user } = useUser();
  const createUser = useMutation(api.users.createUser);

  useEffect(() => {
    if (!user) return;

    const storeUser = async () => {
      try {
        await createUser({
          clerkId: user.id,
          email: user.emailAddresses[0]?.emailAddress ?? "",
          name: user.fullName ?? undefined,
          imageUrl: user.imageUrl ?? undefined,
        });
      } catch (error) {
        console.error("Error storing user:", error);
      }
    };

    storeUser();
  }, [user, createUser]);
};