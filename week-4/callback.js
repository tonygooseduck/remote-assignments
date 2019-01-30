function delayedResult (n1, n2, dealyTime, callback) {
  let result = `${n1+n2}(${n1}+${n2})`;
 window.setTimeout(callback, dealyTime, result);
}

delayedResult(4, 5, 3000, function(result){
  console.log(result);
});
delayedResult(-5, 10, 2000, function(result){
  window.alert(result);
});
