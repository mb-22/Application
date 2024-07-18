import { Database } from "./database.js";

export class DisplayCategory {

    CatTab = [];
    CatObj = {};

    constructor () {
        this.CatTab = new Database("Categories");

    }

    DisplayCategory() {
        let Select = document.getElementById("category");
        let Categories = this.CatTab.get();

        for (let i = 0 ; i < Categories.length ; i++) {


            let myOption = document.createElement("option");
            myOption.setAttribute("value", Categories[i].name);
            let myOptionValue = document.createTextNode(Categories[i].name)
            myOption.appendChild(myOptionValue);
           Select.appendChild(myOption);
                
            }
}
}