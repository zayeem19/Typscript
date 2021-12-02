const bestSum = (target: number, numbers: number[], memo = <any>{}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  let shortestCombination: any = null;
  for (let num of numbers) {
    let remainder: number = target - num;
    const remainderCombination = bestSum(remainder, numbers, memo);
    if (remainderCombination !== null) {
      let combination: number[] = [...remainderCombination, num];
      if (
        shortestCombination === null ||
        shortestCombination.length > combination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  return (memo[target] = shortestCombination);
};

console.log(bestSum(6, [1, 2, 3]));
console.log(bestSum(100, [1, 2, 25]));
