var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  document.getElementById("WelcomePage").style.display = "none";

  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;

}

function hideSlides(n) {
  document.getElementById("WelcomePage").style.display = "block";
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "none";
}

function hideHome() {
  document.getElementById("WelcomePage").style.display = "none";
}

function showHome() {
  document.getElementById("WelcomePage").style.display = "block";
}



// portfolio random showing
function showpics() {
  var myPhoto = ["images/tattoos/2.jpg", "images/tattoos/3.jpg", "images/tattoos/4.jpg", "images/tattoos/5.jpg",
    "images/tattoos/6.jpg", "images/tattoos/7.jpg", "images/tattoos/8.jpg", "images/tattoos/9.jpg", 
    "images/tattoos/10.jpg", "images/tattoos/11.jpg", "images/tattoos/12.jpg", "images/tattoos/13.jpg",
    "images/tattoos/14.jpg", "images/tattoos/15.jpg", "images/tattoos/16.jpg", "images/tattoos/17.jpg",
    "images/tattoos/18.jpg", "images/tattoos/19.jpg", "images/tattoos/20.jpg", "images/tattoos/21.jpg"]
  var container1 = document.getElementById("p1");
  var container2 = document.getElementById("p2");
  var container3 = document.getElementById("p3");
  var container4 = document.getElementById("p4");
  var container5 = document.getElementById("p5");
  var container6 = document.getElementById("p6");
  var container7 = document.getElementById("p7");
  var container8 = document.getElementById("p8");

  // (var i=0, len = myPhoto.length; i < len; ++i)
  for (var i = 0, len = 8; i < len; ++i) {
    var randomImg;
    var img = new Image();

    randomImg = Math.floor(Math.random() * myPhoto.length);
    img.src = myPhoto[randomImg];
    container1.appendChild(img);

    randomImg = Math.floor(Math.random() * myPhoto.length);
    img.src = myPhoto[randomImg];
    container2.appendChild(img);

    randomImg = Math.floor(Math.random() * myPhoto.length);
    img.src = myPhoto[randomImg];
    container3.appendChild(img);

    randomImg = Math.floor(Math.random() * myPhoto.length);
    img.src = myPhoto[randomImg];
    container4.appendChild(img);

    randomImg = Math.floor(Math.random() * myPhoto.length);
    img.src = myPhoto[randomImg];
    container5.appendChild(img);

    randomImg = Math.floor(Math.random() * myPhoto.length);
    img.src = myPhoto[randomImg];
    container6.appendChild(img);

    randomImg = Math.floor(Math.random() * myPhoto.length);
    img.src = myPhoto[randomImg];
    container7.appendChild(img);

    randomImg = Math.floor(Math.random() * myPhoto.length);
    img.src = myPhoto[randomImg];
    container8.appendChild(img);
  }

}

