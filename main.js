// var hamBurger = document.querySelector(".hamburger");
// var mainBody = document.querySelector(".main");

// hamBurger.addEventListener("click", () => {
//   var navBar = document.querySelector(".navbar");
//   navBar.classList.toggle("active");
//   mainBody.classList.toggle("active");
//   console.log("navbar clicked");
// });

// mobile responsive
const open=document.querySelector(".mob-open");
const close=document.querySelector(".mob-close");
const wrapper = document.querySelector(".mob-wrapper").classList;
open.addEventListener("click",()=>{
  wrapper.toggle("opened");
  wrapper.toggle("close");

});
close.addEventListener("click",()=>{
  wrapper.toggle("opened");
  wrapper.toggle("close");

});



//Form Validation
const contactForm = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const phoneInput = document.getElementById("phone");

contactForm.addEventListener("submit", function (event) {
  if (!isNaN(nameInput.value)) {
    window.alert("Name field Should not contain any number");
    event.preventDefault();
  }
  console.log("FormSubmitted");
});
