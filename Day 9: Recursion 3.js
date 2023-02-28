function factorial(n) {
  // Write your code here
  if (1 > n) return 1;
  return n * factorial(n - 1)
}