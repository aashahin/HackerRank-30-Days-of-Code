function processData(input) {
  //Enter your code here
  let [returned, due] = input.split("\n");
  let [rD, rM, rY] = returned.split(" ").map((x) => {
    return parseInt(x);
  });
  let [dD, dM, dY] = due.split(" ").map((x) => {
    return parseInt(x);
  });
  if (rY < dY) {
    console.log(0);
  } else if (rD <= dD && rM <= dM && rY === dY) {
    console.log(0);
  } else if (rD > dD && rM <= dM && rY === dY) {
    console.log(15 * (rD - dD));
  }
  if (rM > dM && rY === dY) {
    console.log(500 * (rM - dM));
  } else if (rY > dY) {
    console.log(10000);
  }
}
