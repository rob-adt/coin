const coin = document.getElementById("coin");
const counterDisplay = document.getElementById("counter");

var counter = 0;


function moveCoin() {
    coin.style.left = Math.random() * (window.innerWidth - coin.offsetWidth) + "px";
    coin.style.top = Math.random() * (window.innerHeight - coin.offsetHeight) + "px";
}

moveCoin();

coin.onmouseover = function () {
    coin.style.display = "none";
    var audio = document.getElementById("coinsound");
    audio.play();
    counter++;
    counterDisplay.textContent = counter;
    setTimeout(function () {
        moveCoin();
        coin.style.display = "block";
    }, 1500);
};