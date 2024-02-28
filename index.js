function KeyPressed(keyChar){
    switch(keyChar){
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/crash.mp3"); 
            audio.play();
            break;
        default:
            console.log(keyChar);
    }
}

function buttonAnimation(current){
    var currentActive = "." + current;
    document.querySelector(currentActive).classList.add("pressed");

    //remove class after 1second
    setTimeout(function(){
        document.querySelector(currentActive).classList.remove("pressed");
    }, 100);
}

var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        KeyPressed(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event){
    KeyPressed(event.key);
    buttonAnimation(event.key);
});
