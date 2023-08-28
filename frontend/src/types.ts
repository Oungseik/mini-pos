export interface Item {
  name: string,
  category: string,
  price: number,
  currency: "Ks"
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export type Order = Partial<Product> & { count: number }

export interface Pagination {
  total: number
  perPage: number,
  currentPage: number
  totalPage: number,
}
