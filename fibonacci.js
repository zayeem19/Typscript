var fibo = function (n, memo) {
    if (memo === void 0) { memo = {}; }
    if (n in memo)
        return memo[n];
    if (n <= 2)
        return 1;
    memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo);
    return memo[n];
};
console.log(fibo(4));
console.log(fibo(7));
console.log(fibo(15));
