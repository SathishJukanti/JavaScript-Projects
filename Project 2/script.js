

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
        }
   return color;
}
// console.log(randomColor());


const body = document.querySelector("body")
const btn = document.querySelector("#btn")
    btn.addEventListener('click', function (change) {
    body.style.backgroundColor = randomColor()
})
















// let intervalId;

// const startChangingColor = function () {
//     if (!intervalId) {
//         intervalId = setInterval (changeBgColor,1000)
//     }
//     function changeBgColor() {
//         main.backgroundColor = randomColor()
//     }
// }
// const stopChangingColor = function () {
//     clearIntervalId(intervalId);
//     intervalId = null
// }

// const main = document.querySelector("#main").addEventListener('click', startChangingColor)
// const btn = document.querySelector("#btn")

// document.querySelector()

// btn.addEventListener('click', function () {
    
// })






