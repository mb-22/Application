import { Product } from "./addCustomerProduct.js";
import { ViewsingleProduct } from "./CustomerSingleProducts.js";



window.addEventListener('DOMContentLoaded', () => {

    let addProduct = new Product();

        let viewProducts = document.querySelectorAll(".pro");

        console.log(viewProducts);

        for(let viewProduct of viewProducts) {

            viewProduct.addEventListener("click", function() {

            console.log(viewProduct);

            console.log(viewProduct.dataset.product);

            let ex = document.getElementById("all");

            console.log(ex);
            
            })
        }

   
    

    
})

