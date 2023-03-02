import { Database } from "./database.js";

let NumCategory = 0;
export class addCategory {

    CategoryTab = [];
    CategoryObj = {};
    CategoryId = 0;

    constructor () {
        this.CategoryTab = new Database("Categories");

        if (localStorage.getItem("indexCategory")) {
            NumCategory = localStorage.getItem("indexCategory");
        }
        else {
            NumCategory = 0;
        }
        this.CategoryId += parseInt(NumCategory) + 1;
        
    }

    setCategory() {
        let CategoryInput = document.getElementById("categoryName");
        console.log(CategoryInput.value);

        // before creating objects, verify if it's already exists in table


        let Categories = this.CategoryTab.get();
        console.log(Categories);
        
        if (Categories.length == 0) {
            this.CategoryObj.code = this.CategoryId;
                this.CategoryObj.name = CategoryInput.value;
                console.log(this.CategoryObj);
                this.CategoryTab.save(this.CategoryObj);
                alert("Category saved well thanks");
                localStorage.setItem("indexCategory", this.CategoryId);
        }
        else {
let p = 0;
        for (let item of Categories) {
            if (item.name == CategoryInput.value) {
                alert("This Category already exists");
                p = 0;
                break;
            }
            else {
                p = 1;
                continue;
            }
        }
        if(p == 1) {
            this.CategoryObj.code = this.CategoryId;
                this.CategoryObj.name = CategoryInput.value;
                console.log(this.CategoryObj);
                this.CategoryTab.save(this.CategoryObj);
                alert("Category saved well thanks");
                localStorage.setItem("indexCategory", this.CategoryId);
                
        }


        }
        
        
    }

    DisplayCategory() {
 
        let MyDivParent = document.getElementById("categoryDiv");
        let Categories = this.CategoryTab.get();

        Categories.map((item) => {

            let div = document.createElement("div");
            div.setAttribute("class", "btn_value btn");
            div.addEventListener("click", () => {

                const allButtons = document.getElementsByClassName("btn_value");
                const allProduct = document.getElementsByClassName("pro");
                console.log(allProduct);
                    for (let i = 0 ; i < allProduct.length ; i++)
                        {
                            if (allProduct[i].classList.contains(item.name.toLowerCase()))
                        {
            
                                console.log(allProduct[i]);
                                allProduct[i].classList.remove("hide");
                                
                        }
                            else
                                {
                                    allProduct[i].classList.add("hide");
                                }
                            }
            
    
                
            })
            div.innerHTML = `${item.name}`
            MyDivParent.appendChild(div);

        })

    }

    DeleteCategory() {

        let p =0;
        let CategoryInput = document.getElementById("categoryNameDel");
        console.log(CategoryInput.value);

        // before creating objects, verify if it's already exists in table


        let Categories = this.CategoryTab.get();
        console.log(Categories);

        for (let item of Categories) {
            if (item.name == CategoryInput.value) {

                localStorage.setItem("ItemCategorySupp", item.code)
                console.log(item.code);
                p = 1;
                break;
            }
             else {
                p = 0;
                continue;
             }
        }

        if (p == 0) {
            alert("This Category doesn't exits you need to add it");
        }

        if ( p == 1 ) {

            let CodeSupp = localStorage.getItem("ItemCategorySupp");
            console.log(CodeSupp);

            Categories.splice((CodeSupp - 1), 1);
            console.log(Categories);

            localStorage.removeItem("Categories");

           

            const jsonData = JSON.stringify(Categories);

            console.log(jsonData);

          

            //     // save to localStorage

            localStorage.setItem("Categories", jsonData);

            // console.log("hiii");
        }
        
        
    }
}