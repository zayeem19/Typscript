const howSum = (target: number, numbers: number[], memo = <any>{}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of numbers) {
    let remainder: number = target - num;
    const result = howSum(remainder, numbers, memo);
    if (result !== null) {
      return (memo[target] = [...result, num]);
    }
  }
  return (memo[target] = null);
};

console.log(howSum(300, [7, 14]));
console.log(howSum(3, [1, 2]));
