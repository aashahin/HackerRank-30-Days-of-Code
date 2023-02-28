function main() {
  const n = parseInt(readLine().trim(), 10);
  const binary = n.toString(2)
  let maxCount = 0
  const arr = binary.split('0')
  arr.map((i) => {
    if (i.length > maxCount) maxCount = i.length
  })
  console.log(maxCount)
}