let rows = 4;
let pattern = "";

for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "#";
    }
    pattern += line + "\n";
}

console.log(pattern);
