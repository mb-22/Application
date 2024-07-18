import { Databases1 } from "./databasesCart.js";
import {Database} from "./database.js"

export class setCartPage{

    GetPageCart = [];
    GetPageObj = {};
    Get_page_cart = [];
    Get_obj_cart = {};


    constructor () {
        this.GetPageCart = new Databases1("TabTabCart");
        this.Get_page_cart = new Database();
    }

    getPage() {
        let connected = localStorage.getItem("ConnectedAndFind");
        console.log(connected);

        let PageCart = this.GetPageCart.get();
        console.log(PageCart);
        // console.log(PageCart[connected].length);
        let cart = document.getElementById("cart");
        console.log(cart);
        if (PageCart[connected].length == 0) {
            alert("Your Cart is Empty Add Products in Your Cart");
        }
        else {
            console.log("not Empty");

        let Position = document.getElementById("cart-add");
        console.log(Position);

        let AnotherPosition = document.getElementById("myCartProduct");
        console.log(AnotherPosition);

        let totalPrice = 0;
        
        PageCart[connected].map((Info) => {
            
            let myTr = document.createElement("tr");
            myTr.innerHTML = `<td>
            <a href=""><i class="fa fa-times-circle" aria-hidden="true" data-supp = "${Info.index}" data-code = "${Info.code}"></i></a> 
            </td>
            <td><img src="img/products/${Info.fileName}" alt=""></td>
            <td>${Info.TradName}</td>
            <td>${Info.Price}</td>
            <td>${Info.Qty}</td>
            <td>${Info.Qty * Info.Price}</td>`
            AnotherPosition.appendChild(myTr);
            totalPrice += (Info.Qty * Info.Price);
            

        })

        let removeItems = document.getElementsByClassName("removeItem");

        console.log(removeItems);

        console.log(totalPrice);

        Position.innerHTML = `   
        
        <div id="subtotal">
        <h3>Cart totals</h3>
        <table>
            <tr>
                <td>
                    Cart Subtotal
                </td>
                <td>
                    ${totalPrice}
                </td>
            </tr>

            <tr>
                <td>
                    Shipping
                </td>
                <td>
                  Free
                </td>
            </tr>
            <tr>
                <td><strong>Total</strong></td>
                <td><strong>${totalPrice}</strong></td>

            </tr>
        </table>
        <button class="normal" id = "print">Print Your Cart</button>
    </div>`

        }
    }
//////// A REVOIR //////////////////////////////
    // removeItem(code1) {
    //     let connected = localStorage.getItem("ConnectedAndFind");
    //     console.log(connected);
    //     let PageCart = this.GetPageCart.get();
    //     console.log(PageCart);

    //     console.log("indexRemove", code1);

    //     let allItem = PageCart[connected];

    //     let choice = prompt("voulez vous vraiment retirer ce produit du panier?");

    //         if(choice.toLowerCase() == "oui") {

    //             allItem.splice((code1 - 1), 1);

    //             console.log(allItem);
    //             console.log(PageCart);

    //             localStorage.removeItem("TabTabCart");

    //             const jsonData = JSON.stringify(PageCart);

    //             // save to localStorage

    //             localStorage.setItem("TabTabCart", jsonData);

    //             // alert("Item remove well ");

    //             // console.log(myObject)

    //             // this.orderTab.save(myObject);
                
    //             // this.orderTab.save(this.myObject); 
    //         }  
    // }

    
    removeItem(codeProduct)
    {

        // let myProduct = this.tabProducts.get();
        let connected = localStorage.getItem("ConnectedAndFind");
        console.log(connected);
        let PageCart = this.GetPageCart.get();
        console.log(PageCart);
        let allItem = PageCart[connected];
        console.log(allItem);
        // console.log(PageCart[connected][1])
        for (let i = 0 ; i < PageCart[connected].length ; i++) {
            
            if (PageCart[connected][i].name == codeProduct) {
                console.log("trouvé", PageCart[connected][i], "index",i);
                let choice = prompt("voulez vous vraiment retirer ce produit du panier?");

                if(choice.toLowerCase() == "oui") {

                    allItem.splice((i), 1);

                    console.log(allItem);
                    // console.log(PageCart);

                    localStorage.removeItem("TabTabCart");

                    const jsonData = JSON.stringify(PageCart);

                    // save to localStorage

                    localStorage.setItem("TabTabCart", jsonData);

                    // alert("Item remove well ");

                    // console.log(myObject)

                    // this.orderTab.save(myObject);
                    
                    // this.orderTab.save(this.myObject); 
                }  
            }
        }
    }
    


    print() {
        window.print();
    }
}