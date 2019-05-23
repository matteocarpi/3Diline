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
