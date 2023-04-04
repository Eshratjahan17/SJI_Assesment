// mobile responsive
const open = document.querySelector(".mob-open");
const close = document.querySelector(".mob-close");
const wrapper = document.querySelector(".mob-wrapper").classList;
open.addEventListener("click", () => {
  wrapper.toggle("opened");
  wrapper.toggle("close");
});
close.addEventListener("click", () => {
  wrapper.toggle("opened");
  wrapper.toggle("close");
});

//Form Validation
const contactForm = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const phoneInput = document.getElementById("phone");

function validateEmail(email) {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(email);
}
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = emailInput.value;
  const name = nameInput.value;
  const message = messageInput.value;
  const phone = phoneInput.value;
  console.log(email, name, message, phone);
  if (!isNaN(name)) {
    alert("Name Can not contain Numeric Value");
    return;
  } else if (!validateEmail(email)) {
    alert("please Enter a valid email");
    return;
  } else if (isNaN(phone) || phone.toString().length !== 11) {
    alert("please enter a valid phone Number");

    return;
  }
  alert("Form Submission Successful");
});
