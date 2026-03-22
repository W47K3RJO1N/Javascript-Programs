let str = "hello world";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if ("aeiou".includes(str[i])) {
    count++;
  }
}

console.log("Vowels =", count);
