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
  if (this.cheese === "Yes") {
    price += 2;
  }
}

// let pie = new Pizza();
//   return pie;