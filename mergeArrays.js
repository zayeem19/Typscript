var colors = [
    { id: "pineapple", color: "yellow" },
    { id: "mango", color: "red" },
    { id: "apple", color: "red" },
    { id: "banana", color: "red" },
];
var price = [
    { id: "pineapple", price: 100 },
    { id: "mango", price: 200 },
    { id: "apple", price: 150 },
    { id: "banana", price: 50 },
];
var fruit = colors.map(function (item, index) {
    return Object.assign({}, item, price[index]);
});
console.log(fruit);
