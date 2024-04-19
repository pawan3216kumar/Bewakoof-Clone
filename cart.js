var cartArr = JSON.parse(localStorage.getItem("cart")) || [];
  displaydata(cartArr)
  console.log(cartArr)

 
  function displaydata(product) {
    var container = document.getElementById("container");
   
    container.innerHTML = "";

    product.forEach(function (ele, i) {
      var card = document.createElement("div");

      var image = document.createElement("img");
      image.src = ele.image;

      var h4 = document.createElement("h4");
      h4.textContent = ele.title;

      var price = document.createElement("p");
      price.textContent = ele.salePrice;

      let TribePrice = document.createElement("p")
      TribePrice.innerHTML = ele.TribePrice;
   
      let Fabric = document.createElement("p")
      Fabric.innerHTML = ele.Fabric;
   
      let rating = document.createElement("p")
      rating.innerHTML = ele.rating
   
      var btn = document.createElement("button");
      btn.textContent = "Remove from cart";
      btn.addEventListener("click", function () {
        removeFromCart(ele, i);
      });

      card.append(image, h4, price , Fabric , rating ,  btn);
      container.append(card);
    });
  }

  function removeFromCart(ele, i) {
    cartArr.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cartArr));
    displaydata(cartArr);
  }



