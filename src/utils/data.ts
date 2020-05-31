interface myProduct {
  name: string;
  price: number;
}

interface myProducts extends Array<myProduct> {}

export const products: myProducts = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 35000 },
  { name: "핸드폰케이스", price: 30000 },
  { name: "후드티", price: 20000 },
  { name: "바지", price: 50000 },
];
