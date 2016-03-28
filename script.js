// an array with all of our cart items
var cart = [];

var updateCart = function () {
  // TODO: finish
}


var addItem = function (item) {
  // TODO: finish
}

var clearCart = function () {
  // TODO: finish
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();