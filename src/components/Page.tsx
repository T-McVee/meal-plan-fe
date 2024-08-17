import React from "react";
import { SideNav } from "./ui/SideNav";
import { Header } from "./ui/Header";
import { Pantry } from "./ui/Pantry";
import { Cookbook } from "./ui/Cookbook";
import OverviewContextProvider from "@/pages/overview/overviewContext";

interface IProps {
  children?: React.ReactNode;
}

export const Page = (props: IProps) => {
  const { children } = props;

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <SideNav />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />

        <div className="flex px-6 gap-6">
          <OverviewContextProvider>
            <Pantry />
            <Cookbook />
          </OverviewContextProvider>
        </div>
        {children}
      </div>
    </div>
  );
};
