import { useCookbook } from "@/hooks/useCookbook";
import { CardCustom } from "./card/CardCustom";
import { Button } from "./button";
import { usePantry } from "@/hooks/usePantry";

export const Cookbook = () => {
  const { pantry } = usePantry();
  const {
    data: cookbook,
    isLoading: isLoadingCookbook,
    isError,
  } = useCookbook(pantry);

  const colDefs = [{ field: "name" }, { field: "servings" }, { field: "cost" }];
  const rowData = cookbook?.recipes;

  return (
    <CardCustom
      colDefs={colDefs}
      rowData={rowData!}
      title="Cookbook"
      description="Recipes"
    >
      <Button>Add recipe</Button>
    </CardCustom>
  );
};

{
  /* <Card className="w-2/5">
      <CardHeader>
        <CardTitle>Cookbook</CardTitle>
        <CardDescription>Recipes</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoadingCookbook || isLoadingPantry ? (
          <Skeleton className="h-40 w-auto" />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Serves</TableCell>
                <TableCell>Cost</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cookbook!.recipes.map((recipe) => (
                <TableRow key={recipe.id}>
                  <TableCell>{recipe.name}</TableCell>
                  <TableCell>{recipe.servings}</TableCell>
                  <TableCell>${recipe.cost}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
      <CardFooter>
        <Button>Add recipe</Button>
      </CardFooter>
    </Card> */
}
