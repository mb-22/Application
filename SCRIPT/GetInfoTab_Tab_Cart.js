import { setCartPage } from "./GetTabTabCart.js";

let page = new setCartPage();
page.getPage();

let removeItem = document.getElementsByClassName("fa-times-circle");

console.log(removeItem);

for (let item of removeItem) {
    item.addEventListener("click", (e) => {

        e.preventDefault();
    //console.log(item);
    //console.log(item.dataset.supp);
    // page.removeItem(item.dataset.supp);
    
    page.removeItem(item.dataset.code);
    })

}

let printBtn = document.getElementById("print");
printBtn.addEventListener("click", () => {
    page.print();
})

