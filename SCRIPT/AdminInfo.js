import { Database } from "./database.js";

export class Administrator{

    AdminTab = [];
    AdminObj = {};

    constructor() {
       this.AdminTab = new Database("Admin");
       
    }

    get_Or_Set_Admin_Info() {
        let checked = localStorage.getItem("clickedBtn");
        console.log(checked);
        
        let Profil = document.getElementById("Updates");
        // Profil.addEventListener("click", () => {
        //     console.log("Updates");
        // })
        // console.log("Profil", Profil);

        let MyAdmin = this.AdminTab.get();
        console.log("hello Admin");
        if (checked == "true") {
            console.log("hi");
        }
        else {
            this.AdminObj.code = "admin";
            this.AdminObj.user = "Mboene";
            this.AdminObj.password = "1234";
            this.AdminTab.save(this.AdminObj);
        }
    }
    
}