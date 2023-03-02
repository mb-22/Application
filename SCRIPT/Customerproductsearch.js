import { SearchProducts } from "./searcShopCustomer.js";

let searchBar = document.getElementById("searchBar");

searchBar.addEventListener('input', (e) => {
let Searching = new SearchProducts();
Searching.filterData(e);
})


