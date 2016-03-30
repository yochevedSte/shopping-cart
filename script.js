var cart = [];

var updateCart = function () {
  $('.cart-list').empty();
  $('.total').html('0');

  for (var i = 0; i < cart.length; i ++) {
    var template = Handlebars.compile($('#item-template').html())
    var newItem = template(cart[i]);

    $('.cart-list').append(newItem);
    $('.total').html(calculateTotal());
  }
}

var calculateTotal = function () {
  var total = 0;

  for (var i = 0; i < cart.length; i ++) {
    total += cart[i].price;
  }

  return total;
}

var addItem = function (item) {
  cart.push(item);
}

var clearCart = function () {
  cart = [];
  updateCart();
}

$('.view-cart').on('click', function () {
  $('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {
  var item = $(this).closest('.item').data();
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

updateCart();