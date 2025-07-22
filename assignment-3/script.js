let data = [12, 5, 20, 8, 15, 30, 7, 25];

let evenNumbers = [];

for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
        evenNumbers.push(data[i]);
    }
}

let sumOfEvens = 0;
for (let i = 0; i < evenNumbers.length; i++) {
    sumOfEvens += evenNumbers[i];
}

console.log("Even Numbers:", evenNumbers);
console.log("Sum of Even Numbers:", sumOfEvens);  
