import { Cart } from "./setCart.js";
import { SearchProduct } from "./searchClickBtn.js";
import { removeQtyy } from "./removeQtyy.js";

let cartBtn = document.getElementById("CustomerCart");

let selectOption = document.getElementById("size");

let Input = document.getElementById("qty");

let NewQtyy = new removeQtyy();

console.log(cartBtn);

// console.log(cartBtn.dataset.cart);

cartBtn.addEventListener("click", () => {
    console.log(cartBtn.dataset.cart);
    console.log("selectValue", selectOption.value, "InputValue", Input.value);
    let chacked = NewQtyy.removeQtyyy(Input.value, cartBtn.dataset.cart);
    console.log("ckecked", chacked);

    if(chacked)  {
        let Check = new SearchProduct();
        let newCart = new Cart();
        let bolean;
        bolean = Check.searchClicked(cartBtn.dataset.cart);
        console.log(bolean);
        if (bolean == true)
        {
            alert("this products is already in your cart the qtyy will increase");
           newCart.searchSingleProduct(cartBtn.dataset.cart, Input.value);

        }
        else {
            newCart.searchSingleProduct(cartBtn.dataset.cart, Input.value);

            newCart.setSingleProductInfo(cartBtn.dataset.cart, selectOption.value, Input.value);
        }
        // let newCart = new Cart();
        // newCart.searchSingleProduct(cartBtn.dataset.cart);

        // newCart.setSingleProductInfo(cartBtn.dataset.cart, selectOption.value, Input.value);
        window.location.href = "./cart.html";
    }
   
    else {
        alert("Sorry Our Stock Qty is deficient!!");
    }
   
})

