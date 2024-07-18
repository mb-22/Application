import { Cart_sproducts } from "./Cart_sproducts.js";
import { SearchProduct } from "./searchClickBtn.js";
import { removeQtyy } from "./removeQtyy.js";

let Cart = new Cart_sproducts();

let checked = new SearchProduct();

let Add_to_cart_btn = document.getElementById("CustomerCart");

let selectOption = document.getElementById("size");

let Input = document.getElementById("qty");

console.log("/////", Add_to_cart_btn);

let NewQtyy = new removeQtyy();

Add_to_cart_btn.addEventListener("click", () => {
    console.log(Add_to_cart_btn.dataset.cart);
    let checkedClicked = checked.searchClicked(Add_to_cart_btn.dataset.cart);
    console.log("checkClick",checkedClicked);
    console.log(Input.value, selectOption.value);
    NewQtyy.removeQtyyy(Input.value, Add_to_cart_btn.dataset.cart);
    // let chacked = NewQtyy.removeQtyyy(Input.value, Add_to_cart_btn.dataset.cart);
    // console.log("ckecked", chacked);
    let checkQty = localStorage.getItem("QtyInsufficient");
    // Cart.InfoCart(Add_to_cart_btn.dataset.cart, Input.value, selectOption.value);
    // if (chacked) {

    if (checkQty == "false") {
        if (checkedClicked == true) {
            alert("this products is already in your cart the qtyy will increase");
            Cart.modifyProductQtyy(Add_to_cart_btn.dataset.cart, Input.value);
        }
        else {
            Cart.modifyProductQtyy(Add_to_cart_btn.dataset.cart, Input.value);
            Cart.InfoCart(Add_to_cart_btn.dataset.cart, Input.value, selectOption.value);
        }
    }
        
    //  Cart.InfoCart(Add_to_cart_btn.dataset.cart, Input.value, selectOption.value);
    
        // Cart.modifyProductQtyy(Add_to_cart_btn.dataset.cart, Input.value);
    // }
    // else {
    //     alert("Sorry Our Stock Qty is deficient!!");
    // }

  
    
})



