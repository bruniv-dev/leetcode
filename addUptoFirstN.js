function addUpToFirstN(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpToFirstN_2(n) {
  return (n * (n + 1)) / 2;
}

console.log(addUpToFirstN(5));
console.log(addUpToFirstN_2(5));
