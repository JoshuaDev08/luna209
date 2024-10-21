var numberOfButton = document.querySelectorAll(".drum").length;

for ( i = 0; i < numberOfButton; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function () {
 
    var buttonInnerHTML = this.innerHTML;

    keyPressed(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

    
});
}    

document.addEventListener("keydown", function(e){
    keyPressed(e.key);
    buttonAnimation(e.key);

});

function keyPressed(key){

    switch (key) {
        case "w" :
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
        break;
        case "a" :
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
        break;
        case "s" :
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
        break;
        case "d" :
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
        break;
        case "j" :
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
        break;
        case "k" :
            var tom4 = new Audio('./sounds/tom-3.mp3');
            tom4.play();
        break;
        case "l" :
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
        break;
        default:
            console.log("Sorry");

    }
}



function buttonAnimation(currentkey) {

    var activeButton = document.querySelector("." + currentkey)
    activeButton.classList.add("pressed");

    setTimeout( function() {
        activeButton.classList.remove("pressed")
    }, 100)
}