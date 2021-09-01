const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const btnClick = document.querySelector("#btn")
const nameOfColor = document.querySelector(".name-color")

btnClick.addEventListener("click", function() {
    let hexColorValue = "#"
    for (let i = 0; i < 6; i++) {
        hexColorValue += hexColors[getRandomHexColors()]
        
    }
    nameOfColor.textContent = hexColorValue
    document.body.style.backgroundColor = hexColorValue
})


function getRandomHexColors() {
    return Math.floor(Math.random()*hexColors.length)
}


  

// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   let hexColor = "#";
//   for (let i = 0; i < 6; i++) {
//     hexColor += hex[getRandomNumber()];
//   }
//   // console.log(hexColor);

//   color.textContent = hexColor;
//   document.body.style.backgroundColor = hexColor;
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * hex.length);
// }
