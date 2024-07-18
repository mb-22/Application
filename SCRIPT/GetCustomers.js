import { SearchName } from "./searchCustomers.js";

let searchBar = document.getElementById("searchhere");

searchBar.addEventListener('input', (e) => {
let Searching = new SearchName();
Searching.filterData(e);
})


