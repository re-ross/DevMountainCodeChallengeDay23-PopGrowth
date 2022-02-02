function nbYear(p0, percent, aug, p) {
  let i;
  for (i = 0; p0 < p; i++) {
    p0 = p0 * (1 + percent / 100) + aug;
  }
  return i;
}
console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));

// p0 = population at beginning of year
// loop runs w
