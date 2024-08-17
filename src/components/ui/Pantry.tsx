import { Measure } from "@/data-model";
import { Button } from "./button";
import { usePantry } from "@/hooks/usePantry";
import { CardCustom } from "./card/CardCustom";
import {
  ModalStatus,
  useOverviewContext,
} from "@/pages/overview/overviewContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Pantry = () => {
  const { pantry, addIngredient } = usePantry();
  const { modalStatus, openAddFoodModal, closeAddFoodModal } =
    useOverviewContext();

  const colDefs = [
    { field: "name" },
    { field: "price" },
    { field: "size" },
    { field: "measure" },
  ];
  const rowData = pantry?.ingredients;

  return (
    <>
      <CardCustom
        colDefs={colDefs}
        rowData={rowData!}
        title="Your Pantry"
        description="All the makings of a tasty treat"
      >
        <Button onClick={openAddFoodModal}>Add food</Button>
      </CardCustom>

      <Dialog
        open={modalStatus === ModalStatus.AddFood}
        onOpenChange={closeAddFoodModal}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
