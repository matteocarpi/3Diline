// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]');
// Mobile Menu
function burger(){
  var burger = document.getElementById('burger');
  var links = document.getElementById('links');
  var quit = document.getElementById('quit');
  burger.style.padding = '16px 16px 200vw 200vw';
  links.style.display = 'flex';
  quit.style.display = 'inline';
}

function quit(){
  var burger = document.getElementById('burger');
  var links = document.getElementById('links');
  var quit = document.getElementById('quit');
  burger.style.padding = '16px 16px 32px 32px';
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
