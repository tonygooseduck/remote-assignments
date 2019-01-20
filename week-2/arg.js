function calculate (args) {
  let result;
  if(args.op === "+") {
    result = args.n1 + args.n2;
  } else if (args.op === "-") {
    result = args.n1 - args.n2;
  } else {
    result = "Not supported";
  }
  return result;
}
var number = {
  op: "+",
  n1: 2,
  n2: 4
}
console.log(calculate ({n1: 2, n2: 3, op: "+"}));
console.log(calculate(number));
