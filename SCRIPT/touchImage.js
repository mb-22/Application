let Images = document.getElementsByClassName("small-img");

let MainImage = document.getElementsByClassName("MainImg");
// console.log(Images);

for (let image of Images) {
    image.addEventListener("click", () => {
        console.log(image.src);
        console.log("MainImg", MainImage[0].src);
        MainImage[0].src = image.src;
    })
}