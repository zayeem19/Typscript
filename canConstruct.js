var canConstruct = function (target, words, memo) {
    if (memo === void 0) { memo = {}; }
    if (target in memo)
        return target[memo];
    if (target === "")
        return true;
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (target.indexOf(word) === 0) {
            var suffix = target.slice(word.length);
            if (canConstruct(suffix, words, memo) === true) {
                return (memo[target] = true);
            }
        }
    }
    return (memo[target] = false);
};
console.log(canConstruct("eeeeeee", ["ab", "cd", "ef", "abc", "ef"]));
