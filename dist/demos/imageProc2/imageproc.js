var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
// canvas.width = 300;
// canvas.height = 300;
context.width = 100
context.height = 100
threshold = 20;
var imageData;
var originalImageData;

window.onmousemove = function(e) {
    // let amount = e.clientX / window.innerWidth;
    // threshold = amount * 100 + 10;
};

function imageLoaded(ev) {
    image = ev.target;

    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    originalImageData = imageData.data

    setInterval(draw, 10);

    draw();
}


function draw() {
    var newData = [...imageData.data];

    function colorize(index) {
        for (let i = index; i > index - 8; i -= 4) {
            if (i < 0) {
                break;
            }

            for (let a = i; a < i + 1; a++) {
                newData[a] += 5;
                if (newData[a] > 255) {
                    newData[a] = 0;
                }
            }

            newData[i + 3] = 255;
        }
    }

    // context.clearRect(0, 0, canvas.width, canvas.height);

    for (let index = 0; index < canvas.width * canvas.height * 4; index += 4) {
        let pixel = originalImageData[index];

        let left = originalImageData[index - 4];

        // colorize(index);

        if (pixel > left + threshold) {
            colorize(index);
        }
    }

    imageData = new ImageData(
        new Uint8ClampedArray(newData),
        canvas.width,
        canvas.height
    );

    context.putImageData(imageData, 0, 0);
    // for (var i = 0; i < data.length; i += 4) {
    //     r = i;
    //     g = i + 1;
    //     b = i + 2;

    //     data[r] += red;
    //     data[g] += green;
    //     data[b] += blue;

    //     if (data[r] >= 255) {
    //         data[r] = 0;
    //     }
    //     if (data[g] >= 255) {
    //         data[g] = 0;
    //     }
    //     if (data[b] >= 255) {
    //         data[b] = 0;
    //     }
    // }
}

var image_obj = new Image();
image_obj.src = "image.jpg";
image_obj.onload = imageLoaded;
