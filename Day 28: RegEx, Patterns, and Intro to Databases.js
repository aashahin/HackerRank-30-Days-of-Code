function main() {
  const N = parseInt(readLine().trim(), 10);
  let result = [];
  for (let NItr = 0; NItr < N; NItr++) {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

    const firstName = firstMultipleInput[0];

    const emailID = firstMultipleInput[1];
    const valid =
      /^[a-z]{1,20}$/.test(firstName) && /^[a-z@.]{1,50}$/.test(emailID);
    if (valid && /@gmail\.com$/.test(emailID)) result.push(firstName);
  }

  console.log([...result].sort().join("\n"));
}
