var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("colorGenerator");
var style = getComputedStyle(body);

css.textContent = style.backgroundImage;
function BackgroundSelector(){
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";";
}

// color1.addEventListener("input",function(){
// 	// console.log(color1.value);
// 	// This will assign only single color to background
// 	// we have to use linear-gradient css property here
// 	// body.style.background = color1.value;
// 	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
// });

// color2.addEventListener("input",function(){
// 	// console.log(color2.value);
// 	// body.style.background = color2.value;
// 	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
// });

color1.addEventListener("input",BackgroundSelector);
color2.addEventListener("input",BackgroundSelector);
