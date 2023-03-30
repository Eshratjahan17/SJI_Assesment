var hamBurger=document.querySelector(".hamburger");
var  navBar=document.querySelector(".navbar");
// hamburger.onClick=function(){
  
//     navBar.classList.toggle("active");
// }
hamBurger.addEventListener("click", () => {
    navBar.classList.toggle("active");
    console.log("navbar clicked");
  });