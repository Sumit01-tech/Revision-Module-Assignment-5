const productName = "Smart Watch";

let unitPrice = 150.75;

let quantity = 3;

let totalCost = unitPrice * quantity;

let combinedInfo = productName + totalCost;

console.log("Total Cost:", totalCost);

console.log("Combined Info:", combinedInfo);
console.log("Type of Combined Info:", typeof combinedInfo);

let discountPercentage = "10";

let discountAmount = totalCost * discountPercentage;

console.log("Discount Amount:", discountAmount);
console.log("Type of Discount Amount:", typeof discountAmount);
