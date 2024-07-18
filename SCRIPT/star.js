/*
IL S'AGIT D'UNE RECHERCHE DYNAMIQUE 
*/ 


export class Stars {

    
    constructor()
    {
        
    }

    // SEARCH FUNCTION

    

    displayStars (Data)
    {
        console.log("hello");
        console.log(Data);
        Data.innerHTML = `
        <div class="stars">
    
                            <i class="lar la-star" data-value="1"></i><i class="lar la-star" data-value="2"></i><i class="lar la-star" data-value="3"></i><i class="lar la-star" data-value="4"></i><i class="lar la-star" data-value="5"></i><br>
    
        </div>
        <input type="text" name="note" id="note" value="0">
        <!--- type hidden : qui ne se voit pas ---->
        `
        
    }


    resetStars(note = 0, star) {

        console.log("hello ruth");

        console.log(star);
       
          if (star.dataset.value > note) {
            star.style.color = "black";
            star.classList.add("lar");
            star.classList.remove("las");
          } else {
            star.style.color = "black";
            star.classList.add("las");
            star.classList.remove("lar");
          }
  
        }
      
}