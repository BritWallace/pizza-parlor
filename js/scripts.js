function Pizza(cheese, pepperoni, mushrooms, onions, small, large) {
  this.cheese = cheese;
  this.pepperoni = pepperoni;
  this.mushrooms = mushrooms;
  this.onions = onions;
  this.small = small;
  this.large = large;
} 


Pizza.prototype.price = function() {
  let price;
  price = 0;
  if (this.small === "Yes") {
    price += 10;
  } else if (this.large === "Yes") {
    price += 15;
    }
  }
  if (this.cheese === "Yes") {
    price += 2;
  } else if (this.pepperoni === "Yes") {
    price += 2;
  } else if (this.mushrooms === "Yes") {
    price += 1;
  }
 if (this.onions=== "Yes") {
    price += 1;
  }
  
  this.pizzaPrice = "$" + price + ".00";


  // UI Logic 

function showPrice(Pizza) {
  $(".pizzaPricing").html(pizza.pizzaPrice);
}
$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    const cheese = $("select#cheese").val();
    const pepperoni = $("select#pepperoni").val();
    const mushrooms = $("select#mushrooms").val();
    const onions = $("select#onions").val();
    const small = $("select#small").val();
    const large = $("select#large").val();
    $("select#cheese").val("")
    $("select#pepperoni").val("")
    $("select#mushrooms").val("")
    $("select#onions").val("")
    $("select#small").val("")
    $("select#large").val("")
    
    var newPizza = new pizza(cheese, pepperoni, mushrooms, onions, small, large);
    newPizza.price();
    showPrice(newPizza);
  });
});






