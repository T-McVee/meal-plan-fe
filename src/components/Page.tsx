import React from "react";
import { SideNav } from "./ui/SideNav";
import { Header } from "./ui/Header";
import { OverviewPage } from "@/pages/overview/OverviewPage";

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
        <OverviewPage />
        {children}
      </div>
    </div>
  );
};
