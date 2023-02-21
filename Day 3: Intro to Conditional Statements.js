function main() {
  const N = parseInt(readLine().trim(), 10);
  console.log(N % 2 || (N >= 6 && N <= 20) ? 'Weird' : 'Not Weird')
}