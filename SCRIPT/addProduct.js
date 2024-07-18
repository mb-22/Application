import { Database } from "./database.js";

// CLASS DATABASE


// CLASS PRODUCTS

let numProducts = 0;

export class Products 
{
    code;
    Img;
    category;
    Name;
    Price;
    tabProducts = []; // I recover my objects table which content all food menu with the key menuTab.
    ProductsObj = {};
    tabCategories = [];
    ProductsId = 0;

    
    constructor()
    {
        this.tabProducts = new Database('productsTab');
        this.tabCategories = new Database("Categories");
        // this.ProductsId = numProducts++;
        console.log(this.tabProducts);

        if (localStorage.getItem("index1")) {
            numProducts = localStorage.getItem("index1");
        }
        else {
            numProducts = 0;
        }
        
    }

    display()
    {
        let myProduct = this.tabProducts.get();

        console.log("MY PRODUCTS", myProduct);

        if(myProduct.length == 0)
        {
            alert ("Your stock is empty, you need to add products");
        }

        else 
        {
            let parentDiv = document.getElementById("allproducts");

            myProduct.map((products) => 

            {
                console.log("je suis un article");
                let myNewDivMenuCSS = document.createElement("div");
                myNewDivMenuCSS.classList.add("pro");
                myNewDivMenuCSS.classList.add("prop1");
                myNewDivMenuCSS.classList.add(`${products.category}`);
                myNewDivMenuCSS.classList.add("all");
                myNewDivMenuCSS.dataset.product = `${products.code}`;
                myNewDivMenuCSS.dataset.del = `${products.index}`;

                myNewDivMenuCSS.innerHTML = 

                ` <img src="img/products/${products.fileName}" alt="">
                <div class="des">
                    <div class="icon">
                        <i class="fa fa-pencil" aria-hidden="true" data-product = ${products.code}></i>
                        <i class="fa fa-trash" aria-hidden="true" data-del = ${products.index}></i>
                    </div>
                    <span>${products.category}</span>
                    <h5>${products.TradName}</h5>
                    <div class="star">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <h4>Quantity: ${products.TotalQty}</h4>
                    <h4>${products.Price}</h4>
                   
                </div>
                `
                
               parentDiv.appendChild(myNewDivMenuCSS);

           
            })

        }

    }

