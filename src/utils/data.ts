export interface IProduct {
  id: number;
  name: string;
  price: number;
}

// interface myProducts extends Array<myProduct> {}

export const products: Array<IProduct> = [
  { id: 1, name: "반팔티", price: 15000 },
  { id: 2, name: "긴팔티", price: 35000 },
  { id: 3, name: "핸드폰케이스", price: 30000 },
  { id: 4, name: "후드티", price: 20000 },
  { id: 5, name: "바지", price: 50000 },
];
