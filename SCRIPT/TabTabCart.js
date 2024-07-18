import { Databases1 } from "./databasesCart.js";

export class TabTabCart {

    Tab_tab_Cart = [];
    Tab_Tab_Cart_Obj = {};

    constructor() {
        this.Tab_tab_Cart = new Databases1("TabTabCart");
    }

    DisplayCartPage() {
        let p = 0;
        let Get_Tab_Cart = this.Tab_tab_Cart.get();
        let User_id = localStorage.getItem("User_id");
        console.log(User_id);
        for (let i = 0 ; i < Get_Tab_Cart.length ; i++) {
            console.log(i,parseInt(i)+1);
            console.log(p);
            if((parseInt(i)+1) == User_id) {
                
                p = 1;
                // alert("ruthyyy");
                break
            }
            else {
                p = 0;
                continue;
                
            }
        }
        if (p == 1) {
            // p == 1 alors on a trouvé l'utilisateur et on garde son id dans le localstorage 
            localStorage.setItem("ConnectedAndFind", User_id - 1)
            
            // if (Get_Tab_Cart[(parseInt(User_id) - 1)].length == 0) {
                
            //     alert("Your Cart is Empty");
            //     // DISPLAY AN EMPTY CART
            // }
           
            console.log("trouvé");
            // console.log(Get_Tab_Cart[(1)].length)
        }
        else {
            let CartItem = [];
            Get_Tab_Cart.push(CartItem);
            localStorage.removeItem("TabTabCart");
            const jsonData = JSON.stringify(Get_Tab_Cart);

            // save to localStorage
    
            localStorage.setItem("TabTabCart", jsonData);

            console.log(Get_Tab_Cart);
            
            console.log("Tableau non trouvé");
        }
    }
}