    set(code)
    {
        let Category = this.tabCategories.get();
        let parentDiv = document.getElementById("editProduct");
        // myParentDiv.innerHTML = code

       let  myObjects = this.tabProducts.getOne(code);

        console.log(myObjects);

        let myfirstDiv = document.createElement("div");
        myfirstDiv.setAttribute("class", "wrapper4");
        parentDiv.appendChild(myfirstDiv);

        let mySecondDiv = document.createElement("div");
        mySecondDiv.setAttribute("class", "add-product-title");
        let myH1 = document.createElement("h1");
        myH1.innerHTML = `Edit ${myObjects[0].TradName} in ${myObjects[0].category} category`;
        mySecondDiv.appendChild(myH1);
        myfirstDiv.appendChild(mySecondDiv);

        let mythirdDiv = document.createElement("div");
        mythirdDiv.setAttribute("class", "add-form");
         
            let myThirdDiv1 = document.createElement("div");
            myThirdDiv1.setAttribute("class", "input-fields");
         
            let input1 = document.createElement("input");
            input1.setAttribute("type", "text");
            input1.setAttribute("class", "input1");
            input1.setAttribute("value", myObjects[0].name);
            input1.setAttribute("id", "products_name");

            myThirdDiv1.appendChild(input1);

            let input11 = document.createElement("input");
            input11.setAttribute("type", "text");
            input11.setAttribute("class", "input1");
            input11.setAttribute("value", myObjects[0].TradName);
            input11.setAttribute("id", "products_Trad");

            myThirdDiv1.appendChild(input11);

            let input2 = document.createElement("input");
            input2.setAttribute("type", "file");
            input2.setAttribute("class", "input1");
            input2.setAttribute("id", "fileName");
            myThirdDiv1.appendChild(input2);


            let input3 = document.createElement("input");
            input3.setAttribute("type", "text");
            input3.setAttribute("class", "input1");
            input3.setAttribute("value", "choose similarly image");


            myThirdDiv1.appendChild(input3);

            let input4 = document.createElement("input");
            input4.setAttribute("type", "file");
            input4.setAttribute("class", "input1");
            input4.setAttribute("id", "fileName1");


            myThirdDiv1.appendChild(input4);

            let input5 = document.createElement("input");
            input5.setAttribute("type", "file");
            input5.setAttribute("class", "input1");
            input5.setAttribute("id", "fileName2");


            myThirdDiv1.appendChild(input5);

            let input6 = document.createElement("input");
            input6.setAttribute("type", "file");
            input6.setAttribute("class", "input1");
            input6.setAttribute("id", "fileName3");


            myThirdDiv1.appendChild(input6);


            let input7 = document.createElement("input");
            input7.setAttribute("type", "text");
            input7.setAttribute("class", "input1");
            input7.setAttribute("value", myObjects[0].TotalQty);
            input7.setAttribute("id", "Qtyy");

            myThirdDiv1.appendChild(input7);

            let select = document.createElement("select");
            select.setAttribute("class", "input1");
            select.setAttribute("id", "category");

            myThirdDiv1.appendChild(select);

            for (let i = 0 ; i < Category.length ; i++) {


                let myOption = document.createElement("option");
                myOption.setAttribute("value", Category[i].name);
                let myOptionValue = document.createTextNode(Category[i].name)
                myOption.appendChild(myOptionValue);
                select.appendChild(myOption);
                    
            }

            let input8 = document.createElement("input");
            input8.setAttribute("type", "number");
            input8.setAttribute("class", "input1");
            input8.setAttribute("value", myObjects[0].Price);
            input8.setAttribute("id", "products_price");

            myThirdDiv1.appendChild(input8);

            mythirdDiv.appendChild(myThirdDiv1);

            // myfirstDiv.appendChild(mythirdDiv); 


            let myThirdDiv2 = document.createElement("div");
            myThirdDiv2.setAttribute("class", "msg");

            let textarea = document.createElement("textarea");
            textarea.setAttribute("id", "description");
            textarea.innerText = (myObjects[0].description);
            
            myThirdDiv2.appendChild(textarea);

            let inputN = document.createElement("input");
            inputN.setAttribute("type", "submit");
            inputN.setAttribute("class", "btn1");
            inputN.setAttribute("value", "EDIT");
            inputN.setAttribute("id", "edit");

           myThirdDiv2.appendChild(inputN);

            mythirdDiv.appendChild(myThirdDiv2);

            myfirstDiv.appendChild(mythirdDiv); 

            
    }
    
    // delete(codeSupp)

    // /**
    //  * cette méthode fera appel d'abord à la méthode getOne pour supprimer un menu particulier à partir de son code ensuite à la méthode save
    //  * afin de supprimer les données modifiées
    //  */
    // {

    //     // console.log(codeSupp)
    //     this.myObject = this.tabProducts.get();

    //         //console.log(this.myObject)

    //         let choice = prompt("voulez vous vraiment supprimer ce produit?");

    //         if(choice.toLowerCase() == "oui") {

    //             this.myObject.splice((codeSupp - 3), 1);

    //             console.log(this.myObject);

    //             localStorage.removeItem('productsTab');

    //             const jsonData = JSON.stringify(this.myObject);

    //             // save to localStorage

    //             localStorage.setItem("productsTab", jsonData);

    //             // console.log(myObject)

    //             //this.orderTab.save(myObject);
                
    //             // this.orderTab.save(this.myObject); 
    //         }  

    // }

  /**
     * cette méthode fera appel d'abord à la méthode getOne pour supprimer un menu particulier à partir de son code ensuite à la méthode save
     * afin de supprimer les données modifiées
     */
       delete(codeProduct)
    {

        let myProduct = this.tabProducts.get();

        // search product in localStorage table and then set their index in a variable

        for (let i = 0 ; i < myProduct.length ; i++) {
            if (myProduct[i].name == codeProduct) {
                console.log("trouvé", myProduct[i], "index",i);
                let choice = prompt("voulez vous vraiment supprimer ce produit?");

                if(choice.toLowerCase() == "oui") {

                    myProduct.splice((i), 1);

                    console.log(myProduct);

                    localStorage.removeItem('productsTab');

                    const jsonData = JSON.stringify(myProduct);

                    // save to localStorage

                    localStorage.setItem("productsTab", jsonData);
                }
                break;
            }
        }
    }
    
