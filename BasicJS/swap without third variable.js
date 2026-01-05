let x = 5;
let y = 6;

console.log("Before Swap: X =", x, "Y =", y);

x = x + y;
y = x - y;
x = x - y;

console.log("\nAfter Swap: X =", x, "Y =", y);
