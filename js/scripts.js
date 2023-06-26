//business logic
function Pizza(size){

    this.size = size;
}

Pizza.prototype.crustCost = function () {
    let crustCost = 0.0;
    if (this.size === "Small") {
      crustCost += 5.0;
    } else if (this.size === "Medium") {
      crustCost += 8.0;
    } else if (this.size === "Large") {
      crustCost += 11.0;
    }
    return crustCost;
  };

Pizza.prototype.toppings = function(){
    let topping = [];
    let toppingsList = document.querySelectorAll("input[type=checkbox]:checked");
        for (let i = 0; i < toppingsList.length; i++){
            topping.push(toppingsList[i].value);
        }
        return topping;
};

//this function adds the topping selection to the total
function ToppingsPizza(){

}

ToppingsPizza.prototype.arrToppings = function(){
  let topping = [];
  let toppingsList = document.querySelectorAll("input[type=checkbox]:checked");
        for (let i = 0; i < toppingsList.length; i++) {
            if (toppingsList[i].checked) {
                topping.push(toppingsList[i]);
            }
        }
    return topping.length;
};

//ui logic

function OrderPizza (event){
    event.preventDefault();

    const crustSize = document.getElementById("pizza-size").value;
    const toppingsCost = document.querySelectorAll("input[type=checkbox]:checked");

    let newPizza = new Pizza(crustSize, toppingsCost);
    let arrToppings = new ToppingsPizza();
    let allToppings = newPizza.toppings();
    let showOrder = document.getElementById("show-order");
    let totalOrder = document.getElementById("total-order");
    let totalCost = newPizza.crustCost() + arrToppings.arrToppings();
    
    let pizzaSize = document.getElementById("size"); 
    let toppings = document.getElementById("toppings");
    
    toppings.innerText = allToppings.join(", ");
    pizzaSize.innerText = newPizza.size;
    totalOrder.innerText = " $" + totalCost;
    showOrder.removeAttribute("class");
}

window.addEventListener("load", function () {
    document.getElementById("select-order").addEventListener("submit", OrderPizza);
  });