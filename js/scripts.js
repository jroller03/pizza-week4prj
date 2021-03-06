function Pizza(size, toppings) {
  this.size = size;
  this.toppings = ["Cheese", "Anchovies", "Pepperoni"];
};

Pizza.prototype.total = function() {
  var price = 5;

  if (this.size === "Large") {
    price = 15;
  } else if (this.size === "Medium") {
    price = 10;
  } else {
    price *= 1;

    if (this.toppings === "Pepperoni" || "Anchovies") {
      price += 2
      //trying to get cheese to = the same price as just plain but cant get it.
    } else if (this.toppings === "Cheese") {
      price -= 1;
    }
  }
  return price;
};

$(document).ready(function() {
  $("form#order-receipt").submit(function(event) {
    event.preventDefault();
    var inputtedPizzaSize = $("select#pizza-size").val();
    var inputtedPizzaToppings = $("select#pizza-toppings").val();
    var newPizza = new Pizza(inputtedPizzaSize, inputtedPizzaToppings);


     $("ol#pizzaList").append("<li><span class='pizzaOrder'>" + newPizza.size + "," +        inputtedPizzaToppings + " Pizza Order" + "</span></li>");

    $(".pizzaOrder").last().click(function() {
      $("#pizzaDetail").show();
      $(".pizza-size").text(newPizza.size);
      $(".pizza-toppings").text(inputtedPizzaToppings);
      $(".order-total").text(newPizza.total());

    });
  });
});
