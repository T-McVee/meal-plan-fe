import { ReactNode, createContext, useContext, useState } from "react";

export interface IOverviewProps {
  modalStatus: ModalStatus;
  openAddFoodModal: () => void;
  closeAddFoodModal: () => void;
  openAddRecipeModal: () => void;
  closeAddRecipeModal: () => void;
}

export type OverviewProviderValue = IOverviewProps;
export type DefaultValue = undefined;
export type OverviewContextValue = OverviewProviderValue | DefaultValue;

export const OverviewContext = createContext<OverviewContextValue>(undefined);

export function useOverviewContext() {
  const context = useContext(OverviewContext) as OverviewProviderValue;
  if (context === undefined) {
    throw new Error(
      "useOverviewContext must be used within a OverviewProvider"
    );
  }
  return context;
}

export interface IProps {
  children: ReactNode;
}

export enum ModalStatus {
  AddFood,
  AddRecipe,
  Closed,
}

export default function OverviewContextProvider(props: IProps) {
  const { children } = props;

  const [modalStatus, setModalStatus] = useState<ModalStatus>(
    ModalStatus.Closed
  );

  function openAddFoodModal() {
    setModalStatus(ModalStatus.AddFood);
  }

  function closeAddFoodModal() {
    setModalStatus(ModalStatus.Closed);
  }

  function openAddRecipeModal() {
    setModalStatus(ModalStatus.AddRecipe);
  }

  function closeAddRecipeModal() {
    setModalStatus(ModalStatus.Closed);
  }

  const test = "null";
  return (
    <OverviewContext.Provider
      value={{
        modalStatus,
        openAddFoodModal,
        closeAddFoodModal,
        openAddRecipeModal,
        closeAddRecipeModal,
      }}
    >
      {children}
    </OverviewContext.Provider>
  );
}
