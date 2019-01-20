function avg(data) {
  /*console.log(data.size);
  console.log(data['products'][0]['price']);*/
  var sum = 0;
  var numberOfProducts = data.size;
  for (var i = 0; i < numberOfProducts; i++) {
    sum += data['products'][i]['price'];
  }
  console.log(sum/numberOfProducts);
}
avg(
  { size:3,
    products:
    [
      { name:"Product 1", price:100 },
      { name:"Product 2", price:700 },
      { name:"Product 3", price:250 }
    ]
  }
);
