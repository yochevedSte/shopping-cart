var STORAGE_ID = "shopping-cart";
// an array with all of our cart items
var cart = [];

var saveToLocalStorage = function () {
  localStorage.setItem(STORAGE_ID, JSON.stringify(cart));
}

var getFromLocalStorage = function () {
  return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
}

var updateCart = function () {
  // In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
  $(".cart-list").empty();
  var $cartlist = $(".cart-list");
  var total = 0;
  cart = getFromLocalStorage();
  for (var i = 0; i < cart.length; i++) {
    $cartlist.append("<div class=\"cart-item\" data-name=\"" + cart[i].name + "\">" + cart[i].name + "(" + cart[i].amount + ") - $" +
      cart[i].price + "<button class=\"btn remove-item\">Remove</button" + "</div>");
    total += cart[i].price * cart[i].amount;
  }
  $(".total").text(total);
}


var addItem = function ($item) {
  cart = getFromLocalStorage();
  var found = false;
  cart.find((o, i) => {
    if (o.name === $item.data("name") && found == false) {
      cart[i].amount++;
      found = true;
    }
  });
  if (found == false) {
    cart.push({ name: $item.data("name"), price: $item.data("price"), amount: 1 });
    console.log($item.data());
  }

  saveToLocalStorage();

}

function removeItem($item) {
  cart = getFromLocalStorage();
  cart = $.grep(cart, function (e) {
    return e.name != $item.data("name");
  });
  saveToLocalStorage();
}

var clearCart = function () {
  cart = [];
  saveToLocalStorage();
  updateCart();
}

$('.view-cart').on('click', function () {
  $('.shopping-cart').show();
});

$(document).mouseup(function (e) {
  var container = $(".shopping-cart");

  // if the target of the click isn't the container nor a descendant of the container
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.hide();
  }
});

$('.add-to-cart').on('click', function () {

  var $item = $(this).closest('.item');
  addItem($item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

$('.cart-list').on('click', '.remove-item', function () {
  console.log("this = " + $(this));
  var $item = $(this).closest('.cart-item');
  removeItem($item);
  updateCart();
})

// update the cart as soon as the page loads!
updateCart();
