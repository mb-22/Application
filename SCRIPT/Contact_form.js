import { Contact} from "./Contact.js";

let btnSend = document.getElementById("sendContact");

btnSend.addEventListener("click", (e) => {
    e.preventDefault();
    let ContactObj = new Contact();
    ContactObj.sendMail();
})