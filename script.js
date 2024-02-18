if(document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready)
}else{
  ready()
}

function ready(){
  // Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");

let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
  }else{
    nav.classList.remove("sticky");
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

// Hire Me Button Action
document.getElementById('hire-btn').addEventListener('click', hire)

function hire(){
  var email = "vinayteja433@gmail.com";
  var subject = "Request for Quote";
  var msgBody = "Hi Vinay, I have a project and i'm looking for assistance.";
  window.open(`mailto:${email}?subject=${subject}&body=${msgBody}`);
}

document.getElementById('download-btn').addEventListener('click', download)

function download(){
  document.getElementById('download-btn').href = "https://drive.google.com/uc?export=download&id=1LPBSYhJerx2bHeSxpEthTVHrBPC73y0F"
  
}

document.getElementById("whatsapp-button").addEventListener("click", function() {

  var phoneNumber = "918919713777"; 
  var message = "Hello Vinay, I have a project and i'm looking for assistance.";

  var whatsappURI = "whatsapp://send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);

  if (/Android/i.test(navigator.userAgent)) {
      window.location.href = whatsappURI;
  } else {
      alert("WhatsApp is not Supported on this device. Please use a mobile device.");
  }
});





}
 