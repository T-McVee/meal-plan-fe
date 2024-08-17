import { usePantry } from "@/hooks/usePantry";
import React from "react";
import { Skeleton } from "./skeleton";

export const Header = () => {
  const { isLoading } = usePantry();

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      {isLoading ? <Skeleton className="h-5 w-[150px]" /> : "Meal Plan"}
    </header>
  );
};
