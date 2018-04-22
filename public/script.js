// an array with all of our cart items
var cart = [];

var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
  $(".cart-list").empty();
  var $cartlist = $(".cart-list");
  var total = 0;
  for(var i=0 ; i<cart.length; i++){
    $cartlist.append("<div class=\"cart-item\">" + cart[i].name + " - $" + cart[i].price + "</div>");
    total += cart[i].price;
  }
  $(".total").text(total);
}


var addItem = function (item) {
  console.log(item.data()

);
  cart.push({name: item.data("name"), price: item.data("price")});
}

var clearCart = function () {
  cart = [];
  updateCart();
}

$('.view-cart').on('click', function () {
  $('.shopping-cart').show();
});

$(document).mouseup(function(e) 
{
    var container = $(".shopping-cart");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
});

$('.add-to-cart').on('click', function () {

  var $item  = $(this).closest('.item');
  addItem($item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
