import { Database } from "./database.js";


export class GetAllInfo {

    ClientsTab = [];
    ProductsTab = [];
    NewsletterTab = [];

    constructor() {
        this.ClientsTab = new Database("Connexion");
        this.ProductsTab = new Database("productsTab");
        this.NewsletterTab = new Database("Newsletter");
        console.log("clients", this.ClientsTab, "Products", this.ProductsTab, "letter", this.NewsletterTab);
    }

    setTotalInfo() {
        let Div = document.getElementById("Details");
        console.log(Div);
        let TotalClients = this.ClientsTab.get();
        let TotalNewsletter = this.NewsletterTab.get();
        let TotalProduts = this.ProductsTab.get();

        console.log("clients", TotalClients.length, "Products", TotalProduts.length, "letter", TotalNewsletter.length);

        Div.innerHTML = `
        <div class="card">
                    <div>
                        <div class="numbers">${TotalClients.length}</div>
                        <div class="cardName">Daily Views</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">${TotalNewsletter.length}</div>
                        <div class="cardName">Comments</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">${TotalProduts.length}</div>
                        <div class="cardName">Products</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="cash-outline"></ion-icon>
                    </div>
                </div>
        `

        // DISPLAY CUSTOMERS INFO

        let tBody = document.getElementById("tbody");
        TotalClients.map((Customer) => {

             let Tr = document.createElement("tr");
             Tr.innerHTML = `
             <td class="username">${Customer.User}</td>
             <td>${Customer.UserMail}</td>
             <td><span class="status delivered" data-user = "${Customer.index}"><ion-icon name="close-circle-outline"></ion-icon></span></td>
             `

             tBody.appendChild(Tr);
        })

        console.log(document.getElementsByClassName("username"));

    }
    removeClient() {
        let TotalClients = this.ClientsTab.get();
        let removeIcons = document.getElementsByClassName("delivered");
        // console.log("removeIcons", removeIcons);
        for (let removeIcon of removeIcons) {
            removeIcon.addEventListener("click", () => {
                console.log(removeIcon.dataset.user);
                let choice = prompt("Voulez vous vraiment supprimer ce client ?");
                if (choice == "oui") {
                    let causes = prompt("Quelle est la cause de cette suppression ?\n1-)Mauvaise Conduite\n2-)Adression\n3-)Personnel\n");
                    
                    // switch(causes) {
                    //     case "Personnel": {
                    //         alert("impossible, we don't delete Customer for customer reason");
                    //         break;
                    //     }
                    //     case "Mauvaise Conduite": {

                    //     }
                    // }
                    
                    if (causes.toLocaleLowerCase() == "personnel") {
                        alert("impossible, we don't delete Customer for customer reason");
                    }
                    if (causes.toLocaleLowerCase() == "mauvaise Conduite" || causes.toLocaleLowerCase() == "adression" ) {
                        /// DELETE USER 
                        
                            TotalClients.splice((removeIcon.dataset.user - 1), 1);
            
                            console.log(TotalClients);
            
                            localStorage.removeItem('Connexion');
            
                            const jsonData = JSON.stringify(TotalClients);
            
                            // save to localStorage
            
                            localStorage.setItem("Connexion", jsonData);

                    }
                    else {

                    }
                }
                

            })
        }
    }
}