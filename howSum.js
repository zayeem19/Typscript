var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var howSum = function (target, numbers, memo) {
    if (memo === void 0) { memo = {}; }
    if (target in memo)
        return memo[target];
    if (target === 0)
        return [];
    if (target < 0)
        return null;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        var remainder = target - num;
        var result = howSum(remainder, numbers, memo);
        if (result !== null) {
            return (memo[target] = __spreadArray(__spreadArray([], result, true), [num], false));
        }
    }
    return (memo[target] = null);
};
console.log(howSum(300, [7, 14]));
console.log(howSum(3, [1, 2]));
