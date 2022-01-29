const changeLang  = document.querySelectorAll('.change-language');
const htmlElement = document.querySelector('html');

changeLang.forEach( element =>
    {
        element.addEventListener('click', ()=>
        {

            if ( htmlElement.dir === 'rtl' )
            {
                htmlElement.dir = 'ltr';
                element.querySelector('span').innerHTML = "English";
            }
            else
            {
                htmlElement.dir = 'rtl';
                element.querySelector('span').innerHTML = "Arabic";
            }
        });
    });
    var slide_index = 1;
slidesDisplay(slide_index);
function nextSlide(n) {
slidesDisplay(slide_index += n);
}
function currentSlide(n) {
slidesDisplay(slide_index = n);
}
function slidesDisplay(n) {
var i;
var slides = document.getElementsByClassName("showSlider");
if (n > slides.length) { slide_index = 1 }
if (n < 1) { slide_index = slides.length }
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slides[slide_index - 1].style.display = "block";
}
const el = (element) => document.querySelector(element);
const elAll = (elements) => document.querySelectorAll(elements);

const showModalBtn = el('.show-modal-btn');
showModalBtn.addEventListener('click', () => {
  el('.container1').classList.remove('is-hidden');
});

const hideModalBtn = el('.hide-modal-btn');
hideModalBtn.addEventListener('click', () => {
  el('.container1').classList.add('is-hidden');
});

const callLink= image => {
  document.getElementById('pop').style.display = "block";
}
const viewImgBtn = el('.view-img-btn');
viewImgBtn.addEventListener('click', () => {
  el('.count1').classList.remove('is-hidden');
});


const hideImgBtn = el('.hide-img-bnt');
hideImgBtn.addEventListener('click', () => {
  el('.count1').classList.add('is-hidden');
});

const callImage = image => {
  document.getElementById('popUP').style.display = "block";
}


const hideModule = id => document.getElementById(id).style.display = "none";
var countDownDate = new Date("Feb 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
