svg4everybody();

var link = document.querySelector(".contacts__contact-link");
var popup = document.querySelector(".modal-contact");
var close = popup.querySelector(".modal-contact__close-btn");
var form = popup.querySelector(".contact-form");
var contact_name = popup.querySelector("[name=contact-name]");
var contact_email = popup.querySelector("[name=contact-email]");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-contact_show");
  contact_name.focus();
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-contact_show");
  popup.classList.remove("modal-contact_error");
});

 form.addEventListener("submit", function (evt) {
    if (!contact_name.value || !contact_email.value) {
      evt.preventDefault();
      popup.classList.remove("modal-contact_error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-contact_error");
    } else {
      localStorage.setItem("contact-name", contact_name.value);
    }
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-contact_show")) {
        popup.classList.remove("modal-contact_show");
        popup.classList.remove("modal-contact_error");
      }
    }
  });

  var mapLink = document.querySelector(".map__link");
  var mapPopup = document.querySelector(".company-details__map");
  var mapClose = mapPopup.querySelector(".modal-contact__close-btn");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-map_show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-map_show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-map_show")) {
        mapPopup.classList.remove("modal-map_show");
      }
    }
  });