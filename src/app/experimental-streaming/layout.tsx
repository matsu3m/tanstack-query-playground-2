import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import type { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
  return <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>;
}
