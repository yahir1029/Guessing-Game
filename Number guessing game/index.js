const input =document.getElementById("input-guess")

const submit=document.getElementById("submit")


var randomNumber=Math.floor(Math.random()*10)+1;

var randomtext = document.getElementById("Status")

console.log(randomNumber);



function checkGuess(){
    if(input.value > randomNumber ){
        randomtext.innerText= "Guess Lower!"
    }
    else if(input.value < randomNumber){
        randomtext.innerText= "Guess Higher!";

    }
    else{
        randomtext.innerText=  "Correct!";

    }
}



submit.addEventListener("click",checkGuess)

































