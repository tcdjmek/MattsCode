let score = 0;
let cookieElement = document.getElementById('cookie');
let scoreElement = document.getElementById('score');


cookieElement.addEventListener('click', function () {
    score++;
    scoreElement.textContent = score + " coins";
});