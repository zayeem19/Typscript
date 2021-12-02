var canSum = function (target, numbers, memo) {
    if (memo === void 0) { memo = {}; }
    if (target in memo)
        return memo[target];
    if (target === 0)
        return true;
    if (target < 0)
        return false;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        var remainder = target - num;
        if (canSum(remainder, numbers, memo) === true) {
            return (memo[target] = true);
        }
    }
    return (memo[target] = false);
};
console.log(canSum(3, [2, 4]));
console.log(canSum(50, [2, 4]));
console.log(canSum(100, [9, 9]));
