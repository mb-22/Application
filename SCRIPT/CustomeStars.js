import { Database } from "./database.js";

export class SetStars {

    StarsTab = [];
    StarsObj = {};

    constructor() {
        this.StarsTab = new Database("StarsProducts");

    }

    SetStar(codeStars) {
        
        let myTabStars = this.StarsTab.get();
        console.log("codeStars",codeStars);
        console.log(myTabStars);
        for (let i = 0 ; i < myTabStars.length ; i++) {
            
                if (myTabStars[i].Stars == codeStars) {
                    // let myProducts = this.ProductsTab.getOne(codeProduct);
                    // console.log(myProducts);
                    let myObject = {};
                    let setNumb = codeStars;
                    myTabStars[i].Stars = setNumb;
                    console.log(myTabStars);
    
                    myObject.code = myTabStars[i].code;
                    myObject.Stars = setNumb;
                    myObject.products = myTabStars[i].products;
                    
                    console.log(myObject);
                    // console.log("présent");
                    console.log("i",i);
    
                myTabStars.splice(i,1);
    
                   console.log("cartSave", myTabStars);
    
                   myTabStars.push(myObject);
    
                    console.log("hello",myTabStars);
    
                    localStorage.removeItem('StarsProducts');
    
                    const jsonData = JSON.stringify(myTabStars);
    
                    // 2-) save to localStorage
    
                    localStorage.setItem("StarsProducts", jsonData);
    
                    console.log (myTabStars);
    
                    break;
    
                }

           
          
        }
        // console.log("PRODUCTStab", myTabProduct);
    }
}