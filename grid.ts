const Grid = (n: number, m: number, memo = <any>{}) => {
  let key = n + "," + m;
  if (key in memo) return memo[key];
  if (n === 1 && m === 1) return 1;
  if (n < 0 || m < 0) return 0;
  memo[key] = Grid(n - 1, m, memo) + Grid(n, m - 1, memo);
  return memo[key];
};

console.log(Grid(3, 4));
console.log(Grid(1, 1));
console.log(Grid(11, 15));
