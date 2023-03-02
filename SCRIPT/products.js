import { Products } from "./addProduct.js";


// DECLARING VARIABLE

const Image = document.getElementById("fileName");

const name = document.getElementById("products_name");

const category = document.getElementById("category");

const price = document.getElementById("products_price");

const description = document.getElementById("description");

const addButton = document.getElementById("add");

const Image1 = document.getElementById("fileName1");

const Image2 = document.getElementById("fileName2");

const Image3 = document.getElementById("fileName3");

const TotalQty = document.getElementById("Qtyy");

const TotalName = document.getElementById("products_Trad");

window.addEventListener('DOMContentLoaded', () => {

    let addProduct = new Products();

        addProduct.display();

        // EDIT PRODUCTS

        let editBtn = document.querySelectorAll(".fa-pencil");
    
        for(let btn of editBtn ) {

            btn.addEventListener("click", function(e){

                e.preventDefault();
                
                //console.log(this.dataset.product);
    
                addProduct.set(this.dataset.product);

                let addEditBtn = document.getElementById("edit");

                addEditBtn.addEventListener("click", (e) => {

                    e.preventDefault();

                    // REDECLARING VARIABLES

                    const Image = document.getElementById("fileName");

                    const name = document.getElementById("products_name");

                    const category = document.getElementById("category");

                    const price = document.getElementById("products_price");

                    const description = document.getElementById("description");

                    let parentDiv = document.getElementById("editProduct");

                    const Image1 = document.getElementById("fileName1");

                    const Image2 = document.getElementById("fileName2");

                    const Image3 = document.getElementById("fileName3");

                    const TotalQty = document.getElementById("Qtyy");

                    const TotalName = document.getElementById("products_Trad");
                    
                    //console.log(name.value);

                    if (Image.value.length == 0 || Image1.value.length == 0 || Image2.value.length == 0 || Image3.value.length == 0 ||category.value.length == 0 || name.value.length == 0 || price.value.length == 0 || TotalQty.value == 0 || description.value == 0, TotalName.value == 0)
                    {
                        alert("please fill all input");
                    }
                    else 
                    {
                        //alert("thanks for all");
                
                        addProduct.ajouter(Image.value,Image1.value, Image2.value, Image3.value, category.value, name.value, price.value, description.value, TotalQty.value, TotalName.value);
                
                        // alert("set informations done");
                        
                        parentDiv.style.display = "none";

                        

                    }
                
                
                });
                
    
            })
    
        } 

        // DELETE PRODUCTS

        let suppBtn = document.querySelectorAll(".fa-trash");

        const products = document.querySelectorAll(".pro");

        for (let i = 0 ; i < suppBtn.length ; i++)
        {
            suppBtn[i].addEventListener("click", function(e) {

                e.preventDefault();

                console.log(products[i].dataset.del);

                // addProduct.delete(products[i].dataset.del);

                addProduct.delete(products[i].dataset.product);

            })
        }
    
        // for(let btn of suppBtn ) {

        //     btn.addEventListener("click", function(e){

        //         e.preventDefault();

        //         console.log(products);

        //         console.log(this.dataset.index);
                
        //         //addProduct.delete(this.dataset.product);
    
        //     })
    
        // } 

        // DISPLAY SINGLE PRODUCT

            


    

})

addButton.addEventListener("click", (e) => {

    e.preventDefault();

    if (Image.value.length == 0 || Image1.value.length == 0 || Image2.value.length == 0 || Image3.value.length == 0 ||category.value.length == 0 || name.value.length == 0 || price.value.length == 0 || TotalQty.value == 0 || description.value == 0, TotalName.value == 0)
    {
            alert("please fill all input");
    }
    else 
    {
        //alert("thanks for all");
        let addProduct = new Products();

        addProduct.ajouter(Image.value,Image1.value, Image2.value, Image3.value, category.value, name.value, price.value, description.value, TotalQty.value, TotalName.value);
                

    }

    

})


