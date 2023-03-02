/*
IL FAUDRAIT QUE CHAQUE FOIS QU'UN CLIENT ENTRE SES INFORMATIONS, CEUX-CI SE PLACENT DANS UNE BASE DE DONNEES
ET AU MOMENT DE LA CONNEXION, IL NE PEUT ACCEDER A LA PAGE D'ACCEUIL QUE SI LES INFOMATIONS ENTRES DANS LE FORMULAIRE DE CONNEXION SE TROUVE DEJA 
DANS LA BASE DE DONNEES DES CONNEXIONS.
*/ 

import { Database } from "./database.js";

// CLASS CONNEXION

let CustomerId = 0;

const ValidateConnexion = document.getElementById("ValidateConnexion");

export class Connexion {

    UsernameAttributes;
    EmailAttributes;
    PasswordAttributes;
    temps_préparation;
    tabClient = []; 
    tabAdmin = [];
    AdminObj = {};
    ClientObj = {};
    ClientId = 0;

    constructor()
    {
        this.tabClient = new Database('Connexion');
        this.tabAdmin = new Database("Admin");
        // // si les info de l'admin existent déja et que on a cliqué sur le bouton modifier:
        // if(this.tabAdmin.get()) {

            
        //     // if(pressedButton) {
        //     //    // CALL MODIFICATION  AND WITH SAVE WITH SAME KEY : admin
        //     // }
        //     // else {
        //     //    myAdminTable = this.tabAdmin.get();
        //     // }
        // }
        // else {
        //     this.AdminObj.code = "admin";
        //     this.AdminObj.username = "Mboene";
        //     this.AdminObj.password = "1234";
        //     this.tabAdmin.save(this.AdminObj);
        // }
        console.log(this.tabClient);
        
        if (localStorage.getItem("indexConnexion")) {
            CustomerId = localStorage.getItem("indexConnexion");
        }
        else {
            CustomerId = 0;
        }
        this.ClientId += parseInt(CustomerId) + 1;
        
    }

    // INSERT INFORMATIONS OF USER IN tabClient table 

    SignUp(UsernameAttributes, EmailAttributes, PasswordAttributes)
    {
        let p = 0;
        let ClientInformation = this.tabClient.get();
        
        this.ClientObj.code = PasswordAttributes;
        this.ClientObj.User = UsernameAttributes;
        this.ClientObj.UserPassword = PasswordAttributes;
        this.ClientObj.UserMail = EmailAttributes;
        this.ClientObj.index = this.ClientId;
        console.log(this.ClientObj);
        if (ClientInformation.length == 0 ) {
            alert("bonjour");
            localStorage.setItem("indexConnexion", this.ClientId);
            this.tabClient.save(this.ClientObj);
            alert("Bienvenue, vos informations ont bien été ajoutée MERCI !!!");

            window.location.href = "./index.html";
        }
        for (let i = 0 ; i < ClientInformation.length ; i++)
        {
            //console.log(ClientInformation[i].User, ClientInformation[i].UserPassword)
            if (ClientInformation[i].UserMail == EmailAttributes || ClientInformation[i].UserPassword == PasswordAttributes)
            {
                // CONNEXION OBJECTS

                p = 0;

                ValidateEmail.innerText = "This Password or Email adress is already taken";
                //alert("Connexion établie");
                break;
            }
            else 
            {
                p = 1;
                // localStorage.setItem("indexConnexion", this.ClientId);
                // this.tabClient.save(this.ClientObj);
                // alert("Bienvenue, vos informations ont bien été ajoutée MERCI !!!");

                // window.location.href = "./index.html";
             
            }
        }
        
        if (p == 1) {

            alert("bonjour");
            localStorage.setItem("indexConnexion", this.ClientId);
            this.tabClient.save(this.ClientObj);
            alert("Bienvenue, vos informations ont bien été ajoutée MERCI !!!");

            window.location.href = "./index.html";
        }
        
    }

    // RECOVER INFORMATIONS SAVED IN tabClient and compare it with informations enter by user

    SignIn(UsernameAttributes, PasswordAttributes)
    {
        let ClientInformation = this.tabClient.get();

        //console.log(ClientInformation);

        let AdminInfo = this.tabAdmin.get();

        // console.log(AdminInfo);

        if (UsernameAttributes == AdminInfo[0].user && PasswordAttributes == AdminInfo[0].password)
            {
                
               alert("Welcome Administrator");
               window.location.href = "./Adminshop.html";
            }
        else
        {
            for (let i = 0 ; i < ClientInformation.length ; i++)
            {
                //console.log(ClientInformation[i].User, ClientInformation[i].UserPassword)
                if (ClientInformation[i].User == UsernameAttributes && ClientInformation[i].UserPassword == PasswordAttributes)
                {
                    ValidateConnexion.innerText = " ";
                    localStorage.setItem("User_id",ClientInformation[i].index)
                    //alert("Connexion établie");
                    window.location.href = "./shop.html";
                    break;
                }
                else 
                {
                    ValidateConnexion.innerText = "Sorry we don't recognize you";
                }
            }
        }
    }
}
