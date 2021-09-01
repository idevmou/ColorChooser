const colors = ["red", "green", "blue", "yellow", "aqua", "rgba(133,122,200)"]
const btnClick = document.querySelector("#btn")
const nameOfColor = document.querySelector(".name-color")

// function for choosing a random color with btn
btnClick.addEventListener("click", function() {
    let randomColor = getRandomColor()
    document.body.style.backgroundColor = colors[randomColor]
    nameOfColor.textContent = colors[randomColor]
})

// random color function
function getRandomColor() {
    return Math.floor(Math.random()*colors.length)
}


// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   const randomNumber = getRandomNumber();
//   // console.log(randomNumber);

//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }