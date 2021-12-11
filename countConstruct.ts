const countConstruct = (target: string, wordBank: string[], memo = <any>{}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let totalCount: number = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numWays = countConstruct(target.slice(word.length), wordBank, memo);
      totalCount += numWays;
    }
  }
  return (memo[target] = totalCount);
};

console.log(countConstruct("eeeeeee", ["ab", "cd", "ef", "abc", "ef"]));
