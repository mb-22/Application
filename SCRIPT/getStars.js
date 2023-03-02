import { Stars } from "./star.js";
import { getStars } from "./getStarsProduct.js";
import { SetStars } from "./CustomeStars.js";

let newStars1 = new Stars();


let Data = document.getElementById("star");





newStars1.displayStars(Data);



const stars = document.querySelectorAll(".la-star");


// // const total =  stars.length;
// console.log("le nombre total d'éléments de stars est:" + total);
const note = document.querySelector("#note");

for ( let star of stars) {

    // console.log(star);
    star.addEventListener("mouseover", function() {
      newStars1.resetStars(note, star);
      this.style.color = "black";
      this.classList.add("las");
      this.classList.remove("lar");
      // l'élément précedent de meme niveau dans le DOM
      let previousStar = this.previousElementSibling;
      while (previousStar) {
        //on passe l'étoile qui précéde en noir
        previousStar.style.color = "black";
        previousStar.classList.add("las");
        previousStar.classList.remove("lar");
        // et on récupére l'étoile qui la précéde
        previousStar = previousStar.previousElementSibling;
      }

    });

    // on écoute le clic
    star.addEventListener("click", function() {
      let GetValueStar = new getStars();
     let getStar = new SetStars();
     getStar.SetStar(this.dataset.value);
     
      GetValueStar.getStarsValue(this.dataset.value);
      /* pour récupérer l'input des notes*/
      note.value = this.dataset.value; // pour chercher le data-value
      
    });


    star.addEventListener("mouseout", function() {
        newStars1.resetStars(note.value, star);
    });
  }
