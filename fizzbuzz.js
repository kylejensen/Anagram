for (var i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    document.write(i + ". fizzbuzz <br>");
  } else if (i % 5 === 0) {
    document.write(i + ". buzz <br>");
  } else if (i % 3 === 0) {
    document.write(i + ". fizz <br>");
  } else {
    document.write(i + ".<br>");
  }
}
