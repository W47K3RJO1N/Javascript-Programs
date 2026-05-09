let arr = [1, 2, 3, 4, 6];
let count = 0;

for (let num of arr) {
  if (num % 2 === 0) count++;
}

console.log(count);
