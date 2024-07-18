import { Database } from "./database.js";
import { Databases1 } from "./databasesCart.js";


/*SETCART DOIS ETRE EN MESURE DE RECUPERER TOUTES LES INFORMATIONS CONCERNANT LE PRODUIT POUR LEQUEL IL A ETE CLIQUE */ 

let NumCart = 0;
export class Cart {
    
    CartTab = [];
    CartObj = {};
    ProductTab = [];
    CartId = 0 ;

    constructor() {

        this.CartTab = new Databases1("TabTabCart");
        this.ProductTab = new Database("productsTab");
        if (localStorage.getItem("index")) {
            NumCart = localStorage.getItem("index");
        }
        else {
            NumCart = 0;
        }
        this.CartId += parseInt(NumCart) + 1;
        console.log("Cart", this.CartTab);
        localStorage.setItem("index", this.CartId);
    
    }

    setSingleProductInfo(code, Size, Qty) {

        let SingleProductInfo = this.ProductTab.getOne(code);
        console.log("for setSingleProductInfo", SingleProductInfo);

        // SAVE SINGLE DATA INFO IN DATABASE

        this.CartObj.Price = SingleProductInfo[0].Price;

        this.CartObj.code = SingleProductInfo[0].code;

        this.CartObj.name = SingleProductInfo[0].name;

        this.CartObj.fileName = SingleProductInfo[0].fileName;

        this.CartObj.index = this.CartId;

        this.CartObj.Qty = Qty;

        this.CartObj.Size = Size;

        console.log(this.CartObj);

       this.CartTab.save(this.CartObj);

      
    }
    

    searchSingleProduct(code, codeInput) {
        console.log("COdedataset", code)
        let myTabCart = this.CartTab.get();

        // for (let item of myTabCart) {
        //     console.log("item",item.code, item.Qty);
        //     let numb = parseInt(item.Qty) + 1;
        //     // console.log(numb);
        //     if (code == item.code)
        //     {
        //         item.Qty = numb;
        //         console.log(item);
        //         break;
        //     }
        //     else {
        //         continue;
        //     }
        // }
        for ( let i = 0 ; i < myTabCart.length ; i++) {
            if (myTabCart[i].code == code) {
                let myObject = {};
                let numb = parseInt(myTabCart[i].Qty) + parseInt(codeInput);
                console.log(numb);
                myTabCart[i].Qty = numb;
                console.log(myTabCart[i]);
              
                myObject.Price = myTabCart[i].Price;

                myObject.code = myTabCart[i].code;

                myObject.name = myTabCart[i].name;

                myObject.fileName = myTabCart[i].fileName;

                myObject.index = i;

                myObject.Qty = numb;

                myObject.Size = myTabCart[i].Size;

                console.log("CartObjNew",myObject);

                //1-) on supprime l'élément se trouvant à la position i dans le CartTab avec splice

                console.log("i",i);

                 myTabCart.splice(i,1);

                console.log("cartTable", myTabCart);

                myTabCart.push(myObject);

                console.log("hello",myTabCart);

                // 1.2) Supprimer le tableau carréement

                localStorage.removeItem('CartInfo');

                const jsonData = JSON.stringify(myTabCart);

                // 2-) save to localStorage

                localStorage.setItem("CartInfo", jsonData);

                console.log (myTabCart);

                // //3-) parse table to localStorage

                // // let ParseCart = JSON.parse(myTabCart);

                // // // 4-) Push the object
                // // console.log(ParseCart);
                

                // // 5-) saved push table in localStorage
                // localStorage.removeItem('CartInfo');

                // // localStorage.setItem("CartInfo",myTabCart);


                // // this.CartTab.save(this.CartObj);
                break;
                    }
                    
                   
         }
              

        }

    }
   


