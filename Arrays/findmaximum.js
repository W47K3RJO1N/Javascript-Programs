let arr = [5, 2, 9, 1];
let max = arr[0];

for (let num of arr) {
  if (num > max) max = num;
}

console.log(max);
