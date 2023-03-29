var hamBurger=document.querySelector(".hamburger");
var  navMenu=document.querySelector(".navMenu");
// hamburger.onClick=function(){
  
//     navBar.classList.toggle("active");
// }
hamBurger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    console.log("navbar clicked");
  });