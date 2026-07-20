let images = [
"images/nature1.jpg",
"images/nature2.jpg",
"images/city1.jpg",
"images/city2.jpg",
"images/animal1.jpg",
"images/animal2.jpg"
];

let current = 0;

function openLightbox(index){

current=index;

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightbox-img").src=images[current];

}

function closeLightbox(){

document.getElementById("lightbox").style.display="none";

}

function changeImage(step){

current+=step;

if(current>=images.length)
current=0;

if(current<0)
current=images.length-1;

document.getElementById("lightbox-img").src=images[current];

}

function filterSelection(category){

let items=document.getElementsByClassName("image");

for(let i=0;i<items.length;i++){

if(category=="all"){
items[i].style.display="block";
}
else{

if(items[i].classList.contains(category))
items[i].style.display="block";

else
items[i].style.display="none";

}

}

}