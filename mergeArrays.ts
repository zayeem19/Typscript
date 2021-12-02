interface Types {
  id: string;
  color?: string;
  price?: number;
}

let colors: Types[] = [
  { id: "pineapple", color: "yellow" },
  { id: "mango", color: "red" },
  { id: "apple", color: "red" },
  { id: "banana", color: "red" },
];

let price: Types[] = [
  { id: "pineapple", price: 100 },
  { id: "mango", price: 200 },
  { id: "apple", price: 150 },
  { id: "banana", price: 50 },
];

let fruit: Types[] = colors.map((item, index) =>
  Object.assign({}, item, price[index])
);

console.log(fruit);
