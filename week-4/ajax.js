function ajax(src, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      let products = JSON.parse(xhr.responseText);
      callback(products);
    }
  };
  xhr.open('GET', src);
  xhr.send();
}

function render(data) {
  for (let i = 0; i < data.length; i++) {
    let h1 = document.createElement("h1");
    let t = document.createTextNode("Name: " + data[i]['name']);
    h1.appendChild(t);
    document.body.appendChild(h1);
    let price = document.createElement("P");
    let priceText = document.createTextNode(`${data[i]['price']}`);
    price.appendChild(priceText);
    document.body.appendChild(price);
    let para = document.createElement("P");
    let descripText = document.createTextNode("Description: " + data[i]['description']);
    para.appendChild(descripText);
    document.body.appendChild(para);

  }
}

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response) {
  render (response);
});
