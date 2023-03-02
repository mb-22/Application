import { SingleProductCart } from "./setSingleProductClicked.js";

let addToCartBtn = document.getElementById("CustomerCart");

addToCartBtn.addEventListener("click", () => {


    let cartClick = new  SingleProductCart();
    cartClick.savesingleProductInfo(addToCartBtn.dataset.cart);

})