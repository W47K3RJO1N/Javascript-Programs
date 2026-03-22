let arr = [5, 2, 9, 1, 7];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log("Smallest =", min);
