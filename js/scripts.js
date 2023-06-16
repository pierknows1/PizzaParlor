//business logic

function Pizza (size, toppings){
    this.size = size;
    this.toppings = toppings;
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

    Pizza.prototype.costToppings = function() {
        let costToppings = 0;
        if (this.costToppings === "Chicken"){
            costToppings = 3;
        }
        else if (this.costToppings === "Pepperoni"){
            costToppings = 4;
        }
        else if (this.costToppings === "sausage"){
            costToppings = 5;
        }
        else if (this.costToppings === "Veggie"){
            costToppings = 2;
        }
            return costToppings;
    }