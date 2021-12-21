function Pizza(cheese, pepperoni, mushrooms, onions, size) {
  this.cheese = cheese;
  this.pepperoni = pepperoni;
  this.mushrooms = mushrooms;
  this.onions = onions;
  this.size = size;
} 


Pizza.prototype.price = function() {
  let price;
  price = 0;
  console.log("first", price);
  if (this.size === "small") {
    price += 10;
  } else if (this.size === "large") {
    price += 15;
    }
  if (this.cheese === "Yes") {
    price += 2;
  } else if (this.pepperoni === "Yes") {
    price += 2;
  } else if (this.mushrooms === "Yes") {
    price += 1;
  } else if (this.onions === "Yes") {
    price += 1;
  }
  this.pizzaPrice = "$" + price + ".00";
  ;
  console.log("hit it", price);
}

  


  // UI Logic 

function showPrice(pizza) {
  console.log(pizza.pizzaPrice);
  $(".pizzaPricing").html(pizza.pizzaPrice);
}
$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    const cheese = $("select#cheese").val();
    const pepperoni = $("select#pepperoni").val();
    const mushrooms = $("select#mushrooms").val();
    const onions = $("select#onions").val();
    const size = $("select#size").val();
    $("select#cheese").val("")
    $("select#pepperoni").val("")
    $("select#mushrooms").val("")
    $("select#onions").val("")
    $("select#size").val("")
    
    var newPizza = new Pizza(cheese, pepperoni, mushrooms, onions, size);
    newPizza.price();
    showPrice(newPizza);
  });
});






