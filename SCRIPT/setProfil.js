import { Database } from "./database.js";

export class setProfil {

    ProfilTab=[];
    ProfilObj = {};
    ClickedBtn = [];


    constructor() {
        this.ProfilTab = new Database("Admin");
        
    }

    setInfoProfil() {
        let myAdminInfo = this.ProfilTab.get();
        console.log(myAdminInfo);
        let UpdateBtn = document.getElementById("Updates");
        console.log(UpdateBtn);
        UpdateBtn.addEventListener("click", () => {

            localStorage.setItem("clickedBtn",true);
            // console.log("hello");
            let firstName = document.getElementById("firstName")
            let Password = document.getElementById("Password");
            let EmailAdress = document.getElementById("Email");
            this.ProfilObj.code = "admin";
            this.ProfilObj.user = firstName.value;
            this.ProfilObj.password = Password.value;
            console.log(this.ProfilObj);
            this.ProfilTab.save(this.ProfilObj);
            console.log("profil updates well");
            console.log(myAdminInfo);

        })
    }
}