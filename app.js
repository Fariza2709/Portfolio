const btnContacts = document.querySelector(".btn-contacts");
const writeMe = document.querySelector(".writeMe");
const close = document.querySelector(".close");


btnContacts.addEventListener("click", () => {
   writeMe.style.display = "flex";
});

close.addEventListener("click", () => {
   writeMe.style.display = "none";
});
