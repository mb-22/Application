import { Database } from "./database.js";

// CLASS DATABASE


// CLASS PRODUCTS

let numProducts = 0;

export class ViewsingleProduct
{
    code;
    Img;
    category;
    Name;
    Price;
    tabProducts = [];
    ProductsObj = {};
    ProductsId;
    tabSingleProducts = [];
    
    constructor()
    {

        this.tabSingleProducts = new Database('singleTab');
        this.tabProducts = new Database('productsTab');
        this.ProductsId = numProducts++;
        console.log(this.tabProducts);
    }


   

    displaySaveSingleProducts(code, ex) {

        let position = document.getElementById("prodetails");

        let anotherposition = document.getElementById("product1");

        console.log(anotherposition);

        console.log(position);

        // let allsingleProduct4 = this.tabProducts.get();

        let mysingleProduct5 = this.tabSingleProducts.getOne(code);// i need a getOne here

        console.log(mysingleProduct5);

    //     console.log(allsingleProduct4);

       
    //         position.innerHTML = `
        
    //         <div class="single-pro-image">
    //         <img src="img/products/${mysingleProduct5[0].fileName}" width="100%" class="MainImg" alt="">
    //        <div class="small-img-group">
    //              <div class="small-img-col">
    //                  <img src="img/products/${mysingleProduct5[0].fileName}" width="100%" class = "small-img" alt="">
    //              </div>
    //              <div class="small-img-col">
    //                  <img src="img/products/${mysingleProduct5[0].similarlyfile1}" width="100%" class = "small-img" alt="">
    //              </div>
    //              <div class="small-img-col">
    //                  <img src="img/products/${mysingleProduct5[0].similarlyfile2}" width="100%" class = "small-img" alt="">
    //              </div>
    //              <div class="small-img-col">
    //                  <img src="img/products/${mysingleProduct5[0].similarlyfile3}" width="100%" class = "small-img" alt="">
    //              </div>
    //          </div>
    //      </div>
    
    //      <div class="single-pro-details">
    //          <h6>Home / T-Shirt / ${mysingleProduct5[0].category}</h6>
    //          <h4>${mysingleProduct5[0].name}</h4>
    //          <h2>${mysingleProduct5[0].Price}</h2>
    //          <select name="" id="">
    //              <option value="">Select Size</option>
    //              <option value="">XL</option>
    //              <option value="">XXL</option>
    //              <option value="">Small</option>
    //              <option value="">Large</option>
    //          </select>
    //          <input type="number" value="1">
    //          <button class="normal" data-cart = ${mysingleProduct5[0].name} id = "CustomerCart">Add To Cart</button>
    //          <h4>Product Details</h4>
    //          <span>${mysingleProduct5[0].description}</span><br><br><br><br><br> 
    //          <p> How many star of this product ? </p>
    //          <span id = "star"></span>
    //      </div> 
    
    //         `
     

            

       



    //     anotherposition.innerHTML = `
        
           
    // <h2>Featured Products</h2>
    // <p>Summer Collection New Morden Design</p>
    // <div class="pro-container">
    //     <div class="pro">
    //         <img src="img/products/${allsingleProduct4[0].fileName}" alt="">
    //         <div class="des">
    //             <span>${allsingleProduct4[0].category}</span>
    //             <h5>${allsingleProduct4[0].name}</h5>
    //             <div class="star">
    //                 <i class="fa fa-star" aria-hidden="true"></i>
    //                 <i class="fa fa-star" aria-hidden="true"></i>
    //                 <i class="fa fa-star" aria-hidden="true"></i>
    //                 <i class="fa fa-star" aria-hidden="true"></i>
    //                 <i class="fa fa-star" aria-hidden="true"></i>
    //             </div>
    //             <h4>${allsingleProduct4[0].Price}</h4>
    //         </div>
    //         <a class = "cart" href="#"><i class="fa fa-shopping-cart"></i></a>
    //     </div>

    //     <div class="pro">
    //         <img src="img/products/${allsingleProduct4[1].fileName}" alt="">
    //         <div class="des">
    //             <span>${allsingleProduct4[1].category}</span>
    //             <h5>${allsingleProduct4[1].name}</h5>
    //             <div class="star">
    //                 <i class="fa fa-star" aria-hidden="true"></i>
    //                 <i class="fa fa-star" aria-hidden="true"></i>
    //                 <i class="fa fa-star" aria-hidden="true"></i>
    //                 <i class="fa fa-star" aria-hidden="true"></i>
    //                 <i class="fa fa-star" aria-hidden="true"></i>
    //             </div>
    //             <h4>${allsingleProduct4[1].Price}</h4>
    //         </div>
    //         <a class = "cart" href="#"><i class="fa fa-shopping-cart"></i></a>
    //     </div>

    //     <div class="pro">
    //         <img src="img/products/${allsingleProduct4[2].fileName}" alt="">
    //         <div class="des">
    //             <span>${allsingleProduct4[2].category}</span>
    //             <h5>${allsingleProduct4[2].name}</h5>
    //             <div class="star">
    //                 <i class="fa fa-star" aria-hidden="true"></i>
    //                 <i class="fa fa-star" aria-hidden="true"></i>
    //                 <i class="fa fa-star" aria-hidden="true"></i>
    //                 <i class="fa fa-star" aria-hidden="true"></i>
    //                 <i class="fa fa-star" aria-hidden="true"></i>
    //             </div>
    //             <h4>${allsingleProduct4[2].Price}</h4>
    //         </div>
    //         <a class = "cart" href="#"><i class="fa fa-shopping-cart"></i></a>
    //     </div>

    //     <div class="pro">
    //         <img src="img/products/${allsingleProduct4[3].fileName}" alt="">
    //         <div class="des">
    //             <span>${allsingleProduct4[3].category}</span>
    //             <h5>${allsingleProduct4[3].name}</h5>
    //             <div class="star">
    //                 <i class="fa fa-star" aria-hidden="true"></i>
    //                 <i class="fa fa-star" aria-hidden="true"></i>
    //                 <i class="fa fa-star" aria-hidden="true"></i>
    //                 <i class="fa fa-star" aria-hidden="true"></i>
    //                 <i class="fa fa-star" aria-hidden="true"></i>
    //             </div>
    //             <h4>${allsingleProduct4[3].Price}</h4>
    //         </div>
    //         <a class = "cart" href="#"><i class="fa fa-shopping-cart"></i></a>
    //     </div>

       
    // </div>



    //     `












    }

















