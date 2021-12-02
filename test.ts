// const foo = (n: number, memo = <any>{}) => {
//   if (n in memo) return memo[n];
//   if (n <= 2) return 1;
//   memo[n] = foo(n - 1, memo) + foo(n - 2, memo);
//   return memo[n];
// };

// const foo = (m: number, n: number, memo = <any>{}) => {
//   let key: any = m + "," + n;
//   if (key in memo) return memo[key];

//   if (m === 1 && n === 1) return 1;
//   if (m === 0 || n === 0) return 0;

//   memo[key] = foo(m, n - 1, memo) + foo(m - 1, n, memo);
//   return memo[key];
// };

// const foo = (target: number, numbers: number[], memo = <any>{}) => {
//   if (target in memo) return memo[target];
//   if (target === 0) return true;
//   if (target < 0) return false;

//   for (let num of numbers) {
//     let remainder: number = target - num;
//     if (foo(remainder, numbers, memo) === true) {
//       memo[target] = true;
//       return true;
//     }
//   }
//   memo[target] = false;
//   return false;
// };

// const foo = (target: number, numbers: number[]) => {
//   if (target === 0) return [];
//   if (target < 0) return null;

//   for (let num of numbers) {
//     let remainder: number = target - num;
//     let result = foo(remainder, numbers);
//     if (result !== null) {
//       return [...result, num];
//     }
//   }
//   return null;
// };

// const foo = (target: number, numbers: number[]) => {
//   if (target === 0) return [];
//   if (target < 0) return null;

//   let shortestCombination = <any>null;
//   for (let num of numbers) {
//     let remainder: number = target - num;
//     let remainderCombination = foo(remainder, numbers);
//     if (remainderCombination !== null) {
//       let combination: number[] = [...remainderCombination, num];
//       if (
//         shortestCombination === null ||
//         shortestCombination.length > combination.length
//       ) {
//         shortestCombination = combination;
//       }
//     }
//   }
//   return shortestCombination;
// };

const foo = (target: string, words: string[]) => {
  if (target === "") return true;

  for (let word of words) {
    if (target.indexOf(word) === 0) {
      let suffix = target.slice(word.length);
      if (foo(suffix, words) === true) {
        return true;
      }
    }
  }
  return false;
};

console.log(foo("sdfdhfdsjfhdjf", ["ab", "ab", "df"]));
