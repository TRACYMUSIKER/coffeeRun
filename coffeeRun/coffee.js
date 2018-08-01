
var pending = document.querySelector('.pending');
var coffeeOrders = document.querySelector('.coffee-order-form');
var orders = []
var url = "https://dc-coffeerun.herokuapp.com/api/coffeeorders"

var createRow = function(order) {
    var row = document.createElement('li');
    var para = document.createElement('p')
    var deleteOption = document.createElement('button');
    deleteOption.textContent = "Delete";
    para.textContent = `Order from: ${order.emailAddress}, Item: ${order.coffee}, flavor: ${order.flavor}, caffeine: ${order.strength}, size: ${order.size}`;
    row.appendChild(deleteOption);
    row.appendChild(para);
    pending.appendChild(row);

    deleteOption.addEventListener('click', function(event){
        $.ajax({
            url: `https://dc-coffeerun.herokuapp.com/api/coffeeorders/${order.emailAddress}`,
            success: loadPageNow,
            method: "DELETE",
        });
    });
};


coffeeOrders.addEventListener('submit', function(event) {
    event.preventDefault();
    var emailAddress = document.querySelector('[name="email"]').value;
    var coffee =  document.querySelector('[name="Coffee_order"]').value;
    var strength = document.querySelector('[name="caffeine_rating"]').value;
    var flavor = document.querySelector('[name="Flavor_Shot"]').value;
    var size = document.querySelector('[name="size"]:checked').value
    order = {
        coffee: coffee,
        flavor: flavor, 
        strength: strength, 
        size: size, 
        emailAddress: emailAddress
    }
    createRow(order);
    $.ajax({
            url: url,
            method: "POST",
            data: order 
    })

})




var loadPageNow = function(){
    var $pending = $('.pending');
    $pending.empty();
    $.ajax(url, {
        method: "GET", 
        success: function(coffeeOrders) {
            for(key in coffeeOrders) {
                createRow(coffeeOrders[key]);
            }
        }
    })
};
loadPageNow();
