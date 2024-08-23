import { useState } from "react";

export const useProductSearch = (
  searchEndPoint: string,
  productName: string
) => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [products, setProducts] = useState<any[] | null>(null);

  // fetch product results

  // transform into foodItem

  return products;
};
