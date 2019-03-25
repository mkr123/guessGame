var numofsquares = 6;
var colors = generateColors(numofsquares);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
easyBtn.addEventListener("click",function () {
    numofsquares = 3;
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = generateColors(numofsquares);
    pickedcolor = pickColor();
    colorDisplay.textContent= pickedcolor;
    for(var i =0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display= "none";
        }
    }
});


hardBtn.addEventListener("click",function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = generateColors(numofsquares);
    pickedcolor = pickColor();
    colorDisplay.textContent= pickedcolor;
    for(var i =0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display= "block";
        }


});




resetBtn.addEventListener("click",function () {
        colors = generateColors(numofsquares);
        pickedcolor = pickColor();
        colorDisplay.textContent = pickedcolor;
    for (var i = 0; i< squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background= "mediumspringgreen";


})
for (var i = 0; i< squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click",function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedcolor){
            message.textContent = "Correct!";
            resetBtn.textContent = "Play again?"
            for(var i=0; i < squares.length; i++ ){
                squares[i].style.backgroundColor = clickedColor;

            }
            h1.style.background= clickedColor;
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