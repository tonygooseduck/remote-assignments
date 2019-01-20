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
//object literal
var cal1 = {
  op: "+",
  n1: 2,
  n2: 4
}
console.log(calculate(cal1));

//class
class Calculation {
  constructor (op, n1, n2) {
    this.op = op;
    this.n1 = n1;
    this.n2 = n2;
  }

}
var cal2 = new Calculation("-", 3, 1);
console.log(calculate(cal2));
