let n = 121;
let temp = n, rev = 0;

while (temp > 0) {
    let digit = temp % 10;
    rev = rev * 10 + digit;
    temp = Math.floor(temp / 10);
}

console.log(n === rev ? "Palindrome" : "Not Palindrome");
