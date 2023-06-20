//business logic

function Pizza(small) {
    this.size = small;
}

Pizza.protoytype.costSize = function() {
    let costSize = 0;
    if (this.size === "Small"){
        costSize += 5;
    }
    else if (this.size === "Medium"){
        costSize += 8;
    }
    else if (this.Size === "large"){
        costSize += 11;
    }
    else if (this.size === "X-large"){
        costSize += 15;
    }
        return costSize;
    }; 


Pizza.prototype.checkedToppings = function() {
    let topping = [];
    let toppingSelect = document.querySelectorAll("input[type=checkbox]:checked");
    for (let i=0; i < toppingSelect.length; i++){
        topping.push(toppingSelect[i].value);
    }
    return topping;
};

function AddPizza (topping) {

    this.topping = topping;
}

AddPizza.prototype.checkToppingsCost = function(){
    let topping = [];
    let toppingSelect = document.querySelectorAll("input[type=checkbox]:checked")
    for (let i=0; i < toppingSelect.length; i++){
        if (toppingSelect[i].checked){
            topping.push(toppingSelect[i]);
        }
    }
    return topping.length;
};

//ui logic

function orderPizza(event){
    event.preventDefault();
    let pizzaSize = document.getAnimations("pizza-size").value;
    let pizzaToppings = document.querySelectorAll("input[type=checkbox]:checked");
    let newPizza = new Pizza(pizzaSize);
    let newAddpizza = new AddPizza (pizzaToppings);
    let toppings = newPizza.checkedToppings();
    let totalOrder = document.getElementById("total-order");
    let totalCost = document.getElementById("total-cost");
    let pizzaTotal = newPizza.costSize() + newAddpizza.checkToppingsCost();
    let totalSize = document.getElementById("size");
    let checkedToppings = document.getElementById("toppings");
    totalSize.innerText = newPizza.pizzaSize;
    totalOrder.innerText = newAddpizza.pizzaToppings;
    checkedToppings.innerText = toppings.join(", ");
    totalCost.innerText = "$" + pizzaTotal;
    totalOrder.removeAttribute("class");
}

    window.addEventListener("load", function(){
        document.getElementById("order-pizza").addEventListener("submit,OrderPizza");
    });






