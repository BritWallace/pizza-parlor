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
  
  this.pizzaPrice = price;


  



// let pie = new Pizza();
//   return pie;


