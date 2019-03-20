var colors = generateColors(6);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");

for (var i = 0; i< squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click",function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedcolor){
            message.textContent = "Correct!";
            for(var i=0; i < squares.length; i++ ){
                squares[i].style.backgroundColor = clickedColor;

            }
            h1.style.backgroundColor= clickedColor;
        }
        else{
            message.textContent = "Try again."

        }

    })

}

function pickColor(){
    var random = Math.floor(Math.random()* colors.length);
    return colors[random];
};
colorDisplay.textContent = pickedcolor;

function generateColors(num) {
    var arr = [];
    for (var i = 0; i<num;i++){
        arr.push(randomColor());

    }
    return arr;

}
function randomColor() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g +", " +b +")";

}