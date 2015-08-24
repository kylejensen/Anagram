function compare(a,b) {
  y = a.split("").sort().join("");
  z = b.split("").sort().join("");
  if (y === z) {
    console.log(a + " and " + b + " are anagrams!");
  } else {
    console.log(a + " and " + b + " are not anagrams!");
  }
}
