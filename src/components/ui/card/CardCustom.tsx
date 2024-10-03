import { Skeleton } from "../skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../table";
import { Button } from "../button";

interface IProps {
  colDefs: any[];
  rowData: any[];
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export const CardCustom = (props: IProps) => {
  const { colDefs, rowData, title, description, children } = props;

  return (
    <Card className="w-full md:w-3/5 drop-shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        {!colDefs || !rowData ? (
          <Skeleton className="h-40 w-auto" />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                {colDefs.map((colDef, i) => (
                  <TableCell key={`${colDef.field}-${i}`}>
                    {colDef.field}
                  </TableCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rowData.map((row) => (
                <TableRow key={row.id}>
                  {colDefs.map((colDef, i) => (
                    <TableCell key={`${colDef.field}-${i}`}>
                      {row[colDef.field]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>

      <CardFooter>{children ? children : undefined}</CardFooter>
    </Card>
  );
};
