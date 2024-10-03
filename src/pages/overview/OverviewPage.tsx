import React from "react";
import OverviewContextProvider from "./overviewContext";

import { CookbookCard } from "./CookbookCard";
import { PantryCard } from "./PantryCard";

interface IProps {
  children?: React.ReactNode;
}

export const OverviewPage = () => {
  // TODO: load hooks here
  return (
    <OverviewContextProvider>
      <div className="flex flex-col md:flex-row px-6 gap-6">
        <PantryCard />
        <CookbookCard />
      </div>
    </OverviewContextProvider>
  );
};