        //  let numbTablePlaces = myTable[0].places;
 
        //  console.log(numbTablePlaces);
        //  console.log(myTable);
        //  let numbPlaces = parseInt(prompt("How many places are occupy ?"));
 
        //  if(numbPlaces > numbTablePlaces){
        //      alert("Number of places exceeded");
        //  }
        //  else {
        //      this.viewTableObj.code = code;
        //      this.viewTableObj.places = numbPlaces;
        //      this.viewTableObj.totalPlaces = numbTablePlaces;
        //      this.viewTableObj.imageTable = myTable[0].image;
        //      console.log(this.viewTableObj);
        //      this.tabViewTable.save(this.viewTableObj);
        //      // alert("okay"); 
        //  }
 
         
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // viewsingleProduct(code) {
     
    //     let singleProductPage = document.getElementById("prodetails");

    //     let mysingleProduct5 = this.tabProduct.getOne(code);

    //     let allsingleProduct4 = this.tabProduct.get();

    //     console.log(allsingleProduct4[0].fileName);

    //     console.log(mysingleProduct5[0].fileName);

    //     console.log(singleProductPage);

//         singleProductPage.innerHTML = ` 
//         <div class="single-pro-image">
//         <img src="img/products/${mysingleProduct5[0].fileName}" width="100%" id="MainImg" alt="">
//         <div class="small-img-group">
//             <div class="small-img-col">
//                 <img src="img/products/${mysingleProduct5[0].fileName}" width="100%" class = "small-img" alt="">
//             </div>
//             <div class="small-img-col">
//                 <img src="img/products/${mysingleProduct5[0].similarlyfile1}" width="100%" class = "small-img" alt="">
//             </div>
//             <div class="small-img-col">
//                 <img src="img/products/${mysingleProduct5[0].similarlyfile2}" width="100%" class = "small-img" alt="">
//             </div>
//             <div class="small-img-col">
//                 <img src="img/products/${mysingleProduct5[0].similarlyfile3}" width="100%" class = "small-img" alt="">
//             </div>
//         </div>
//     </div>

//     <div class="single-pro-details">
//         <h6>Home / T-Shirt / ${mysingleProduct5[0].category}</h6>
//         <h4>${mysingleProduct5[0].name}</h4>
//         <h2>${mysingleProduct5[0].Price}</h2>
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
//         <span>${mysingleProduct5[0].descriptions}</span>
//     </div> `

//     let featuredproducts = document.getElementById("product1");

//     featuredproducts.innerHTML = `
    
//     <h2>Featured Products</h2>
//             <p>Summer Collection New Morden Design</p>
//             <div class="pro-container">
//                 <div class="pro">
//                     <img src="img/products/${allsingleProduct4[0].fileName}" alt="">
//                     <div class="des">
//                         <span>${allsingleProduct4[0].category}</span>
//                         <h5>${allsingleProduct4[0].name}</h5>
//                         <div class="star">
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                         </div>
//                         <h4>${allsingleProduct4[0].Price}</h4>
//                     </div>
//                     <a class = "cart" href="#"><i class="fa fa-shopping-cart"></i></a>
//                 </div>

//                 <div class="pro">
//                     <img src="img/products/${allsingleProduct4[1].fileName}" alt="">
//                     <div class="des">
//                         <span>${allsingleProduct4[1].category}</span>
//                         <h5>${allsingleProduct4[1].name}</h5>
//                         <div class="star">
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                         </div>
//                         <h4>${allsingleProduct4[1].Price}</h4>
//                     </div>
//                     <a class = "cart" href="#"><i class="fa fa-shopping-cart"></i></a>
//                 </div>

//                 <div class="pro">
//                     <img src="img/products/${allsingleProduct4[2].fileName}" alt="">
//                     <div class="des">
//                         <span>${allsingleProduct4[2].category}</span>
//                         <h5>${allsingleProduct4[2].name}</h5>
//                         <div class="star">
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                         </div>
//                         <h4>${allsingleProduct4[2].Price}</h4>
//                     </div>
//                     <a class = "cart" href="#"><i class="fa fa-shopping-cart"></i></a>
//                 </div>

//                 <div class="pro">
//                     <img src="img/products/${allsingleProduct4[3].fileName}" alt="">
//                     <div class="des">
//                         <span>${allsingleProduct4[3].category}</span>
//                         <h5>${allsingleProduct4[3].name}</h5>
//                         <div class="star">
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                             <i class="fa fa-star" aria-hidden="true"></i>
//                         </div>
//                         <h4>${allsingleProduct4[3].Price}</h4>
//                     </div>
//                     <a class = "cart" href="#"><i class="fa fa-shopping-cart"></i></a>
//                 </div>

               
//             </div>

//     `
// window.Location.href = "./sproduct.html";
        
    // }


   

   


