import { Connexion } from "./signin_signup.js";


// DECLARATION OF ELEMENT

const UsernameSignup = document.getElementById("UsernameSignup");

const UsernameSignin = document.getElementById("UsernameSignin");

const EmailSignup = document.getElementById("EmailSignup");

const PasswordSignup = document.getElementById("PasswordSignup");

const PasswordSignin = document.getElementById("PasswordSignin");

const SubmitSignup = document.getElementById("SubmitSignup");

const SubmitSignin = document.getElementById("SubmitSignin");

const ValidateEmail = document.getElementById("ValidateEmail");

// SET SIGN UP INFORMATIONS IN DATA BASE

SubmitSignup.addEventListener('click', (e) => {

    e.preventDefault();
    
    let UserConnexion = new Connexion();

    // FONCTION TO VALIDATE EMAIL ADRESS

    let rEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    //console.log(rEmail.test(EmailSignup.value)); 

    const rEmailValue = rEmail.test(EmailSignup.value);

    if (rEmailValue)
    {
        ValidateEmail.innerText = " ";
        UserConnexion.SignUp(UsernameSignup.value, EmailSignup.value, PasswordSignup.value);
    }

    else 
    {
        ValidateEmail.innerText = "Enter a good Email Adress"
    }
})

// COMPARE INFORMATIONS AND VALID CONNEXION

SubmitSignin.addEventListener('click', (e) => {
    e.preventDefault();

    let UserConnexion = new Connexion();

    UserConnexion.SignIn(UsernameSignin.value, PasswordSignin.value);
})
