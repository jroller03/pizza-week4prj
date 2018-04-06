
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
};

Pizza.prototype.price = function() {
  var price = 5;

  if (this.size === "Large") {
    price = 15;
  } else if (this.size === "Medium") {
    price = 10;
  } else {
    price *= 1;
  }
  if (this.toppings === "Cheese") {
    price === price;
  } else {
    price += 2;
  }
  return price;
};

$(document).ready(function() {
  $("form#order-receipt").submit(function(event) {
    event.preventDefault();
    var inputtedPizzaSize = $("select#pizza-size").val();
    var inputtedPizzaToppings = $("select#pizza-toppings").val();
    var newPizza = new Pizza(inputtedPizzaSize, inputtedPizzaToppings);

     $.each($("input[name='toppings']:checked"), function() {
       newPizza.toppings.push($(this).val());
     });

     $("ul#pizzaList").append("<li><span class='pizzaOrder'>" + newPizza.size + newPizza.toppings + " Pizza Order" + "</span></li>");

    $(".pizzaOrder").last().click(function() {
      $("#pizzaDetail").show();
      $(".pizza-size").text(newPizza.size);
      $(".pizza-toppings").text(newPizza.toppings);
      $(".order-total").text(newPizza.price());
      console.log(inputtedPizzaToppings)
    });
  });
});
