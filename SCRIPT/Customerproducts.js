import { Product } from "./addCustomerProduct.js";
import { ViewsingleProduct } from "./CustomerSingleProducts.js";
import { getDataSet } from "./getDataSet.js";

window.addEventListener('DOMContentLoaded', () => {

    let addProduct = new Product();

        addProduct.displayAll();

        let viewProducts = document.querySelectorAll(".pro");

        console.log("ViewProducts",viewProducts);

        for(let viewProduct of viewProducts) {
            // btn.addEventListener("click", function(){
                
            //     console.log(this)
            // })
            viewProduct.addEventListener("click", function() {
    
            //    let  tableCode = this.dataset.codeTable;
    
            //     console.log(tableCode);
            //     let ViewTable = new viewTable();
            //     ViewTable.display(tableCode);

            console.log("viewProduct",viewProduct);

            console.log("codeViewProduct",this.dataset.product);

            let singleproduct1 = new ViewsingleProduct();

            singleproduct1.savesingleProductInfo(this.dataset.product);

            let getDateSet = new getDataSet();

            getDateSet.getDataset(this.dataset.product); // here i save my datasetObject
            
            window.location.href = "./sproduct.html";
            // call display single products

           












            //addProduct.viewsingleProduct(this.dataset.product);

            // let codeProduct = this.dataset.product;

            // let SingleProduct = tabProduct

            // console.log(SingleProduct);
    
                
            })
        }

   
    
    //console.log(viewProducts);

    
})

