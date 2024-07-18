import { addCategory } from "./addCategory.js";

let DELCategoryBtn = document.getElementById("deleteCategory");

DELCategoryBtn.addEventListener("click", ( ) => {
    let Category = new addCategory();
    Category.DeleteCategory();
})