    ajouter(Image0,Image1, Image2, Image3, category, Name, Price, description, totalQty, TotalName)
    {
        this.ProductsId += parseInt(numProducts) + 1;
        localStorage.setItem("index1", this.ProductsId);

        let checked1 = false;
        let checked2 = false;
        let checked3 = false;
        let checked4 = false;

            var myArray = ['jpg', 'png', 'jfif'];

            var splits = Image0.split('fakepath\\');

            var splits1 = Image1.split('fakepath\\');

            var splits2 = Image2.split('fakepath\\');

            var splits3 = Image3.split('fakepath\\');

            let extension = splits[1].split(".").pop();

            let extension1 = splits1[1].split(".").pop();

            let extension2 = splits2[1].split(".").pop();

            let extension3 = splits3[1].split(".").pop();

            let imageName = splits[1];

            let imageName1 = splits1[1];

            let imageName2 = splits2[1];

            let imageName3 = splits3[1];
            //console.log(imageName, extension);

            // CHECK IF FILE EXTENSION IS IN myArrayLE

            console.log(extension, extension1, extension2, extension3);

            
        
            for (let i = 0 ; i < myArray.length ; i++) {
                if(extension == myArray[i]) {
                    checked1 = true;
                    break;
                }
                else {
                    checked1 = false;
                    continue;
                }
        
            }
        
            if (checked1) {
                for (let i = 0 ; i < myArray.length ; i++) {
                    if(extension1 == myArray[i]) {
                        checked2 = true;
                        break;
                    }
                    else {
                        checked2 = false;
                        continue;
                    }
            
                }
            }
           
        
            if (checked1 && checked2) {
        
                for (let i = 0 ; i < myArray.length ; i++) {
                    if(extension2 == myArray[i]) {
                        checked3 = true;
                        break;
                    }
                    else {
                        checked3 = false;
                        continue;
                    }
            
                }
            }
           
        
            if (checked1 && checked2 && checked3) {
        
                for (let i = 0 ; i < myArray.length ; i++) {
                    if(extension3 == myArray[i]) {
                        checked4 = true;
                        break;
                    }
                    else {
                        checked4 = false;
                        continue;
                    }
            
                }
            }
           
        
            if (checked1 && checked2 && checked3 && checked4) {
                this.ProductsObj.code = Name;
                this.ProductsObj.name = Name;
                this.ProductsObj.TradName = TotalName;
                this.ProductsObj.index = this.ProductsId;
                this.ProductsObj.category = category;
                this.ProductsObj.Price = Price;
                this.ProductsObj.similarlyfile1 = imageName1;
                this.ProductsObj.similarlyfile2 = imageName2;
                this.ProductsObj.similarlyfile3 = imageName3;
                this.ProductsObj.fileName = imageName;
                this.ProductsObj.description = description;
                this.ProductsObj.TotalQty = totalQty;
                console.log(this.ProductsObj);
                alert("Data save well");
                this.tabProducts.save(this.ProductsObj);
            }
            if (!checked1 || !checked2 || !checked3 || !checked4)
            {
                alert("you haven't enter a good extension of file");
            }

            

            // GET AND SAVE THE Objects VALUE

            // if (exists == true) {

            //     this.ProductsObj.code = Name;
            //     this.ProductsObj.name = Name;
            //     this.ProductsObj.index = this.ProductsId;
            //     this.ProductsObj.category = category;
            //     this.ProductsObj.Price = Price;
            //     this.ProductsObj.similarlyfile1 = imageName1;
            //     this.ProductsObj.similarlyfile2 = imageName2;
            //     this.ProductsObj.similarlyfile3 = imageName3;
            //     this.ProductsObj.fileName = imageName;
            //     this.ProductsObj.description = description;
            //     this.ProductsObj.TotalQty = totalQty;
            //     console.log(this.ProductsObj);
            //     alert("Data save well");
            //     this.tabProducts.save(this.ProductsObj);
                
            //     //console.log(category);
            // }
            // else {
            //     alert ("You haven't enter a good file extension please check it");
                
            // }

            






            
            
       // })

        

    }

}


//     /**
//      * cette méthode fera appel à la méthode save de la classe Database pour enregistrer les menus ajouté 
//      */


