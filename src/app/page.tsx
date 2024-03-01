
import { useConvexAuth } from "convex/react";
export default function Home() {
  const { isAuthenticated } = useConvexAuth();
  return (
    <main>
      <h1 className="mx-auto text-2xl w-fit">{ isAuthenticated ? "authenticated" : "not authenticated" }</h1>
    </main>
  );
}
