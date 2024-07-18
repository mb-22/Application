import { GetCartInfo } from "./addCart.js";

let AllInfo = new GetCartInfo();

AllInfo.getInfo();

let removeItem = document.getElementsByClassName("fa-times-circle");

console.log(removeItem);

for (let item of removeItem) {
    item.addEventListener("click", (e) => {

        e.preventDefault();
    //console.log(item);
    //console.log(item.dataset.supp);
    AllInfo.removeItem(item.dataset.supp, item.dataset.code);

    })

}

window.addEventListener("DOMContentLoaded", () => {
    let printCart = new GetCartInfo();
    printCart.print();
})