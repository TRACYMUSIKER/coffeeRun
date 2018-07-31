
var pending = document.querySelector('.pending');
var coffeeOrders = document.querySelector('.coffee-order-form');
var orders = []

var createRow = function(element) {
    var row = document.createElement('li');
    row.textContent = element;
    pending.appendChild(row);
};

coffeeOrders.addEventListener('submit', function(event) {
    event.preventDefault();
    var emailInput = document.querySelector('[name="email"]').value;
    var coffeeOrderInput =  document.querySelector('[name="Coffee_order"]').value;
    var caffeineInput = document.querySelector('[name="caffeine_rating"]').value;
    var flavorInput = document.querySelector('[name="Flavor_Shot"]').value;
    var sizeInput = document.querySelector('[name="size"]:checked').value
    var pageOrder = `Item: ${coffeeOrderInput}, flavor: ${flavorInput}, caffeine: ${caffeineInput}, size: ${sizeInput}`;
    createRow(pageOrder);
    var individualOrder = {"email": emailInput, "coffee": coffeeOrderInput, "flavor": flavorInput, "caffeine": caffeineInput, "size": sizeInput};
    orders.push(individualOrder);
    saveOrder();
    });    

var saveOrder = function() {
    localStorage.setItem('storeOrder', JSON.stringify(orders));
};

var loadOrders = function() {
    var ordersAsString = localStorage.getItem('storeOrder');
    orders = JSON.parse(ordersAsString);
    createRow(ordersAsString);
};

loadOrders();

