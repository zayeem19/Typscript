const canSum = (target: number, numbers: number[], memo = <any>{}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of numbers) {
    let remainder: number = target - num;
    if (canSum(remainder, numbers, memo) === true) {
      return (memo[target] = true);
    }
  }
  return (memo[target] = false);
};

console.log(canSum(3, [2, 4]));
console.log(canSum(50, [2, 4]));
console.log(canSum(100, [9, 9]));
