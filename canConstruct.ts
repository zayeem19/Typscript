const canConstruct = (target: string, words: string[], memo = <any>{}) => {
  if (target in memo) return target[memo];
  if (target === "") return true;

  for (let word of words) {
    if (target.indexOf(word) === 0) {
      let suffix: string = target.slice(word.length);
      if (canConstruct(suffix, words, memo) === true) {
        return (memo[target] = true);
      }
    }
  }
  return (memo[target] = false);
};

console.log(canConstruct("eeeeeee", ["ab", "cd", "ef", "abc", "ef"]));
