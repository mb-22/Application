/*
IL S'AGIT D'UNE RECHERCHE DYNAMIQUE 
*/ 
const Data = document.getElementsByClassName("pro");

export class SearchProducts {

    
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
            if (Data[i].children[1].children[1].innerHTML.toLowerCase().includes(searchedString) )
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

