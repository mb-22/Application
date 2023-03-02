export class Database 
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


if(this.saveTab.length == 0)
    {
        this.saveTab.push(data);

        const jsonData = JSON.stringify(this.saveTab);

        // save to localStorage

        localStorage.setItem(`${this.key}`, jsonData);

    }
else {

    for(let i = 0 ; i < this.saveTab.length ; i++){

        if(this.saveTab[i].code == data.code){

            localStorage.setItem("SameCode",true);

            // alert("set up");

            //indexData = this.saveTab.indexOf(data.code);
            
            
            // PRODUCTS OBJECTS
            this.saveTab[i].Price = data.Price;
            this.saveTab[i].category = data.category;
            this.saveTab[i].fileName = data.fileName;
            this.saveTab[i].fileName1 = data.fileName1;
            this.saveTab[i].fileName2 = data.fileName2;
            this.saveTab[i].fileName3 = data.fileName3;
            this.saveTab[i].description = data.description;
            this.saveTab[i].TotalQty = data.TotalQty;
            this.saveTab[i].name = data.name;
            this.saveTab[i].TradName = data.TradName;
            
            // CART OBJECTS

            this.saveTab[i].Qty = data.Qty;
            this.saveTab[i].Size = data.Size;
            
            // DATASET OBJECTS

            this.saveTab[i].dataset = data.dataset;

            // PROFIL OBJECTS

            this.saveTab[i].user = data.user;
            this.saveTab[i].password = data.password;

            // STARS OBJECT

            this.saveTab[i].Stars = data.Stars;
            this.saveTab[i].products = data.products;
            
            // after updated data in saveTab; convert the saveTab table to JSON (String) before add it to localStorage.
    
            const jsonData = JSON.stringify(this.saveTab);
    
            // save to localStorage
    
            localStorage.setItem(`${this.key}`, jsonData);

           break;
        }
       
// si data.code ne figure pas dans le tableau, alors la donnée json n'existe pas encore donc il faut l'ajouter dans le tableau
        if (this.saveTab[i].code != data.code && i == (this.saveTab.length -1) ) {

            //console.log("code saveTab" + this.saveTab[3].code + "code data" + data.code)

            this.saveTab.push(data);

            const jsonData1 = JSON.stringify(this.saveTab);

            // save to localStorage

            localStorage.setItem(`${this.key}`, jsonData1);

            break;
        }
        
        else {
            continue;
        }
    }
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