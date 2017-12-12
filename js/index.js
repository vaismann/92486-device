var link = document.querySelector(".contacts__contact-link");
var popup = document.querySelector(".modal-contact");
var close = popup.querySelector(".modal-contact__close-btn");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-contact_show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-contact_show");
});
