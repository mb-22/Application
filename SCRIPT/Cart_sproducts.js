import { Databases1 } from "./databasesCart.js";
import { Database } from "./database.js";

let NumCart = 0 ;
export class Cart_sproducts {

    GetPageCart = [];
    GetPageObj = {};
    Cart = [];
    CartObj = {};
    CartId = 0;

    constructor () {
        this.GetPageCart = new Databases1("TabTabCart");
       this.Cart = new Database("productsTab");
       if (localStorage.getItem("index")) {
        NumCart = localStorage.getItem("index");
       }
       else {
        NumCart = 0;
        }
        this.CartId += parseInt(NumCart) + 1;
        localStorage.setItem("index", this.CartId);
    }

    InfoCart(dataset, Input, Select) {
        /* ici, on connait déja l'identifiant de l'utilisateur qui est connécté, il suffit
        1-) récupérer son tableau,
        2-) si l'utilisateur à cliqué sur le bouton add TO CART , créer l'object avec les attibuts nécessaires et le placer dans le tableau.
        */
       
       
        let connected = localStorage.getItem("ConnectedAndFind");
        console.log(connected);

        let PageCart = this.GetPageCart.get();
        console.log(PageCart);
        // console.log(PageCart[connected].length);

        // let AddToCartBtn = document.getElementById("CustomerCart");
        // console.log(AddToCartBtn);
        // AddToCartBtn.addEventListener("click", () => {
            // console.log(AddToCartBtn.dataset.cart);
            let sproduct = this.Cart.getOne(dataset);
            let myObject = {};
            console.log(sproduct);
            myObject.code = sproduct[0].name;
            myObject.TradName = sproduct[0].TradName;
            myObject.Price = sproduct[0].Price;
            myObject.Qty = Input;
            myObject.Size = Select;
            myObject.fileName = sproduct[0].fileName;
            myObject.index = this.CartId;
            myObject.name = sproduct[0].name;
            console.log(myObject);
            // PageCart[connected].push(this.GetPageObj);
            // suppresion de l'élément se trouvant à la position1
            
            PageCart[connected].push(myObject);
            console.log(PageCart);
            localStorage.removeItem("TabTabCart");

                const jsonData = JSON.stringify(PageCart);

                // 2-) save to localStorage

            localStorage.setItem("TabTabCart", jsonData);

            console.log(PageCart);

            localStorage.setItem("index", this.CartId);


    }

 //////A REVOIR//////
    removeItem(code1) {

        
        let connected = localStorage.getItem("ConnectedAndFind");
        console.log(connected);
        let PageCart = this.GetPageCart.get();
        console.log(PageCart);

        console.log("indexRemove", code1);

        let allItem = PageCart[connected];

        let choice = prompt("voulez vous vraiment retirer ce produit du panier?");

            if(choice.toLowerCase() == "oui") {

                allItem.splice((code1 - 1), 1);

                console.log(allItem);
                console.log(PageCart);

                localStorage.removeItem("TabTabCart");

                const jsonData = JSON.stringify(PageCart);

                // save to localStorage

                localStorage.setItem("TabTabCart", jsonData);

                alert("Item remove well ");

                // console.log(myObject)

                // this.orderTab.save(myObject);
                
                // this.orderTab.save(this.myObject); 
            }  
    }

    
    modifyProductQtyy(dataset, Input) { // code = dataset_product
      
       
        let connected = localStorage.getItem("ConnectedAndFind");
        console.log(connected);
      
        let PageCart = this.GetPageCart.get();
        console.log(PageCart);


        let allItem = PageCart[connected];
        console.log(allItem);

        for ( let i = 0 ; i < allItem.length ; i++) {
                if (allItem[i].code == dataset) {
                    let myObject = {};
                    let numb = parseInt(allItem[i].Qty) + parseInt(Input);
                    console.log(numb);
                    allItem[i].Qty = numb;
                    console.log(allItem[i]);
                  
                    myObject.Price = allItem[i].Price;
    
                    myObject.code = allItem[i].code;
    
                    myObject.name = allItem[i].name;

                    myObject.TradName = allItem[i].TradName;
    
                    myObject.fileName = allItem[i].fileName;
    
                    myObject.index = i;
    
                    myObject.Qty = numb;
    
                    myObject.Size = allItem[i].Size;
    
                    console.log("CartObjNew",myObject);
    
                    //1-) on supprime l'élément se trouvant à la position i dans le CartTab avec splice
    
                    console.log("i",i);
    
                    allItem.splice(i,1);
    
                    console.log("cartTable", allItem);
    
                    allItem.push(myObject);
    
                    console.log("hello",allItem);
    
                    // 1.2) Supprimer le tableau carréement
    
                    localStorage.removeItem("TabTabCart");

                    const jsonData = JSON.stringify(PageCart);
    
                    // save to localStorage
    
                    localStorage.setItem("TabTabCart", jsonData);
    
                    console.log (PageCart);

                    localStorage.setItem("index", this.CartId);

                    break;
                        }
                        
                       
             }
    
        }


}