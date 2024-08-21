import { useQuery } from "@tanstack/react-query";

type Supplier = {
  id: string;
  name: string;
  apiBaseURL?: string;
};

const suppliers: Supplier[] = [
  {
    id: "0",
    name: "None",
  },
  {
    id: "1",
    name: "Woolworths",
    apiBaseURL: "https://www.woolworths.com.au/apis",
  },
  {
    id: "2",
    name: "Coles",
  },
  {
    id: "3",
    name: "Aldi",
  },
  {
    id: "4",
    name: "Costco",
  },
];

// supplier promise
export const getSuppliers = async (): Promise<Supplier[]> => {
  return suppliers;
};

export const useSuppliers = () => {
  return useQuery({
    queryKey: ["suppliers"],
    queryFn: getSuppliers,
  });
};
