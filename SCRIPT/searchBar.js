/*
IL S'AGIT D'UNE RECHERCHE DYNAMIQUE 
*/ 
const Data = document.getElementsByClassName("pro");

export class Search {

    
    constructor()
    {
        
    }

    // SEARCH FUNCTION

    

    filterData (e)
    {
        console.log(Data);
        //let name = Data[1].childNodes[3].children[1].innerHTML;
        //console.log(name);
        const searchedString = e.target.value.toLowerCase().replace(/\s/g, "");
        for (let i = 0 ; i < Data.length ; i++)
        {
            if (Data[i].children[1].children[2].innerHTML.toLowerCase().includes(searchedString) )
            {
                Data[i].style.display = "block";
            }
            else 
            {
                Data[i].style.display = "none";

            }
        }
    }

}





/*

<!-------------------------------------------------------Script de la barre de recherche------------------------->
<script>
    const searchInput = document.getElementById("search");
   
    searchInput.addEventListener("input",filterData)

function filterData(e) {

    const Data = document.getElementsByClassName("products1");// chaque bloc-image
    // Data c'est un tableau qui contient tous les blocs d'images
    /*console.log("bloc des images")
    console.log(Data[0].childNodes[3].innerHTML)*/
/*    const searchedString = e.target.value.toLowerCase().replace(/\s/g, "");//chaque valeur de la barre de recherche
    
    
        for(let i = 0 ; i < Data.length; i++)
        {
            if(Data[i].childNodes[3].innerHTML.toLowerCase().includes(searchedString))
            {
                //console.log(Data[i].childNodes[3].innerHTML)
                Data[i].style.display = " block";
            }
            else{
                //console.log("Rien du tout")
                Data[i].style.display = "none"
            }
        }
     // ce regex enleve les espaces
    /*const filteredArr = dataName.filter(el => {
        if (el.innerText.toLowerCase().includes(searchedString))
        {
            return el.innerText
        }
        
    })
    console.log(filteredArr)*/
    
    /* pour chaque element du tableau, on récupère son  nom et on va vérifier si 
    il inclus ce que l'on cherche et si c'est vrai, alors la méthode filter
    va le garder dans le tableau qu'il renvoit*/ 

    //createUserList(filteredArr)

    //searchInput.innerHTML = "" // a la fin on reinitialise la barre de recherche.
    /*
}
</script>
*/