/*
IL FAUDRAIT QUE CHAQUE FOIS QU'UN CLIENT SAISI SON ADRESSE E-MAIL DANS L'INPUT, SI LA SYNTAXE EST VALIDE, ALORS IL 
RECOIT EN ALERT MERCI POUR VOTRE PARTICIPATION ADRESSE EMAIL ENVOYE
ET CHAQUE ADRESSE EST SAUVEGARDE DANS LE LOCAL STORAGE.
*/ 

import { Database } from "./database.js";

let NumNews = 0;
export class Newsletter {

    EmailAttributes;
    tabNews = []; 
    NewsObj = {};
    NewsId = 0;

    constructor()
    {
        this.tabNews = new Database('Newsletter');
        
        if (localStorage.getItem("indexNews")) {
            NumNews = localStorage.getItem("indexNews");
        }
        else {
            NumNews = 0;
        }
        this.NewsId += parseInt(NumNews) + 1;
        localStorage.setItem("indexNews",this.NewsId);
        console.log(this.tabNews);
    }

    // INSERT EMAIL IN DATABASE

    emailInsert(EmailAttributes)
    {
        // FONCTION TO VALIDATE EMAIL ADRESS

    let rEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const rEmailValue = rEmail.test(EmailAttributes);

    if (rEmailValue)
    {
        this.NewsObj.code = this.NewsId;
        this.NewsObj.Mail = EmailAttributes;
        console.log(this.NewsObj);
        this.tabNews.save(this.NewsObj);
        localStorage.setItem("indexNews",this.NewsId);
        EmailAttributes.innerText = "";
    }
    else 
    {
        alert("Your address email is not valid");
    }
    }
}
