import { Database } from "./database.js";

export class GetCartInfo {

    CartInfoTab = [];
    CartObj = {};
    CartTab = [];

    constructor() {
        // this.CartInfoTab = new Database('CartInfoSaved');
        
        this.CartTab = new Database('CartInfo');
        console.log("CartInfoSaved", this.CartTab);
    }

    getInfo() {

        let Informations = this.CartTab.get();
        console.log(Informations);
        let Position = document.getElementById("cart-add");
        console.log(Position);

        let AnotherPosition = document.getElementById("myCartProduct");
        console.log(AnotherPosition);

        let totalPrice = 0;
        

        Informations.map((Info) => {
            
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
    removeItem(code1, code) {
        console.log("indexRemove", code1);

        let Item = this.CartTab.getOne(code);

        console.log("getOne", Item);

        let allItem = this.CartTab.get();

        let choice = prompt("voulez vous vraiment retirer ce produit du panier?");

            if(choice.toLowerCase() == "oui") {

                allItem.splice((code1 - 1), 1);

                console.log(allItem);

                localStorage.removeItem('CartInfo');

                const jsonData = JSON.stringify(allItem);

                // save to localStorage

                localStorage.setItem("CartInfo", jsonData);

                alert("Item remove well ");

                // console.log(myObject)

                //this.orderTab.save(myObject);
                
                // this.orderTab.save(this.myObject); 
            }  
    }

    
    print() {
        let MyPrintBtn = document.getElementById("print");
        MyPrintBtn.addEventListener("click", () => {
            console.log("printing");
            window.print();
        } )
    }
    



}