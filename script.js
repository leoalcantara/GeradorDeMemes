var c = document.querySelector("#c");
var ctx = c.getContext("2d");

var image = new Image();

image.onload = () => {
    console.log ("Loaded Image");
    ctx.drawImage(image, 0, 0, c.width, c.height );
} 
image.src = "image.png";
