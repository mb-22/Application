import { Newsletter } from "./customer_newsletter.js";

const myNewsLetter = document.getElementById("myNewsLetter");

const CustomerNewsletter = document.getElementById("CustomerNewsletter");

myNewsLetter.addEventListener('click', () => {

    let NewsLetter = new Newsletter();
    NewsLetter.emailInsert(CustomerNewsletter.value);

})