
let score = 0;
function changeImg()
{
var x = Math.floor(Math.random()*300);
var y = Math.floor(Math.random()*300);

console.log(x + "," + y);
var obj = document.getElementById("turkey");

obj.style.top = x + "px";
obj.style.left = y + "px";
var t = setTimeout(function(){
let scoreElement = document.getElementById('score').innerHTML = ++score;
 }, Math.floor(1000 + Math.random() * 3001));
}
 