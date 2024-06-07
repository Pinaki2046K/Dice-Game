var randomNumber1=Math.floor(Math.random()*6)+1;

var randomimage = "dice" + randomNumber1 + ".png";

var randomimgsrc = "images/" + randomimage;

document.querySelectorAll("img")[0].setAttribute("src", randomimgsrc);

var randomNumber2= Math.floor(Math.random()*6)+1;

var randomimg2src= "images/"  + "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomimg2src);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";

}
else{
    document.querySelector("h1").innerHTML = "Its A Draw";

}