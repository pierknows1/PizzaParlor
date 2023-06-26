//business logic

function Pizza(size){

    this.size = size;

}

Pizza.prototype.crustCost = function () {
    let crustCost = 0.0;
    if (this.size === "Small") {
      crustCost += 7.0;
    } else if (this.size === "Medium") {
      crustCost += 9.0;
    } else if (this.size === "Large") {
      crustCost += 20.0;
    }
    return crustCost;
  };

//ui logic

function OrderPizza (event){
    event.preventDefault();

    const crustSize = document.getElementById("pizza-size").value;

    let newPizza = new Pizza(crustSize);
    let showOrder = document.getElementById("show-order");
    let totalOrder = document.getElementById("total-order");
    let totalCost = newPizza.crustCost();
    
    let pizzaSize = document.getElementById("size"); 

    pizzaSize.innerText = newPizza.size;
    totalOrder.innerText = "$" + totalCost;
    showOrder.removeAttribute("class");
}

window.addEventListener("load", function () {
    document.getElementById("select-order").addEventListener("submit", OrderPizza);
  });