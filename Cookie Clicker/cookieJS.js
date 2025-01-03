var btn = document.querySelector('.btn_text');
var playerScore = 0;
var countDisplay = document.getElementById('counter__player');



btn.addEventListener('click', function() {
    playerScore++;
    countDisplay.innerHTML = playerScore;
});



