import { Database } from "./database.js";


// CLASS DATABASE


// CLASS PRODUCTS

let numProducts = 0;

export class Product
{
    code;
    Img;
    category;
    Name;
    Price;
    tabProduct = []; // I recover my objects table which content all food menu with the key menuTab.
    ProductObj = {};
    ProductsId;

    
    constructor()
    {
        this.tabProduct = new Database('productsTab');
        this.ProductsId = numProducts++;
        console.log(this.tabProduct);
    }

    viewsingleProduct(code) {

        let singleProductPage = document.getElementById("prodetails");

        let mySingleProduct = this.tabProduct.getOne(code);

        let allSavedProducts = this.tabProduct.get();

        console.log(allSavedProducts[0].fileName);

        console.log(mySingleProduct[0].fileName);

        console.log(singleProductPage);

//         singleProductPage.innerHTML = ` 
//         <div class="single-pro-image">
//         <img src="img/products/${mySingleProduct[0].fileName}" width="100%" id="MainImg" alt="">
//         <div class="small-img-group">
//             <div class="small-img-col">
//                 <img src="img/products/${mySingleProduct[0].fileName}" width="100%" class = "small-img" alt="">
//             </div>
//             <div class="small-img-col">
//                 <img src="img/products/${mySingleProduct[0].similarlyfile1}" width="100%" class = "small-img" alt="">
//             </div>
//             <div class="small-img-col">
//                 <img src="img/products/${mySingleProduct[0].similarlyfile2}" width="100%" class = "small-img" alt="">
//             </div>
//             <div class="small-img-col">
//                 <img src="img/products/${mySingleProduct[0].similarlyfile3}" width="100%" class = "small-img" alt="">
//             </div>
//         </div>
//     </div>

//     <div class="single-pro-details">
//         <h6>Home / T-Shirt / ${mySingleProduct[0].category}</h6>
//         <h4>${mySingleProduct[0].name}</h4>
//         <h2>${mySingleProduct[0].Price}</h2>
//         <select name="" id="">
//             <option value="">Select Size</option>
//             <option value="">XL</option>
//             <option value="">XXL</option>
//             <option value="">Small</option>
//             <option value="">Large</option>
//         </select>
//         <input type="number" value="1">
//         <button class="normal">Add To Cart</button>
//         <h4>Product Details</h4>
//         <span>${mySingleProduct[0].descriptions}</span>
//     </div> `

//     let featuredproducts = document.getElementById("product1");

//     featuredproducts.innerHTML = `
    
//     <h2>Featured Products</h2>
//             <p>Summer Collection New Morden Design</p>
//             <div class="pro-container">
//                 <div class="pro">
//                     <img src="img/products/${allSavedProducts[0].fileName}" alt="">
//                     <div class="des">
//                         <span>${allSavedProducts[0].category}</span>
//                         <h5>${allSavedProducts[0].name}</h5>
//                         <div class="star">
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                         </div>
//                         <h4>${allSavedProducts[0].Price}</h4>
//                     </div>
//                     <a class = "cart" href="#"><i class="fa fa-shopping-cart"></i></a>
//                 </div>

//                 <div class="pro">
//                     <img src="img/products/${allSavedProducts[1].fileName}" alt="">
//                     <div class="des">
//                         <span>${allSavedProducts[1].category}</span>
//                         <h5>${allSavedProducts[1].name}</h5>
//                         <div class="star">
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                         </div>
//                         <h4>${allSavedProducts[1].Price}</h4>
//                     </div>
//                     <a class = "cart" href="#"><i class="fa fa-shopping-cart"></i></a>
//                 </div>

//                 <div class="pro">
//                     <img src="img/products/${allSavedProducts[2].fileName}" alt="">
//                     <div class="des">
//                         <span>${allSavedProducts[2].category}</span>
//                         <h5>${allSavedProducts[2].name}</h5>
//                         <div class="star">
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                         </div>
//                         <h4>${allSavedProducts[2].Price}</h4>
//                     </div>
//                     <a class = "cart" href="#"><i class="fa fa-shopping-cart"></i></a>
//                 </div>

//                 <div class="pro">
//                     <img src="img/products/${allSavedProducts[3].fileName}" alt="">
//                     <div class="des">
//                         <span>${allSavedProducts[3].category}</span>
//                         <h5>${allSavedProducts[3].name}</h5>
//                         <div class="star">
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                         </div>
//                         <h4>${allSavedProducts[3].Price}</h4>
//                     </div>
//                     <a class = "cart" href="#"><i class="fa fa-shopping-cart"></i></a>
//                 </div>

               
//             </div>

//     `
// window.Location.href = "./sproduct.html";
        
    }

    displayAll()
    {
        

        let myProduct = this.tabProduct.get();

        console.log("MY PRODUCTS", myProduct);

        if(myProduct.length == 0)
        {
            alert ("Your stock is empty, you need to add products");
        }

        else 
        {
            let parentDiv = document.getElementById("products");

            myProduct.map((products) => 

            {
                console.log("je suis un article");
                let myNewDivMenuCSS = document.createElement("div");
                myNewDivMenuCSS.classList.add("pro");
                myNewDivMenuCSS.classList.add(`${products.category}`);
                myNewDivMenuCSS.classList.add("all");
                myNewDivMenuCSS.dataset.product = `${products.code}`;
                myNewDivMenuCSS.dataset.del = `${products.index}`;

                myNewDivMenuCSS.innerHTML = 

                ` <img src="img/products/${products.fileName}" alt="">
                <div class="des">
                    <span>${products.category}</span>
                    <h5>${products.code}</h5>
                    <div class="star">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <h4>${products.Price}</h4>
                   
                </div>`
                
               parentDiv.appendChild(myNewDivMenuCSS);

           
            })

        }

    }

  
   
}

