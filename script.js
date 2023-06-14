var img = document.getElementById('gallery-img')
var prev = document.getElementById('prev')
var next = document.getElementById('next')

var images = ['hs.jpg' , 'ts.jpg',  'vinyl.jpg', 'TAYLOR.jpg']

var currentimage = 0;

function changeimage(e) {
if(e.target.id == "next" && currentimage !== images.length-1 ){
    //increment the images (in other words, go to the next one)
    currentimage = currentimage +1;
}

if (e.target.it == 'prev' && currentimage !== 0) {
    //go to the previous one
    currentimage = currentimage - 1;
}

img.setAttribute("src", "images/" + images[currentimage]);
}

prev.addEventListener("click", changeimage);
next.addEventListener("click", changeimage);