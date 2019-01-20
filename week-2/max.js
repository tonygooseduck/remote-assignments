function max (...numbers) {
  var temp = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > temp) {
      temp = numbers[i];
    }
  }
  return temp;
}

console.log(max(1, 2, 4, 5)); //result to 5
console.log(max(5, 2, 7 ,1 ,6)); //restult to 7
