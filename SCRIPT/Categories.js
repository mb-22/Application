import { addCategory } from "./addCategory.js";

let ADDCategoryBtn = document.getElementById("addCategory");

ADDCategoryBtn.addEventListener("click", ( ) => {
    let Category = new addCategory();
    Category.setCategory();
})

let TrashBtn = document.getElementsByClassName("fa-trash");

for (let item of TrashBtn) {
    item.addEventListener("click", () => {
        let Category = new addCategory();
           Category.DeleteCategory(item.dataset.del);
    })
}