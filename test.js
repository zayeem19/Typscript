// const foo = (n: number, memo = <any>{}) => {
//   if (n in memo) return memo[n];
//   if (n <= 2) return 1;
//   memo[n] = foo(n - 1, memo) + foo(n - 2, memo);
//   return memo[n];
// };
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var foo = function (target, numbers) {
    if (target === 0)
        return [];
    if (target < 0)
        return null;
    var shortestCombination = null;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        var remainder = target - num;
        var remainderCombination = foo(remainder, numbers);
        if (remainderCombination !== null) {
            var combination = __spreadArray(__spreadArray([], remainderCombination, true), [num], false);
            if (shortestCombination === null ||
                shortestCombination.length > combination.length) {
                shortestCombination = combination;
            }
        }
    }
    return shortestCombination;
};
console.log(foo(12, [3, 4, 6]));
