export class Databases1
/**
 * class permettant de stocker et récupérer toutes les entités de notre restaurant
 * donc c'est à partir d'elle qu'on pourra:
 * -  enregistrer tous les menus, les tables, le personnel, les commandes...
 * -  elle va également nous permettre de récupérer la liste de nos entités afin de les modifier pour les stocker plus tard avec la méthode save
 * -  getOne nous permettra de récupérer un éléments à partir de son code 
 */


{
    key;
    data;
    code;
    saveTab = [];
    saveObj = {};
    indexData;

constructor(key)
{
    this.key = key

    this.data = this.get();

    this.saveTab = this.data;

    console.log(this.saveTab.length);
}




save(data)
    {
/**
 * la méthode save doit enregistrer pour chaque données JSON, les différents élements qui le constitue dans le localStorage
 * elle prend en paramètre une clé, permettant d'identifier les données à enregistrer et un ensemble de données en format json
 */
// convert object to JSON string
// using JSON.stringify()
/**
 * vu que data est un object, un JSON, si en parcourant ses différents élements, on constate que le code d'un object, est déja inclus dans 
 * le tableau, on le modifie
 */
if (typeof data == "object") {
    this.saveTab.push(data);

        const jsonData = JSON.stringify(this.saveTab);

        // save to localStorage

        localStorage.setItem(`${this.key}`, jsonData);
        

}
if(this.saveTab.length == 0)
    {
        this.saveTab.push(data);

        const jsonData = JSON.stringify(this.saveTab);

        // save to localStorage

        localStorage.setItem(`${this.key}`, jsonData);

    }
}

get()
    
        {
            let dataNotParse = localStorage.getItem(`${this.key}`)||'[]';

            // convert string to valid object
            let parsedDataObj = JSON.parse(dataNotParse);

            return parsedDataObj;

        }


getOne(code)
        {
    /**
     * recovers the code elemnts which is in the objects table or list that has key name
     * key is the name of my objects table and
     * code is the element that i want to display the value. 
     */
    //let myEntities = this.get(key);
    if (code)
    {
        let res = this.get(this.key);
        return res.filter(re=>re.code==code);
    }
    else {
        alert ("undefined" +code);
    }
    }
}