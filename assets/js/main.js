// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]');
// Mobile Menu
function burger(){
  var burger = document.getElementById('burger');
  var links = document.getElementById('links');
  var quit = document.getElementById('quit');
  burger.style.padding = '25px 25px 300vw 200vw';
  burger.classList.add("expanded");
  links.style.display = 'flex';
  quit.style.display = 'inline';
}

function quit(){
  var burger = document.getElementById('burger');
  var links = document.getElementById('links');
  var quit = document.getElementById('quit');
  burger.style.padding = '25px 25px 32px 32px';
  burger.classList.remove("expanded");
  links.style.display = 'none';
  quit.style.display = 'none';
}

// Read More
function readMore(){
  var longParagraph = document.querySelector('.longParagraph');
  var readMore = document.querySelector('.readMore');
  var longParagraph = document.querySelector('.longParagraph');
  var readLess = document.querySelector('.readLess');
  // add extended class to paragraph
  longParagraph.classList.toggle("shortened");
  readMore.style.display = 'none';
  readLess.style.display = 'block';
}
function readLess(){
  var longParagraph = document.querySelector('.longParagraph');
  var readMore = document.querySelector('.readMore');
  var longParagraph = document.querySelector('.longParagraph');
  var readLess = document.querySelector('.readLess');
  // add extended class to paragraph
  longParagraph.classList.toggle("shortened");
  readLess.style.display = 'none';
  readMore.style.display = 'block';
}

// Carousel Home

// scroll left
const arrowRight = document.getElementById('carousel-arrow-right');

arrowRight.onclick = function () {
  var container = document.getElementById('brands-carousel');
  sideScroll(container,'right',15,190,10);
};

const arrowLeft = document.getElementById('carousel-arrow-left');

arrowLeft.onclick = function () {
  var container = document.getElementById('brands-carousel');
  sideScroll(container,'left',15,190,10);
};


function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}


// Slider

let numSlides = 4;
let activeSlide = 1;
let transitionWait = 5;

function rotateSlides() {
  const oldSlide = document.querySelector(`#home-title .slide-${activeSlide}`);
  activeSlide = activeSlide === numSlides ? 1 : activeSlide + 1;
  const newSlide = document.querySelector(`#home-title .slide-${activeSlide}`);

  oldSlide.classList.remove("active");
  newSlide.classList.add("active");
};

setInterval(rotateSlides, transitionWait * 1000);
