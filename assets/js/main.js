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

var numSlides, activeSlide, nextSlide, transitionWait;

numSlides = 5;
activeSlide = 1;
transitionWait = 5;

function changeSlide() {
    setTimeout(function(){
        if (activeSlide < numSlides) {
            nextSlide = activeSlide + 1;
            document.querySelector("#home-title .slide-" + nextSlide)
            .classList.add("active");
            // console.log(activeSlide);
            document.
            querySelector("#home-title .slide-" + activeSlide)
            .classList.remove("active");
        } else {


          document.querySelector("#home-title .slide-" + activeSlide)
          .classList.remove("active");

          document.querySelector("#home-title .slide-1")
          .classList.add("active");

          activeSlide = 1;
        }
        activeSlide += 1;
        // console.log(activeSlide);
        changeSlide();
    }, transitionWait * 1000);
};
changeSlide();
