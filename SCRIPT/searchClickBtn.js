import { Database } from "./database.js";

export class SearchProduct {

    SearchTab = [];
    SearchObj = {};
    ClickedProduct = []

    constructor () {

        this.ClickedProduct = new Database("AddCartClicked");

    }

    searchClicked(code) {
        
        let p = 0;
        let AlreadyClicked = this.ClickedProduct.get();

        for (let Item of AlreadyClicked) {
            if (code == Item.code) {
                p = 1
            }
            else {
                continue;
            }
        }
        if (p == 1) {
            return true ;
        }
        else {
            return false;
        }
    }
}