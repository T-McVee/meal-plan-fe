import { ReactNode, createContext, useContext } from "react";

export interface IAppProps {
  test: string;
}

export type AppProviderValue = IAppProps;
export type DefaultValue = undefined;
export type AppContextValue = AppProviderValue | DefaultValue;

export const AppContext = createContext<AppContextValue>(undefined);

export function useAppContext() {
  const context = useContext(AppContext) as AppProviderValue;
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
}

export interface IProps {
  children: ReactNode;
}

export default function AppContextProvider(props: IProps) {
  const { children } = props;

  const test = "null";
  return <AppContext.Provider value={{ test }}>{children}</AppContext.Provider>;
}
