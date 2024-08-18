import React from "react";
import OverviewContextProvider from "./overviewContext";

import { Cookbook } from "@/components/ui/Cookbook";
import { PantryCard } from "./PantryCard";

interface IProps {
  children?: React.ReactNode;
}

export const OverviewPage = () => {
  return (
    <div className="flex px-6 gap-6">
      <OverviewContextProvider>
        <PantryCard />
        <Cookbook />
      </OverviewContextProvider>
    </div>
  );
};
