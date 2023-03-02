import { Database } from "./database.js";

export class removeQtyy {

    ProductsTab = [];
    ProductsObj = {};
    DataSETtAB = [];

    constructor() {
        this.ProductsTab = new Database("productsTab");
        this.DataSETtAB = new Database("dataset");
    }

    removeQtyyy(codeQtyy, codeProduct) {
        let myTabProduct = this.ProductsTab.get();
        console.log(codeQtyy);
        console.log(codeProduct);
        // let p = 0;
        let check = false;
        let dataset = this.DataSETtAB.get();
        let code = dataset[0].dataset;
        console.log(code);
        let myTabProduct1 = this.ProductsTab.getOne(code);
        console.log(myTabProduct[0].TotalQty)
        if (myTabProduct1[0].TotalQty > parseInt(codeQtyy)) {
            
         check = true;

        }

        else {
            check = false;
        }

        if (check) {
            localStorage.setItem("QtyInsufficient", false);
            console.log("OKAY");
            for (let i = 0 ; i < myTabProduct.length ; i++) {

                if (myTabProduct[i].code == codeProduct) {
                    // let myProducts = this.ProductsTab.getOne(codeProduct);
                    // console.log(myProducts);
                    let myObject = {};
                    let removeNumb = (parseInt(myTabProduct[i].TotalQty) - codeQtyy);
                    myTabProduct[i].TotalQty = removeNumb
                    console.log(myTabProduct);
    
                    myObject.code = codeProduct;
                    myObject.name = myTabProduct[i].name;
                    myObject.index = i;
                    myObject.category = myTabProduct[i].category;
                    myObject.Price = myTabProduct[i].Price;
                    myObject.similarlyfile1 = myTabProduct[i].similarlyfile1;
                    myObject.similarlyfile2 = myTabProduct[i].similarlyfile2;
                    myObject.similarlyfile3 = myTabProduct[i].similarlyfile3;
                    myObject.fileName = myTabProduct[i].fileName;
                    myObject.description = myTabProduct[i].description;
                    myObject.TotalQty = removeNumb;
                    console.log(myObject);
                    console.log("i",i);
    
                    myTabProduct.splice(i,1);
    
                   console.log("cartProducts", myTabProduct);
    
                   myTabProduct.push(myObject);
    
                    console.log("hello",myTabProduct);
    
                    localStorage.removeItem('productsTab');
    
                    const jsonData = JSON.stringify(myTabProduct);
    
                    // 2-) save to localStorage
    
                    localStorage.setItem("productsTab", jsonData);
    
                    console.log (myTabProduct);
    
                }
            }
        }

        else {
            alert("Our stock Quantity is deficient");
            localStorage.setItem("QtyInsufficient", true);
        }
        // for (let i = 0 ; i < myTabProduct.length ; i++) {
            // if (myTabProduct[i].TotalQty > codeQtyy) {
                // p = 1;
                // if (myTabProduct[i].code == codeProduct) {
                //     // let myProducts = this.ProductsTab.getOne(codeProduct);
                //     // console.log(myProducts);
                //     let myObject = {};
                //     let removeNumb = (parseInt(myTabProduct[i].TotalQty) - codeQtyy);
                //     myTabProduct[i].TotalQty = removeNumb
                //     console.log(myTabProduct);
    
                //     myObject.code = codeProduct;
                //     myObject.name = myTabProduct[i].name;
                //     myObject.index = i;
                //     myObject.category = myTabProduct[i].category;
                //     myObject.Price = myTabProduct[i].Price;
                //     myObject.similarlyfile1 = myTabProduct[i].similarlyfile1;
                //     myObject.similarlyfile2 = myTabProduct[i].similarlyfile2;
                //     myObject.similarlyfile3 = myTabProduct[i].similarlyfile3;
                //     myObject.fileName = myTabProduct[i].fileName;
                //     myObject.description = myTabProduct[i].description;
                //     myObject.TotalQty = removeNumb;
                //     console.log(myObject);
                //     console.log("i",i);
    
                //     myTabProduct.splice(i,1);
    
                //    console.log("cartProducts", myTabProduct);
    
                //    myTabProduct.push(myObject);
    
                //     console.log("hello",myTabProduct);
    
                //     localStorage.removeItem('productsTab');
    
                //     const jsonData = JSON.stringify(myTabProduct);
    
                //     // 2-) save to localStorage
    
                //     localStorage.setItem("productsTab", jsonData);
    
                //     console.log (myTabProduct);
    
                // }
// break
    //         }
    //         else {
    //             p = 0;
    //             // continue;
    //         }
    //     }
    //     // }

    //     if (p == 1) {
    //         return true;
            
    //     }
    //     else {
    //         return false;
    //     }
    //     // console.log("PRODUCTStab", myTabProduct);
    }
}