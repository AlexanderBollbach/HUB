var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 1000;


function imageLoaded(ev) {

    image = ev.target;

    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    setInterval(draw,40);
}


var red = 1;
var green = 6;
var blue = 2;

function draw(){

imageData = context.getImageData(0, 0,  canvas.width, canvas.height);
// var imageData = context.getImageData(0,0,canvas.width, canvas.height);
    

 var data = imageData.data;



for (var i = 0; i < data.length; i+=4) {


    r = i;
    g = i +1;
    b = i + 2;

    data[r] += red;
    data[g] += green;
    data[b] += blue;
    
    

    if (data[r] >= 255) {
        data[r] = 0;
    }
     if (data[g] >= 255) {
        data[g] = 0;
    }
     if (data[b] >= 255) {
        data[b] = 0;
    }

  


}
  
    // context.clearRect(0, 0, canvas.width, canvas.height);

    context.putImageData(imageData, 0, 0);



}

var image_obj = new Image();
image_obj.src = 'building.png';
image_obj.onload = imageLoaded;
