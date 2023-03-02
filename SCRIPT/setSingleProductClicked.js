import { Database } from "./database.js";

export class SingleProductCart {

    Cart = [];
    CartObj = {};

    constructor() {
        this.Cart = new Database("AddCartClicked");
        this.tabProducts = new Database('productsTab');
    }

    savesingleProductInfo(code) {

        console.log(code);
       
       let mysingleProduct52 = this.tabProducts.getOne(code);

       console.log(mysingleProduct52);

       this.CartObj.Price = mysingleProduct52[0].Price;

       this.CartObj.category = mysingleProduct52[0].category;

       this.CartObj.code = mysingleProduct52[0].code;

       this.CartObj.description = mysingleProduct52[0].description;

       this.CartObj.fileName= mysingleProduct52[0].fileName;

       this.CartObj.similarlyfile1 = mysingleProduct52[0].similarlyfile1;

       this.CartObj.similarlyfile2 = mysingleProduct52[0].similarlyfile2;

       this.CartObj.similarlyfile3 = mysingleProduct52[0].similarlyfile3;

       this.CartObj.name = mysingleProduct52[0].name;

       this.CartObj.TradName = mysingleProduct52[0].TradName;


       console.log(this.CartObj);

       this.Cart.save(this.CartObj);

       



   }


}