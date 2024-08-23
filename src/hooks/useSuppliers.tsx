import { useQuery } from "@tanstack/react-query";

type SupplierData = {
  id: string;
  name: string;
  apiBaseURL?: string;
  productsEndPoint?: string;
};

class Supplier {
  constructor(readonly _supplier: SupplierData) {}

  get name() {
    return this._supplier.name;
  }

  get id() {
    return this._supplier.id;
  }

  get apiBaseURL() {
    if (!this._supplier.apiBaseURL) return null;
    return this._supplier.apiBaseURL;
  }

  get productsEndPointURL() {
    if (!this.apiBaseURL || !this._supplier.productsEndPoint) return null;
    return `${this.apiBaseURL}/${this._supplier.productsEndPoint}`;
  }

  get productSearchApiURL() {
    if (!this.productsEndPointURL) return null;
    return `${this.productsEndPointURL}?searchTerm=`;
  }

  get hasApi() {
    return !!this.apiBaseURL;
  }

  static fromData(data: SupplierData) {
    return new Supplier(data);
  }
}

const suppliers: SupplierData[] = [
  {
    id: "0",
    name: "None",
  },
  {
    id: "1",
    name: "Woolworths",
    apiBaseURL: "https://www.woolworths.com.au",
    productsEndPoint: "apis/ui/Search/products",
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
  return suppliers.map(Supplier.fromData);
};

export const useSuppliers = () => {
  return useQuery({
    queryKey: ["suppliers"],
    queryFn: getSuppliers,
  });
};
