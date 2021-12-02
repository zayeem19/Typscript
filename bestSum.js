var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var bestSum = function (target, numbers, memo) {
    if (memo === void 0) { memo = {}; }
    if (target in memo)
        return memo[target];
    if (target === 0)
        return [];
    if (target < 0)
        return null;
    var shortestCombination = null;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        var remainder = target - num;
        var remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination !== null) {
            var combination = __spreadArray(__spreadArray([], remainderCombination, true), [num], false);
            if (shortestCombination === null ||
                shortestCombination.length > combination.length) {
                shortestCombination = combination;
            }
        }
    }
    return (memo[target] = shortestCombination);
};
console.log(bestSum(6, [1, 2, 3]));
console.log(bestSum(100, [1, 2, 25]));
