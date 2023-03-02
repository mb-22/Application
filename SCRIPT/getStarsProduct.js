import { Database } from "./database.js";

export class getStars {

    tabProducts = [];
    ProductsObj = {};
    tabStarsProducts = [];
    Stars_Products_Obj = {};

    constructor () {
        this.tabProducts = new Database("dataset");
        this.tabStarsProducts = new Database("StarsProducts");
    }

    getStarsValue(code) {
    console.log(code);
    let myClickedTab = this.tabProducts.get();
    console.log(myClickedTab);
    this.Stars_Products_Obj.code = myClickedTab[0].dataset;
    this.Stars_Products_Obj.Stars = code;
    this.Stars_Products_Obj.products = myClickedTab[0].dataset;
    console.log(this.Stars_Products_Obj);
    this.tabStarsProducts.save(this.Stars_Products_Obj);
    }
}