var countConstruct = function (target, wordBank, memo) {
    if (memo === void 0) { memo = {}; }
    if (target in memo)
        return memo[target];
    if (target === "")
        return 1;
    var totalCount = 0;
    for (var _i = 0, wordBank_1 = wordBank; _i < wordBank_1.length; _i++) {
        var word = wordBank_1[_i];
        if (target.indexOf(word) === 0) {
            var numWays = countConstruct(target.slice(word.length), wordBank, memo);
            totalCount += numWays;
        }
    }
    return (memo[target] = totalCount);
};
console.log(countConstruct("eeeeeee", ["ab", "cd", "ef", "abc", "ef"]));
