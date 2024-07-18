import {Search} from './searchBar.js'

let searchBar = document.getElementById("searchBar");

searchBar.addEventListener('input', (e) => {
let Searching = new Search();
Searching.filterData(e);
})


